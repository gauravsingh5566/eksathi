import { Add, CheckCircle, CheckCircleTwoTone, Circle, DeselectRounded, HourglassTopTwoTone, Image, MailTwoTone, PendingActions, PendingActionsTwoTone, PersonAddAlt, PersonAddAltSharp, PunchClockTwoTone, SmsFailedRounded, StarRounded } from '@mui/icons-material'
import { Avatar, Divider, IconButton, Tooltip } from '@mui/joy'
import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { useGlobalContext } from 'global/context'
import { Popup } from 'layout/Popup'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Geocode from "react-geocode"
import { toast } from 'react-hot-toast'
import useDidMountEffect from 'global/useDidMountEffect'

const ExpertRow = ({ data, index }) => {
    const { userData, api, setShowMessage, setMessageTo, setAuth } = useGlobalContext();
    const handleConnect = async () => {
        try {
            const res = await api.post(`/app/connections/send-request`, {
                senderId: userData?.id,
                receiverId: data?.id
            });
            if (res?.status === 200) {
                data = { ...data, connectionStatus: 'pending' };
                toast.success(res?.data?.message);
            }
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 401) {
                setAuth(true);
            } else {
                toast.error(error?.response?.data?.message);
            }
        }
    }

    const handleMessage = () => {
        setShowMessage(true);
        setMessageTo(data);
    }

    return <>
        {/* {index > 0 && <Divider className="my-2"/>} */}
        <div className='d-flex rounded p-2 align-items-center hover-bg mb-3'>
            <ListItemAvatar>
                <Avatar src={data?.avatar_url} sx={{ height: 40, width: 40 }} />
            </ListItemAvatar>
            <ListItemText className=' pt-0 m-0'
                primary={
                    <div style={{ lineHeight: '20px' }}>
                        <p className='text-dark fw-bold'><Link to={`/${data?.username}`}>{data?.first_name} {data?.last_name}</Link>
                            {/* <span><Circle
                                // color='success'
                                style={{ fontSize: '10px', color: 'lightgreen' }}
                            /> </span> */}
                        </p>
                        {
                            data?.skill_name?.map((skill, index) => index < 2 && (
                                <p className='fw-bold text-info d-flex align-items-center' style={{ fontSize: "14px" }} key={index}>
                                    <StarRounded style={{ fontSize: "14px", color: "gold", marginLeft: -3 }} />
                                    {skill}
                                </p>
                            ))
                        }
                    </div>
                }
            />
            <Tooltip arrow placement='right'
                color={data?.connectionStatus === "accepted" ? "info" :
                    data?.connectionStatus === "pending" ? "warning" :
                        data?.connectionStatus === "rejected" ? "danger" :
                            "primary"
                }
                variant='soft'
                title={data?.connectionStatus === "accepted" ? `Message to ${data?.first_name}` :
                    data?.connectionStatus === "pending" ? "Your connection request is pending" :
                        data?.connectionStatus === "rejected" ? `Your connection request is rejected by ${data?.first_name}` :
                            `Send connection request to ${data?.first_name}`
                }
            >
                <IconButton
                    color={data?.connectionStatus === "accepted" ? "info" :
                        data?.connectionStatus === "pending" ? "warning" :
                            data?.connectionStatus === "rejected" ? "danger" :
                                "primary"
                    }
                    onClick={data?.connectionStatus === "accepted" ? handleMessage : data?.connectionStatus === "pending" ? null : handleConnect}>


                    {data?.connectionStatus === "accepted" ? <MailTwoTone /> :
                        data?.connectionStatus === "pending" ? <HourglassTopTwoTone /> :
                            data?.connectionStatus === "rejected" ? <SmsFailedRounded /> :
                                <PersonAddAltSharp />
                    }

                </IconButton>
            </Tooltip>
        </div>

    </>
}

const SuggestedExperts = (props) => {
    const { api, userData } = useGlobalContext();
    const [heading, setHeading] = useState(props?.heading || 'Suggested Experts');
    const [suggestedExperts, setSuggestedExperts] = useState([]);
    let [administrativeAreaLevel1, setAdministrativeAreaLevel1] = useState("");
    let [administrativeAreaLevel3, setAdministrativeAreaLevel3] = useState("");
    let [country, setcountry] = useState("");
    let [postalCode, setPostalcode] = useState()
    const [coords, setCoords] = useState({});
    const [addres, setAddres] = useState("");
    const [locality, setLocality] = useState(props?.location);
    const [subLocality, setSubLocality] = useState(props?.location)
    const apiKey = "AIzaSyBxphSkk_cMLJE6Ii12fiToBaXuxGYQukQ";
    Geocode.setApiKey(apiKey);
    Geocode.setLanguage("en");
    Geocode.setRegion("IN");
    Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();

    const fetchLatLong = () => {
        window?.navigator?.geolocation?.getCurrentPosition((geolocation) => {
            const coordinates = geolocation?.coords;
            setCoords(coordinates);
            if (coordinates) {
                console.log(Geocode);
                Geocode.fromLatLng(coordinates.latitude, coordinates.longitude).then(
                    (response) => {
                        let address = response.results[0].formatted_address;
                        console.log(response.results[0].address_components)
                        response.results[0].address_components.forEach((values, index) => {
                            console.log(values.types)
                            console.log(values.types.includes("country"))
                            if (values.types[0].toLowerCase() === "postal_code") {
                                console.log("POSTAL", values.long_name);
                                address = address.replace(values.long_name, "")
                                setPostalcode(values.long_name);
                                console.log(address)
                            }
                            if (values.types[0].toLowerCase() === "country") {
                                address = address.replace(values.long_name, "")
                                console.log(address)
                                setcountry(values.long_name);
                            }
                            if (values.types[0].toLowerCase() === "administrative_area_level_3") {
                                // console.log(values.long_name)
                                address = address.replace(values.long_name, "")

                                setAdministrativeAreaLevel3(values.long_name)
                                // console.log(administrativeAreaLevel3)
                            }
                            if (values.types[0].toLowerCase() === "administrative_area_level_1") {
                                address = address.replace(values.long_name, "")
                                console.log(address)
                                setAdministrativeAreaLevel1(values.long_name)
                            }
                            if (values.types[0].toLowerCase() === "locality") {
                                address = address.replace(values.long_name, "")
                                console.log(address)
                                setLocality(values.long_name);
                            }
                            if (values?.types[0]?.toLowerCase() === "sublocality" || values?.types[1]?.toLowerCase() === "sublocality") {
                                address = address.replace(values.long_name, "")
                                console.log(address)
                                setSubLocality(values.long_name);
                            }
                            address = address.replace(",  ,", "")
                            if (address.endsWith(",") || address.endsWith(" ")) {
                                console.log(index)
                            }
                        })
                        setAddres(address);
                    },
                    (error) => {
                        console.error(error);
                    }
                );
            }
        })
    }

    const getSuggestedExperts = async () => {
        console.log({ addres });
        console.log("Locality Found: ", locality);
        try {
            const res = await api.post(`/app/user/suggested/experts`, {
                userId: userData?.id,
                skill: props?.skill,
                location: subLocality || locality
            });
            if (res?.status === 200) {
                console.log("Suggested Experts: ", res?.data);
                setSuggestedExperts(res?.data?.results);
            }
        } catch (error) {
            console.log(error);
            // Popup('error', error?.response?.data?.message);
            // window.location.reload(true);
        }
    }

    useDidMountEffect(() => {
        console.log({ locality, subLocality });
        getSuggestedExperts();
    }, [subLocality, locality]);


    useEffect(() => {
        fetchLatLong();
        getSuggestedExperts();
    }, []);
    return (
        <div className='p-2 p-lg-3 rounded shadow-lg mb-3'>
            <div className="d-flex justify-content-between">
                <h5>{heading}</h5>
                <Link to={`/experts`}>See All</Link>
            </div>
            <p>Based on location (<a>{subLocality || locality}</a>)</p>
            <List className='mt-2' sx={{ width: '100%', bgcolor: 'light', p: 0 }}>
                {
                    suggestedExperts?.map((data, index) => (
                        <ExpertRow data={data} index={index} key={index} />
                    ))
                }
            </List>
        </div>
    )
}

export default SuggestedExperts
import React from 'react'
import UserCard from './components/UserCard'
import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from 'global/context';
import UserTicket from './components/UserTicket';
import UserCard2 from './components/UserCard2';
import { Box, Button, Checkbox, Divider, FormControl, FormLabel, IconButton, Input, Option, Radio, RadioGroup, Select } from '@mui/joy';
import { ButtonGroup, FormControlLabel, FormGroup, InputAdornment, OutlinedInput, Rating } from '@mui/material';
import { CloseRounded, SearchTwoTone, Star } from '@mui/icons-material';
import SuggestedExperts from '../widgets/SuggestedExperts';
import UsersSkeleton from './components/UsersSkeleton';
import { useLocation } from 'react-router';
import Geocode from "react-geocode"
import { Popup } from 'layout/Popup';
import useDidMountEffect from 'global/useDidMountEffect';

const labels = {
    0.5: 'Just Started',
    1: 'Just Started+',
    1.5: 'Still Learning',
    2: 'Still Learning+',
    2.5: 'Gaining Expertise',
    3: 'Gaining Expertise+',
    3.5: 'Expert Now',
    4: 'Expert Now+',
    4.5: 'Param Gyani',
    5: 'Param Gyani+',
};

const ExpertsContainer = () => {
    const loca = useLocation();
    const { api, apiAuth, userData } = useGlobalContext();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState({
        teacher: false,
        student: false,
        professional: false,
        location: false,
        expertise: false,
        rating: false,
    });
    const [sort, setSort] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [heading, setHeading] = useState('Suggested Experts');
    const [search, setSearch] = useState(loca?.state?.keyword);
    const [expertises, setExpertises] = useState([]);
    const [locations, setLocations] = useState([]);
    const [location, setLocation] = useState();
    const [expertise, setExpertise] = useState();
    const [rating, setRating] = useState();
    const [category, setCategory] = useState();
    const [tags, setTags] = useState();
    const [totalExperts, setTotalExperts] = useState();


    let [administrativeAreaLevel1, setAdministrativeAreaLevel1] = useState("");
    let [administrativeAreaLevel3, setAdministrativeAreaLevel3] = useState("");
    let [country, setcountry] = useState("");
    let [postalCode, setPostalcode] = useState()
    const [coords, setCoords] = useState({});
    const [addres, setAddres] = useState("");
    const [locality, setLocality] = useState(loca?.state?.location);
    const [subLocality, setSubLocality] = useState(loca?.state?.location)
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
                                setLocation(values.long_name);
                            }
                            if (values?.types[0]?.toLowerCase() === "sublocality" || values?.types[1]?.toLowerCase() === "sublocality") {
                                address = address.replace(values.long_name, "")
                                console.log(address)
                                setSubLocality(values.long_name);
                                setLocation(values.long_name);
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

    const getUsers = async () => {
        setLoading(true);
        // try {
        //     const res = await api.get(`app/user?sortBy=${sort}&search=${search}&teacher=${filter?.teacher}&student=${filter?.student}&professional=${filter?.professional}&location=${location}&skill=${expertise}&rating=${rating}&limit=${limit}&page=${page}`);
        //     if (res?.status === 200) {
        //         console.log('User successfully fetched: ', res?.data);
        //         setUsers(res?.data?.users);
        //         setExpertises(res?.data?.expertises);
        //         setLocations(res?.data?.locations);
        //         setLoading(false);
        //     }
        // } catch (error) {
        //     console.log(error);
        //     setLoading(false);
        // }

        try {
            const res = await api.post(`/app/user/suggested/experts`, {
                userId: userData?.id,
                skill: loca?.state?.skill,
                location: location,
                expertise: expertise,
                rating: rating,
                category: category, // Optional: add category filter eg- 'web development'
                search: search, // Optional: add search filter eg- 'John'
                tags: tags, // Optional: add tags filter eg-  '[{"id": 1}, {"id": 2}]'
                page: page, // Optional: add pagination eg- 1
                limit: limit, // Optional: set number of results per page eg- 5
                sort: sort // Optional: set sorting field ('rating' or 'first_name' or 'location')
            });
            if (res?.status === 200) {
                console.log("Suggested Experts: ", res?.data);
                setUsers(res?.data?.results);
                setExpertises(res?.data?.expertises);
                setLocations(res?.data?.locations);
                setTotalExperts(res?.data?.totalCount);
                search ? setHeading(`${res?.data?.totalCount} Experts Found`) : setHeading(`Suggested Experts`);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            Popup('error', error?.response?.data?.message || error?.response?.data?.error);
            // window.location.reload(true);
        }
    }


    // const searchTimeout = setTimeout(()=> {
    //     console.log("Searching..")
    // }, 1000);

    // function clearSearch() {
    //     clearTimeout(searchTimeout);
    // }

    useEffect(() => {
        console.log("Fetching... Location");
        fetchLatLong();
    }, []);

    // useEffect(() => {
    //     console.log("Fetching Users... ");
    //     getUsers();
    // }, [location]);

    useDidMountEffect(() => {
        getUsers();
        console.log(`User successfully fetched sorted By ${sort}: `, users, `Filter By : `, { sort, filter, location, expertise, rating, search });
    }, [sort, filter, location, expertise, rating, search]);

    const action = React.useRef(null);

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        {
                            search &&
                            <button className='forum-nav-item mb-2 p-3 shadow rounded-3 w-100'
                                onClick={() => {
                                    setSearch('');
                                    setHeading('Suggested Experts');
                                }}
                            >
                                <h5>Switch to All Suggested Experts</h5>
                            </button>
                        }
                        <div className="filters mb-3 rounded-3 shadow p-2 p-lg-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className='mb-2'>Filter By</h5>
                                <Button variant='plain' size='sm' className='text-capitalize' onClick={() => {
                                    setFilter({});
                                    setRating(null);
                                    setLocation(null);
                                    setExpertise(null);
                                }}>Reset</Button>
                            </div>
                            <FormGroup>

                                <Select
                                    // action={action}
                                    value={location}
                                    placeholder="Location"
                                    className='mb-2'
                                    onChange={(e, newValue) => setLocation(newValue)}
                                    {...(location && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setLocation(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >

                                    {
                                        locations?.map((loc, index) => (
                                            <Option key={index} value={loc}>{loc}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    // action={action}
                                    value={expertise}
                                    placeholder="Expertise"
                                    className='mb-2'
                                    onChange={(e, newValue) => setExpertise(newValue)}
                                    {...(expertise && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setExpertise(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >

                                    {
                                        expertises?.map((expertise, index) => (
                                            <Option key={index} value={expertise}>{expertise}</Option>
                                        ))
                                    }
                                </Select>

                                <Select
                                    action={action}
                                    value={rating}
                                    placeholder="Rating"
                                    className='mb-2'
                                    onChange={(e, newValue) => setRating(newValue)}
                                    {...(rating && {
                                        // display the button and remove select indicator
                                        // when user has selected a value
                                        endDecorator: (
                                            <IconButton
                                                size="sm"
                                                variant="plain"
                                                color="neutral"
                                                onMouseDown={(event) => {
                                                    // don't open the popup when clicking on this button
                                                    event.stopPropagation();
                                                }}
                                                onClick={() => {
                                                    setRating(null);
                                                    action.current?.focusVisible();
                                                }}
                                            >
                                                <CloseRounded />
                                            </IconButton>
                                        ),
                                        indicator: null,
                                    })}
                                    sx={{ minWidth: 160 }}
                                >
                                    <Option value="1">
                                        <Rating
                                            name="text-feedback"
                                            value={1}
                                            readOnly
                                            precision={1}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[1]}</Box>
                                    </Option>
                                    <Option value="2">
                                        <Rating
                                            name="text-feedback"
                                            value={2}
                                            readOnly
                                            precision={2}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[2]}</Box>
                                    </Option>
                                    <Option value="3">
                                        <Rating
                                            name="text-feedback"
                                            value={3}
                                            readOnly
                                            precision={3}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[3]}</Box>
                                    </Option>
                                    <Option value="4">
                                        <Rating
                                            name="text-feedback"
                                            value={4}
                                            readOnly
                                            precision={4}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[4]}</Box>
                                    </Option>
                                    <Option value="5">
                                        <Rating
                                            name="text-feedback"
                                            value={5}
                                            readOnly
                                            precision={5}
                                            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[5]}</Box>
                                    </Option>

                                </Select>
                            </FormGroup>
                        </div>
                        {/* <div className="filters mb-3 rounded-3 border p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className='mb-2'>Sort By</h5>
                                <Button variant='outlined' size='small' className='text-capitalize' onClick={() => {
                                    setSort('');
                                    setHeading("Suggested Experts");
                                }}>Reset</Button>
                            </div>
                            <FormControl>
                                <RadioGroup value={sort} name="sort" onChange={(e) => {
                                    setSort(e.target.value);
                                    setHeading("Sort By " + e.target.value);
                                }}>
                                    <Radio name="sort" variant="soft" label="Newest" value="newest" />
                                    <Radio name="sort" variant="soft" label="Student" value="student" />
                                    <Radio name="sort" variant="soft" label="Teacher" value="teacher" />
                                    <Radio name="sort" variant="soft" label="Professional" value="professional" />
                                </RadioGroup>
                            </FormControl>
                        </div> */}
                        {/* <SuggestedExperts className="mb-3" /> */}
                    </div>
                    <div className="col-12 col-lg-9">
                        <FormControl fullWidth className='mb-3 rounded shadow'>
                            <Input
                                size='lg'
                                variant='plain'
                                color="info"
                                id="search"
                                type='text'
                                className='rounded-4 px-3'
                                name='search'
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                endDecorator={
                                    <InputAdornment position="end">
                                        <IconButton
                                        style={{borderRadius: '50%'}}
                                            variant='plain'
                                            color='info'
                                            aria-label="toggle password visibility"
                                            onClick={() => {
                                                setHeading(`Search Results`);
                                                getUsers();
                                            }}
                                            edge="end"
                                        >
                                            <SearchTwoTone />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                // label="Password"
                                placeholder='Search user by name or expertise or location'
                            />
                        </FormControl>
                        <div className="d-flex justify-content-between my-3">
                            <h4>{heading} {users?.length ? `(${users?.length}/${totalExperts})` : null}</h4>
                            <div className="d-flex align-items-center">
                                <h6 className='mr-3 '>Sort By {" "}</h6>
                                <ButtonGroup size="small" aria-label="small button group" className='shadow rounded'>
                                    <Button variant='plain' size='sm' className='text-capitalize' key="one" onClick={() => {
                                        setSort('location');
                                        // setHeading('Sort By Students');
                                    }}>Location</Button>
                                    <Button variant='plain' size='sm' className='text-capitalize' key="two" onClick={() => {
                                        setSort('rating');
                                        // setHeading('Sort By Teachers');
                                    }}>Rating</Button>
                                    <Button variant='plain' size='sm' className='text-capitalize' key="three" onClick={() => {
                                        setSort('first_name');
                                        // setHeading('Sort By Professionals');
                                    }}>Name (a-z)</Button>
                                </ButtonGroup>
                            </div>
                        </div>


                        <div className="row">
                            {
                                loading ?
                                    <>
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                        <UsersSkeleton />
                                    </> :
                                    users?.length ?
                                        users?.map((user) => {
                                            // return <UserCard user={user} />
                                            return <UserTicket key={user?.id} user={user} />
                                        }) :

                                        <div className="rouded-4 p-4">
                                            <h3>No user Found</h3>
                                        </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertsContainer
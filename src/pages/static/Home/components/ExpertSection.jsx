import { useGlobalContext } from "global/context";
import UserTicket from "pages/user/profile/components/UserTicket";
import React, { useEffect } from "react";
import { useState } from "react";
import Geocode from "react-geocode";
import { Link } from "react-router-dom";
import ExpertCard from "./ExpertCard";
import Institutes from "pages/static/Institute/Institutes";
import InstituteCard from "./InstituteCard";

const ExpertSection = () => {
  const { api, userData } = useGlobalContext();
  const [users, setUsers] = useState([]);

  let [administrativeAreaLevel1, setAdministrativeAreaLevel1] = useState("");
  let [administrativeAreaLevel3, setAdministrativeAreaLevel3] = useState("");
  let [country, setcountry] = useState("");
  let [postalCode, setPostalcode] = useState();
  const [coords, setCoords] = useState({});
  const [addres, setAddres] = useState("");
  const [locality, setLocality] = useState();
  const [subLocality, setSubLocality] = useState();
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
            console.log("Location Response: ", response);
            console.log(response.results[0].address_components);
            response.results[0].address_components.forEach((values, index) => {
              if (values.types[0].toLowerCase() === "locality") {
                address = address.replace(values.long_name, "");
                console.log(address);
                setLocality(values.long_name);
                getUsers(values.long_name);
              }
              if (
                values?.types[0]?.toLowerCase() === "sublocality" ||
                values?.types[1]?.toLowerCase() === "sublocality"
              ) {
                address = address.replace(values.long_name, "");
                console.log(address);
                setSubLocality(values.long_name);
              }
              address = address.replace(",  ,", "");
              if (address.endsWith(",") || address.endsWith(" ")) {
                console.log(index);
              }
            });
            setAddres(address);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    });
  };

  const getUsers = async (location) => {
    console.log({ addres });
    console.log("Locality Found: ", locality);
    try {
      const res = await api.post(`/app/user/suggested/experts`, {
        userId: userData?.id,
        sort: "location",
        limit: 4,
      });
      if (res?.status === 200) {
        console.log("Suggested Experts: ", res?.data);
        setUsers(res?.data?.results);
      }
    } catch (error) {
      console.log(error);
      // Popup('error', error?.response?.data?.message);
      // window.location.reload(true);
    }
  };

  useEffect(() => {
    fetchLatLong();
  }, []);

  return (
    <>
      <section className="container mb-5 py-5 ">
        <div className="fw-bold mb-4 d-flex flex-wrap justify-content-between">
          <h3 className="fw-bold">Gyani Near You</h3>
          <Link to="/experts">View All Gyani's</Link>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-2">
          {users?.map((user) => (
            <ExpertCard user={user} key={user?.id} />
          ))}
        </div>
      </section>
      <section className="container mb-5 py-5 ">
        <div className="fw-bold mb-4 d-flex flex-wrap justify-content-between">
          <h3 className="fw-bold">Institute Near You</h3>
          <Link to="/institutes">View All Institute's</Link>
        </div>
        <div className=" ">
          <InstituteCard onlyShow={4}/>
        </div>
      </section>
    </>
  );
};

export default ExpertSection;

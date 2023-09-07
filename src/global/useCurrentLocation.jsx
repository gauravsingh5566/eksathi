
import { pop2 } from 'layout/Popup';
import React, { useEffect, useState } from 'react';
import Geocode from "react-geocode";
import { toast } from 'react-hot-toast';

// Set Geocode API configuration
Geocode.setLanguage("en");
Geocode.setRegion("IN");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const useCurrentLocation = () => {
  // Fetch Current Location
  const [states, setStates] = useState([]);
  const [liveState, setLiveState] = useState(null);
  const [liveDistrict, setLiveDistrict] = useState(null);
  const [liveCountry, setLiveCountry] = useState(null);
  const [livePostalCode, setLivePostalCode] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [findingLocation, setFindingLocation] = useState(false);
  const [coords, setCoords] = useState(null);

  // Fetch Coordinates
  const fetchCoordinates = () => {
    window?.navigator?.geolocation?.getCurrentPosition(async (geolocation) => {
      const coordinates = geolocation?.coords;
      setCoords(coordinates);
    });
  };

  // Fetch Address
  const fetchAddress = async (coordinates) => {
    if (coordinates) {
      try {
        const response = await Geocode.fromLatLng(coordinates.latitude, coordinates.longitude);
        const addressComponents = response.results[0].address_components;

        let address = response.results[0].formatted_address;

        addressComponents.forEach((values) => {
          const type = values.types[0].toLowerCase();

          if (type === "postal_code") {
            address = address.replace(values.long_name, "");
            setLivePostalCode(values.long_name);
          }
          if (type === "country") {
            address = address.replace(values.long_name, "");
            setLiveCountry(values.long_name);
          }
          if (type === "administrative_area_level_3") {
            address = address.replace(values.long_name, "");
            setLiveDistrict(values.long_name);
          }
          if (type === "administrative_area_level_1") {
            address = address.replace(values.long_name, "");
            setLiveState(values.long_name);
          }
        });

        address = address.replace(",  ,", "").trim();
        setCurrentAddress(address);
      } catch (error) {
        console.error(error);
        toast.error("Error fetching address. Please try again.");
      }
    } else {
      setFindingLocation(false);
    }
  };

  // Fetch Location based on Pincode
  const fetchLocationByPincode = async (pincode) => {
    try {
      const response = await Geocode.fromAddress(pincode);
      const location = response.results[0].geometry.location;

      const coordinates = {
        latitude: location.lat,
        longitude: location.lng,
      };

      setCoords(coordinates);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching location. Please try again.");
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (livePostalCode) {
      fetchLocationByPincode(livePostalCode);
    }
  }, [livePostalCode]);

  return {
    findingLocation,
    liveState,
    liveDistrict,
    liveCountry,
    livePostalCode,
    currentAddress,
    states,
    fetchLocationByPincode,
  };
};

export default useCurrentLocation;

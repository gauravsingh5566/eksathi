import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/css/lineawesome.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "./assets/css/custom.css";
import MainRoutes from "Routes/MainRoutes";
import LoginPopup from "components/Modals/LoginPopup";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useGlobalContext } from "global/context";
import toast, { Toaster } from "react-hot-toast";
import { Stack } from "@mui/joy";
import PopUpMessage from "pages/static/Careers/components/MessageComponents/PopUpMessage";

function App() {
  const [username, setUsername] = useState("");
  const { socket, setSocket, userData, showMessage, setShowMessage, messageTo, setOnlineUsers, getCategories } = useGlobalContext();

//   const fetchLatLong = () => {
//     window?.navigator?.geolocation?.getCurrentPosition((geolocation) => {
//         const coordinates = geolocation?.coords;
//         setCoords(coordinates);
//         if (coordinates) {
//             console.log(Geocode);
//             Geocode.fromLatLng(coordinates.latitude, coordinates.longitude).then(
//                 (response) => {
//                     let address = response.results[0].formatted_address;
//                     console.log(response.results[0].address_components)
//                     response.results[0].address_components.forEach((values, index) => {
//                         console.log(values.types)
//                         console.log(values.types.includes("country"))
//                         if (values.types[0].toLowerCase() === "postal_code") {
//                             console.log("POSTAL", values.long_name);
//                             address = address.replace(values.long_name, "")
//                             setPostalcode(values.long_name);
//                             console.log(address)
//                         }
//                         if (values.types[0].toLowerCase() === "country") {
//                             address = address.replace(values.long_name, "")
//                             console.log(address)
//                             setcountry(values.long_name);
//                         }
//                         if (values.types[0].toLowerCase() === "administrative_area_level_3") {
//                             // console.log(values.long_name)
//                             address = address.replace(values.long_name, "")

//                             setAdministrativeAreaLevel3(values.long_name)
//                             // console.log(administrativeAreaLevel3)
//                         }
//                         if (values.types[0].toLowerCase() === "administrative_area_level_1") {
//                             address = address.replace(values.long_name, "")
//                             console.log(address)
//                             setAdministrativeAreaLevel1(values.long_name)
//                         }
//                         if (values.types[0].toLowerCase() === "locality") {
//                             address = address.replace(values.long_name, "")
//                             console.log(address)
//                             setLocality(values.long_name);
//                         }
//                         if (values?.types[0]?.toLowerCase() === "sublocality" || values?.types[1]?.toLowerCase() === "sublocality") {
//                             address = address.replace(values.long_name, "")
//                             console.log(address)
//                             setSubLocality(values.long_name);
//                         }
//                         address = address.replace(",  ,", "")
//                         if (address.endsWith(",") || address.endsWith(" ")) {
//                             console.log(index)
//                         }
//                     })
//                     setAddres(address);
//                 },
//                 (error) => {
//                     console.error(error);
//                 }
//             );
//         }
//     })
// }

  useEffect(() => {
    if (userData?.id !== undefined) {
      setSocket(io(process.env.REACT_APP_API_ENDPOINT));
    }
    getCategories();
  }, []);

  useEffect(() => {
    socket?.emit("newUser", userData?.id);
  }, [socket, userData]);

  useEffect(() => {
    socket?.on("online-users", (data) => {
      console.log("Online Users:", data);
      setOnlineUsers(data);
    });
    socket?.on("user-left", (data) => {
      console.log("User left:", data);
    })
  }, [socket]);

  return (
    <BrowserRouter>
      <LoginPopup />
      <Navbar socket={socket} />
      <MainRoutes />
      <Footer />
      <div className="container">
        <PopUpMessage windowOpen={showMessage} setWindowOpen={setShowMessage} user={messageTo} />
      </div>
    </BrowserRouter>
  );
}

export default App;

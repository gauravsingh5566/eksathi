import { UserProvider } from "global/context";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '@fontsource/public-sans';
import { Toaster } from "react-hot-toast";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <React.StrictMode>
      <App />
      <Toaster position="bottom-right"/>
    </React.StrictMode>
  </UserProvider>
);

import { Avatar, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Input, Table } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

import IconButton from "@mui/material/IconButton";
import { useGlobalContext } from "global/context";

import { styled } from "styled-components";
import PostJob from "pages/static/Careers/PostJob";

function JobsPost() {
  const { setOnboardingData, userData, OnboardingData } = useGlobalContext();
  const location = useLocation();
  const userId = location?.state?.userId;

  // useEffect hook to log the userId when the component mounts
  useEffect(() => {
    console.log("User ID in InstituteDashboard:", userId);
  }, [userId]);

  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setHasShadow(window.innerWidth > 767);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customStyle = {
    borderRadius: "0.375rem",
    boxShadow: hasShadow ? "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)" : "none",
  };

  const myFunction = () => {
    alert("You have changed the size of the browser window!");
  };

  const ScrollerStyle = {
    maxHeight: "900px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };
  const ScrollHiddenDiv = styled.div`
    .scroll-bar-hidden::-webkit-scrollbar {
      display: none;
    }
  `;

  const ScrollMinibarDiv = styled.div`
    .scroll-minibar::-webkit-scrollbar {
      width: 3px;
      background-color: black;
    }

    .scroll-minibar::-webkit-scrollbar-thumb {
      background-color: rgb(185, 182, 182) !important;
    }
  `;

  return (
    <>
      <div className="">
        <div
          className="col col-12 col-lg-12 scroll-minibar"
          style={ScrollerStyle}
        >
          <div>
            <PostJob />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobsPost;

import {
  Avatar,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Input, Menu, MenuItem, Table } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

import IconButton from "@mui/material/IconButton";
import { useGlobalContext } from "global/context";

import { styled } from "styled-components";
import ApplicantsData from "./Components/ApplicantsData";
import ApplicationData from "./Components/ApplicationData";
import { MoreVert } from "@mui/icons-material";

function Application() {
  const { setOnboardingData, userData, OnboardingData } = useGlobalContext();
  const location = useLocation();
  const userId = location?.state?.userId;
  const [hasShadow, setHasShadow] = useState(true);
  const [index, setIndex] = React.useState(0);

  // useEffect hook to log the userId when the component mounts
  useEffect(() => {
    console.log("User ID in InstituteDashboard:", userId);
  }, [userId]);

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

  const [view, setView] = useState(false);

  const handleViewChange = () => {
    setView(!view);
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <>
      <div
        className="container-fluid py-4 scroll-minibar"
        style={ScrollerStyle}
      >
        <div className="mt-3">
          <div className="row mb-5">
            <h4 className=" col font-weight-bold mb-2">Applications</h4>
            <div className="form col  d-flex align-items-center ">
              <Input
                fullWidth
                placeholder="Type in here…"
                variant="outlined"
                sx={{ width: "100%" }}
                endDecorator={<SearchIcon />}
              />
            </div>
            <div className="view-toggle  p-2 ml-2 d-flex align-items-center justify-content-end">
              <ToggleButtonGroup
                value={view}
                exclusive
                sx={{ width: "100%", height: "40px" }}
                aria-label="view toggle group"
              >
                <ToggleButton
                  selected={index === 5}
                  variant={index === 5 ? "soft" : "plain"}
                  color={index === 5 ? "info" : undefined}
                  onClick={() => {
                    setIndex(5);
                    setView(false);
                  }}
                  value="grid"
                  className="text-dark  font-weight-bold text-capitalize"
                >
                  Grid View
                </ToggleButton>
                <ToggleButton
                  selected={index === 6}
                  variant={index === 6 ? "soft" : "plain"}
                  color={index === 6 ? "info" : undefined}
                  onClick={() => {
                    setIndex(6);
                    setView(true);
                  }}
                  value="list"
                  className="text-dark font-weight-bold text-capitalize"
                >
                  List View
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className="ml-3 mt-2">
              <IconButton
                id="positioned-demo-button"
                aria-controls={open ? "positioned-demo-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? true : undefined}
                variant="plain"
                color="neutral"
                onClick={handleClick}
              >
                <MoreVert className="fs-25" />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="basic-demo-button"
                placement="bottom-end"
              >
                <MenuItem onClick={handleClose}>Select</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
                <MenuItem onClick={handleClose}>Reject</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-3">
            <ApplicationData view={view} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Application;

import { Avatar, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Input, Menu, MenuItem, Table } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

import IconButton from "@mui/material/IconButton";
import { useGlobalContext } from "global/context";

import { styled } from "styled-components";
import JobsData from "./Components/JobsData";
import { MoreVert } from "@mui/icons-material";

function Jobs() {
  const { setOnboardingData, userData, OnboardingData } = useGlobalContext();
  const location = useLocation();
  const userId = location?.state?.userId;
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
    // boxShadow: hasShadow ? "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)" : "none",
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
      <div className=" ">
        <div className="col  scroll-minibar" style={ScrollerStyle}>
          <div className="p-0  rounded mb-3 mt-3" style={customStyle}>
            <div className="row mb-4 p-2">
              <h4 className=" col font-weight-bold mb-2 ">Jobs</h4>
              <div className="form col  d-flex align-items-center justify-content-between ">
                <Input
                  fullWidth
                  placeholder="Type in here…"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  endDecorator={<SearchIcon />}
                />
                 <div className="ml-2">
                    <Link to="/institute/jobspost">
                      <Button
                        variant="outlined"
                        
                        style={{ width: "100px" , height:"40px" }}
                      >
                        {" "}
                        Add Jobs
                      </Button>
                    </Link>
                  </div>

                <div className="d-flex align-items-center ">
                  {/* <IconButton
                    id="positioned-demo-button"
                    aria-controls={open ? "positioned-demo-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? true : undefined}
                    variant="plain"
                    color="neutral"
                    onClick={handleClick}
                  >
                    <MoreVert />
                  </IconButton>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="basic-demo-button"
                    placement="bottom-end"
                  >
                    <MenuItem onClick={handleClose}>Select All</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                    <MenuItem onClick={handleClose}>Update Status</MenuItem>
                  </Menu> */}
                </div>
              </div>
            </div>
            {/* <h2 className="font-weight-bold"></h2> */}

            <div className="">
              <JobsData />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;

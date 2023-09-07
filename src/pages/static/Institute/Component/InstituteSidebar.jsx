import React from "react";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import { selectClasses } from "@mui/joy/Select";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import { useGlobalContext } from "global/context";
import { Link, useNavigate } from "react-router-dom";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, List, Typography } from "@mui/joy";
import { useState } from "react";
import {
  DocumentScanner,
  Info,
  KeyboardArrowDown,
  LogoutRounded,
  People,
  Person,
} from "@mui/icons-material";

function InstituteSidebar() {
  const { setOnboardingData, OnboardingData, userData } = useGlobalContext();
  const [index, setIndex] = React.useState(0);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate(`/auth/institute/login`);
  };
  const [isActive, setIsActive] = useState(false);

  const handleAccordionClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  const accordionStyle = {
    // backgroundColor: "#eee",
    color: "#444",
    cursor: "pointer",
    padding: "6px",
    width: "100%",
    borderRadius: "10px",
    border: "none",
    textAlign: "left",
    outline: "none",
    fontSize: "15px",
    transition: "0.4s",
    // background: isActive ? "#ccc" : "",
  };

  const panelStyle = {
    padding: "0 8px",
    maxHeight: isActive ? "100%" : "0",
    opacity: isActive ? "1" : "0",
    overflow: "hidden",
    // backgroundColor: "white",
    transition: "max-height 0.4s, opacity 0.4s",
  };

  return (
    <div
      className="d-flex flex-column justify-content-end"
      style={{ height: "85vh" }}
    >
      <div className="  col ">
        <div className="  rounded-3 mt-3 ">
          {/* <div className="d-flex p-2 align-items-center justify-content-arround">
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 60, height: 60 }}
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1690444165~exp=1690444765~hmac=5ef5c9e3d46984bfda6c0fd438a391cdc9154649ea57e2101a12f4331c47c78f"
            />
            <div className="ml-1" style={{ lineHeight: "10px" }}>
              <h6 className="font-weight-bold fs-15 mb-1">
                {" "}
                &nbsp; {OnboardingData?.name || userData?.name}
              </h6>
              <div className="" style={{ wordWrap: "break-word" }}>
                <p className="fs-12 text-dark">
                  &nbsp;{OnboardingData?.email || userData?.email}
                </p>
              </div>
            </div>
          </div>
          <Divider></Divider> */}
          <div className="p-1 mt-0">
            <div className="">
              {/* <Link to="/">
                <ListItem className="mb-1">
                  <ListItemButton className="rounded">
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-house"></i>
                    </ListItemDecorator>
                    <ListItemContent>Home</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link> */}
            </div>
            <div className="rounded">
              <Link to="/institute/dashboard">
                <ListItem className="mb-1">
                  <ListItemButton
                    selected={index === 13}
                    variant={index === 13 ? "soft" : "plain"}
                    color={index === 13 ? "warning" : undefined}
                    onClick={() => setIndex(13)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      {/* <Dashboard fontSize="lg" /> */}
                      <i class="bi bi-database-dash"></i>
                    </ListItemDecorator>
                    <ListItemContent>Dashboard</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
            <div className="rounded">
              <Link to="/institute/profile">
                <ListItem className="mb-1">
                  <ListItemButton
                    selected={index === 11}
                    variant={index === 11 ? "soft" : "plain"}
                    color={index === 11 ? "info" : undefined}
                    onClick={() => setIndex(11)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-person"></i>
                    </ListItemDecorator>

                    <ListItemContent>Proflie</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
            <div className="rounded">
              <Link to="/institute/profile/departments">
                <ListItem className="mb-1">
                  <ListItemButton
                    selected={index === 15}
                    variant={index === 15 ? "soft" : "plain"}
                    color={index === 15 ? "primary" : undefined}
                    onClick={() => setIndex(15)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      <i class="bi bi-people"></i>
                    </ListItemDecorator>

                    <ListItemContent>Departments</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
            {/* <div className="rounded">
              <Link to="/institute/teachers">
                <ListItem className="mb-1">
                  <ListItemButton
                    selected={index === 16}
                    variant={index === 16 ? "soft" : "plain"}
                    color={index === 16 ? "neutral" : undefined}
                    onClick={() => setIndex(16)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                    <i class="bi bi-person-vcard"></i>
                    </ListItemDecorator>

                    <ListItemContent>Teachers</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div> */}
            {/* <div className="rounded">
              <Link to="/institute/chat">
                <ListItem className="mb-1">
                  <ListItemButton className="rounded">
                    {" "}
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-chat"></i>
                    </ListItemDecorator>
                    <ListItemContent>Chat</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div> */}
            <div className="rounded">
              <Link to="/institute/notification">
                <ListItem className="mb-1">
                  <ListItemButton
                    selected={index === 10}
                    variant={index === 10 ? "soft" : "plain"}
                    color={index === 10 ? "success" : undefined}
                    onClick={() => setIndex(10)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-bell"></i>
                    </ListItemDecorator>

                    <ListItemContent>Notification</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
            {/* <div className="rounded">
              <Link to="/institute/users">
                <ListItem className="mb-1">
                  <ListItemButton className="rounded">
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-people"></i>
                    </ListItemDecorator>

                    <ListItemContent>Users</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div> */}
            {/* <div className="rounded">
              <Link to="/institute/questions">
                <ListItem className="mb-1 rounded">
                  <ListItemButton
                    // selected={index === 0}
                    // variant={index === 0 ? 'soft' : 'plain'}
                    className="rounded"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-patch-question"></i>
                    </ListItemDecorator>

                    <ListItemContent>Question</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div> */}
            <div className="rounded">
              <Link to="/institute/api">
                <ListItem className="rounded">
                  <ListItemButton
                    selected={index === 12}
                    variant={index === 12 ? "soft" : "plain"}
                    color={index === 12 ? "primary" : undefined}
                    onClick={() => setIndex(12)}
                    className="rounded mb-1"
                  >
                    <ListItemDecorator className="p-2 rounded">
                      <i className="bi bi-code-slash"></i>
                    </ListItemDecorator>
                    <ListItemContent>Api</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </div>
            <div className="rounded ">
              <div>
                <ListItemButton
                  className="rounded"
                  onClick={handleAccordionClick}
                >
                  <ListItemDecorator className="p-2 rounded">
                    <i class="bi bi-caret-down"></i>
                  </ListItemDecorator>
                  <ListItemContent>Manage Jobs</ListItemContent>
                </ListItemButton>

                <div style={panelStyle} className="">
                  <List>
                    <Link to="/institute/jobs">
                      <ListItem>
                        <ListItemButton
                          selected={index === 5}
                          variant={index === 5 ? "soft" : "plain"}
                          color={index === 5 ? "primary" : undefined}
                          onClick={() => setIndex(5)}
                          className="rounded mb-1"
                        >
                          <ListItemDecorator>
                            <People fontSize="lg" />
                          </ListItemDecorator>
                          <ListItemContent>Jobs</ListItemContent>
                          {/* <Typography level="body2">4,320</Typography> */}
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    <Link to="/institute/jobspost">
                      <ListItem>
                        <ListItemButton
                          selected={index === 6}
                          variant={index === 6 ? "soft" : "plain"}
                          color={index === 6 ? "warning" : undefined}
                          onClick={() => setIndex(6)}
                          className="rounded mb-1"
                        >
                          <ListItemDecorator>
                            <Info fontSize="lg" />
                          </ListItemDecorator>
                          <ListItemContent>Post Job</ListItemContent>
                          {/* <Typography level="body2">22,252</Typography> */}
                        </ListItemButton>
                      </ListItem>
                    </Link>
                    {/* <Link to="/institute/applicants">
                      <ListItem>
                        <ListItemButton
                          selected={index === 7}
                          variant={index === 7 ? "soft" : "plain"}
                          color={index === 7 ? "info" : undefined}
                          onClick={() => setIndex(7)}
                          className="rounded mb-1"
                        >
                          <ListItemDecorator>
                            <Person fontSize="lg" />
                          </ListItemDecorator>
                          <ListItemContent>Applicants</ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    </Link> */}
                    {/* <Link to="/institute/application">
                      <ListItem>
                        <ListItemButton
                          selected={index === 8}
                          variant={index === 8 ? "soft" : "plain"}
                          color={index === 8 ? "info" : undefined}
                          onClick={() => setIndex(8)}
                          className="rounded mb-1"
                        >
                          <ListItemDecorator>
                            <i class="bi bi-code-square"></i>
                          </ListItemDecorator>
                          <ListItemContent>Application</ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    </Link> */}
                    {/* <Link to="/institute/acquisition">
                      <ListItem>
                        <ListItemButton
                          selected={index === 9}
                          variant={index === 9 ? "soft" : "plain"}
                          color={index === 9 ? "success" : undefined}
                          onClick={() => setIndex(9)}
                          className="rounded mb-1"
                        >
                          <ListItemDecorator>
                            <DocumentScanner fontSize="lg" />
                          </ListItemDecorator>
                          <ListItemContent>Acquisition</ListItemContent>
                        
                        </ListItemButton>
                      </ListItem>
                    </Link> */}
                  </List>
                </div>
              </div>
            </div>
          </div>
          {/* <Divider></Divider> */}
        </div>
      </div>
      {/* <div className=" row p-3 d-flex align-items-end justify-content-center">
        <Button variant="plain" fullWidth color="primary" className=""
        onClick={handleLogout}
        startDecorator={<LogoutRounded/>}
        >
          Logout
        </Button>
      </div> */}
    </div>
  );
}

export default InstituteSidebar;

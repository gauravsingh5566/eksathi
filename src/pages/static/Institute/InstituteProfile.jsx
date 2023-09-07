import { Avatar, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Input, Table } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MicExternalOnIcon from "@mui/icons-material/MicExternalOn";

import IconButton from "@mui/material/IconButton";
import { useGlobalContext } from "global/context";
import InstituteSidebar from "./Component/InstituteSidebar";
import { styled } from "styled-components";

function InstituteProfile() {
  const { userData, api } = useGlobalContext();
  const location = useLocation();
  const userId = location?.state?.userId;
  const [profileData, setProfileData] = useState();

  const getProfileData = async () => {
    await api
      .get(`/app/institutes/${userData?.id}`)
      .then((res) => {
        
        if (res?.status === 200) {
          console.log("Institute Profile Data: ", res);
          setProfileData(res?.data?.institute);
        }
      }).catch((error) => {
        console.log(error);
      });
  }

  // useEffect hook to log the userId when the component mounts
  useEffect(() => {
    console.log("User ID in InstituteDashboard:", userId);
  }, [userId]);

  const [hasShadow, setHasShadow] = useState(true);

  useEffect(() => {
    getProfileData();
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
      <div className="container-fluid ">
        <div className="row">
          <div
            className="col col-12 col-lg-12 scroll-minibar"
            style={ScrollerStyle}
          >
            <div className="row ">
              <div className="col">
                <div className="row">
                  <div className="col ">
                    <div className="">
                      <div className="p-3">
                        <div className=" row  rounded-3  " style={customStyle}>
                          <div className="col-lg-5 col-12">
                            <div className="p-1 mt-5  ">
                              <img
                                src="https://img.freepik.com/free-vector/young-people-walking-front-college-university-flat-illustration_74855-14224.jpg?w=1380&t=st=1690371341~exp=1690371941~hmac=7ad709f1c0a8a111c98c239c49e09250e5d8f90d7ffbe162271ac63ff73cfaca"
                                alt="logo"
                                style={{
                                  width: "100%",
                                  borderRadius: "30px",
                                  height: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-7 col-12">
                            <div className="p-3">
                              <div className="d-flex align-items-center ">
                                <div>
                                  <h1 className="font-weight-bold mb-1">
                                    {profileData?.name || userData?.name}
                                  </h1>
                                </div>{" "}
                                &nbsp;&nbsp;&nbsp;
                                <div>
                                  <Button
                                    variant="outlined"
                                    size="sm"
                                    color="success"
                                    style={{ borderRadius: "5px" }}
                                  >
                                    Institute
                                  </Button>
                                </div>
                              </div>
                              <div className="d-flex fs-18 mb-1 ">
                                <p className="mr-2 text-dark">
                                  <strong className="text-dark">Address</strong>
                                  &nbsp;&nbsp;
                                  {profileData?.institute_profiles[0]?.address}, {profileData?.institute_profiles[0]?.city}, {profileData?.institute_profiles[0]?.state}, {profileData?.institute_profiles[0]?.country}, {profileData?.institute_profiles[0]?.postal_code}
                                </p>
                              </div>
                              <div className="d-flex fs-18 mb-1">
                                <p className="mr-3 text-dark">
                                  <strong className="text-dark">Website</strong>
                                  &nbsp;&nbsp;
                                  {profileData?.institute_profiles[0]?.website}
                                </p>
                              </div>
                              <div>
                                <p className=" text-dark fs-18 mb-1">
                                  <strong className="text-dark">Email</strong>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {profileData?.institute_profiles[0]?.email || userData?.email}
                                </p>
                              </div>
                              <div>
                                <p className="mb-1 text-dark fs-18 mb-1 ">
                                  <strong className="text-dark">Phone</strong>
                                  &nbsp;&nbsp;&nbsp; &nbsp;
                                  {profileData?.mobile}
                                </p>
                              </div>
                              <Box>
                                <a
                                  href={profileData?.institute_profiles[0]?.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i
                                      className="bi bi-twitter "
                                      style={{ color: "#17a2b8" }}
                                    ></i>
                                  </IconButton>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href={profileData?.institute_profiles[0]?.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i
                                      className="bi bi-instagram  "
                                      style={{ color: "red" }}
                                    ></i>
                                  </IconButton>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href={profileData?.institute_profiles[0]?.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i className="bi bi-github  "></i>
                                  </IconButton>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href={profileData?.institute_profiles[0]?.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i
                                      className="bi bi-facebook  "
                                      style={{ color: "blue" }}
                                    ></i>
                                  </IconButton>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href={profileData?.institute_profiles[0]?.linkdin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i
                                      className="bi bi-linkedin fs-21  "
                                      style={{ color: "#007bff" }}
                                    ></i>
                                  </IconButton>
                                </a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a
                                  href={profileData?.institute_profiles[0]?.youtube}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <IconButton>
                                    <i
                                      className="bi bi-youtube  "
                                      style={{ color: "red" }}
                                    ></i>
                                  </IconButton>
                                </a>
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className=" rounded-3   mb-3 p-4"
                        style={customStyle}
                      >
                        <h4 className="font-weight-bold mb-2">About Us</h4>
                        <p>{profileData?.institute_profiles[0]?.aboutYou}</p>
                      </div>
                      <div
                        className=" rounded-3   mb-3 p-3"
                        style={customStyle}
                      >
                        <div className="p-0">
                          <Table aria-label="basic table" className="">
                            <thead>
                              <tr>
                                <th
                                  className="font-weight-bold text-black"
                                  style={{ width: "20%" }}
                                >
                                  <h4 className="font-weight-bold ">
                                    Additional Information 
                                  </h4>
                                </th>
                                <th
                                  className="font-weight-bold text-black"
                                  style={{ width: "35%", userSelect: "none" }}
                                ></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  <h6 className="font-weight-bold">
                                    Institute Establishment Date -{" "}
                                  </h6>
                                </td>
                                <td>
                                  <p>{profileData?.institute_profiles[0]?.establishmentDate}</p>
                                </td>
                              </tr>
                              <tr>
                                <td style={{ width: "20%" }}>
                                  <h6 className="font-weight-bold">Affiliated by - </h6>
                                </td>
                                <td>
                                  <p>{profileData?.institute_profiles[0]?.university?.name}</p>
                                </td>
                              </tr>
                              {/* <tr>
                                <td>
                                  <h6 className="font-weight-bold">
                                    Hostel -{" "}
                                  </h6>
                                </td>
                                <td>
                                  <p>{profileData?.institute_profiles[0]?.dayboardingHostel}</p>
                                </td>
                              </tr> */}

                              <tr>
                                <td>
                                  <h6 className="font-weight-bold">
                                    Institute Registration number -{" "}
                                  </h6>
                                </td>
                                <td>
                                  <p>
                                    {
                                      profileData?.institute_profiles[0]?.instituteRegistrationNumber
                                    }
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                      <div className="rounded-3  mb-3 " style={customStyle}>
                        <div className="p-4">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                              <h4 className="font-weight-bold">Departments</h4>
                            </div>
                            <div>
                              <Link to="/institute/profile/departments">
                                <Button
                                  variant="outlined"
                                  size="sm"
                                  className="fs-11 font-weight-bold"
                                >
                                  View All
                                </Button>
                              </Link>
                            </div>
                          </div>
                          <div>
                            <div className="">
                              <h6 className="font-weight-bold">
                                Department of Teachers
                              </h6>
                              <p>
                                Teachers{" "}
                                <strong className="text-primary">
                                  {profileData?.teachersCount}
                                </strong>
                              </p>
                            </div>
                            {/* <hr></hr> */}
                            {/* <div className="">
                              <h6 className="font-weight-bold">
                                Department of Students
                              </h6>
                              <p>
                                Students{" "}
                                <strong className="text-primary">
                                  {profileData?.studentsCount}
                                </strong>
                              </p>
                            </div> */}
                          </div>
                        </div>
                      </div>

                      <div className=" mb-1  rounded-3  " style={customStyle}>
                        <div className=" col-12 p-2 ">
                          <div className="p-2">
                            <div className="d-flex justify-content-between mb-3">
                              <h4 className="font-weight-bold p-2">Awards</h4>

                              {/* <Button
                                variant="outlined"
                                color="success"
                                size="sm"
                                className="fs-11 font-weight-bold text-success"
                              >
                                See All
                              </Button> */}
                            </div>
                            <div
                              className="d-flex justify-content-between mb-2 "
                              style={{
                                overflow: "auto",
                              }}
                            >
                              <div className="p-1 d-flex align-items-center flex-column">
                                <Avatar
                                  className=" mb-2 "
                                  alt="Remy Sharp"
                                  src="https://img.freepik.com/premium-vector/gold-trophy-vector-illustration_945339-355.jpg?w=740"
                                  sx={{
                                    width: 76,
                                    height: 76,
                                    borderRadius: "5px",
                                  }}
                                />
                                <div
                                  className="fs-11 text-center"
                                  style={{ lineHeight: "15px" }}
                                >
                                  <p className="font-weight-bold">
                                    Excellence in Innovation Award
                                  </p>
                                  <p className="font-weight-bold">
                                    4 May , 2021
                                  </p>
                                </div>
                              </div>
                              <div className="p-1 d-flex align-items-center flex-column">
                                <Avatar
                                  className="mb-2"
                                  alt="Remy Sharp"
                                  src="https://img.freepik.com/premium-vector/award-ceremony-background-with-3d-gold-star-element-glitter-light-effect-decoration_196599-996.jpg?w=900"
                                  sx={{
                                    width: 76,
                                    height: 76,
                                    borderRadius: "5px",
                                  }}
                                />
                                <div
                                  className="fs-11 text-center"
                                  style={{ lineHeight: "15px" }}
                                >
                                  <p className="font-weight-bold">
                                    Humanitarian Achievement Medal
                                  </p>
                                  <p className="font-weight-bold">
                                    19 January , 2022
                                  </p>
                                </div>
                              </div>
                              <div className="p-1 d-flex align-items-center flex-column">
                                <Avatar
                                  className="mb-2"
                                  alt="Remy Sharp"
                                  src="https://img.freepik.com/free-vector/premium-collection-badge-design_53876-63011.jpg?w=740&t=st=1691499357~exp=1691499957~hmac=0a113c021b7db6fde044d8731dbbb0c64ceb1399f5da8093f6da5d049e041070"
                                  sx={{
                                    width: 76,
                                    height: 76,
                                    borderRadius: "5px",
                                  }}
                                />
                                <div
                                  className="fs-11 text-center"
                                  style={{ lineHeight: "15px" }}
                                >
                                  <p className="font-weight-bold">
                                    Stellar Performance Recognition
                                  </p>
                                  <p className="font-weight-bold">
                                    2 July , 2022
                                  </p>
                                </div>
                              </div>

                              <div className="p-1 d-flex align-items-center flex-column ">
                                <Avatar
                                  className="mb-2"
                                  alt="Remy Sharp"
                                  src="https://img.freepik.com/free-vector/realistic-prize-cup-design-illustration_52683-83460.jpg?w=826&t=st=1691499338~exp=1691499938~hmac=546c851b73f1781a771bbe8c7afeefa549d70371a2bf269c4732aeab7727201a"
                                  sx={{
                                    width: 76,
                                    height: 76,
                                    borderRadius: "5px",
                                  }}
                                />
                                <div
                                  className="fs-11 text-center"
                                  style={{ lineHeight: "15px" }}
                                >
                                  <p className="font-weight-bold">
                                    Lifetime Achievement Honors
                                  </p>
                                  <p className="font-weight-bold">
                                    7 January , 2020
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-3 ">
                    <div className=" rounded-3 mt-3 " style={customStyle}>
                      <div className=" d-none d-lg-block ">
                        <div className="form d-flex p-2 ">
                          <Input
                            fullWidth
                            placeholder="Type in here…"
                            variant="outlined"
                            sx={{ height: "60px", width: "100%" }}
                            endDecorator={<SearchIcon />}
                          />
                        </div>
                      </div>
                      <div className=" mb-2">
                        <div className="p-2">
                          <h5 className="fs-16 mb-3 font-weight-bold">
                            Personal Recommendation
                          </h5>
                          <div className="card bg-light   rounded-3  mb-3">
                            <div className="p-2 mb-1">
                              <h6 className="font-weight-bold fs-14 mb-2">
                                Ask Research Question?
                              </h6>
                              <div className="text-center mb-3">
                                <i className="bi bi-patch-question-fill fs-25 text-info"></i>
                                <h6 className="fs-13">
                                  Ask questions in Q&A to get help from experts
                                  in your field.
                                </h6>
                              </div>
                              <div className="text-center">
                                <Link to="/questions">
                                  <Button
                                    variant="outlined"
                                    fullWidth
                                    className="text-info"
                                    sx={{ color: "#17a2b8" }}
                                    size="sm"
                                  >
                                    Ask a Question
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="card   rounded-3 ">
                            <div className="p-2">
                              <h6 className="font-weight-bold fs-14 mb-3">
                                Explore Events
                              </h6>
                              <div className="text-center bg-info mb-3 shadow-sm rounded-3 p-2">
                                <i className="bi bi-gift text-white mb-1"></i>
                                <h6 className="fs-12 text-white">
                                  BZ University good night event in columbia
                                </h6>
                              </div>
                              <div className="text-center text-white bg-success shadow-sm rounded-3 p-2">
                                <MicExternalOnIcon className="mb-1" />
                                <h6 className="fs-12 text-white">
                                  The 3rd International Conference 2020
                                </h6>
                              </div>
                            </div>
                          </div>
                          {/* <div className="card bg-light rounded-3">
                      <div className="d-flex p-2 mb-2 align-items-center ">
                        <div>
                          <Avatar
                            alt="Travis Howard"
                            src="https://img.freepik.com/free-vector/gradient-hurricane-logo-template_23-2149202114.jpg?w=740&t=st=1686913811~exp=1686914411~hmac=30359e575f1b23624919866470ac58950e15dde3485411b9a9be37755e606683"
                            className="mr-3"
                          />
                        </div>
                        <div>
                          <h6 className="fs-15 mb-1 font-weight-bold">
                            AfterSchool Prgram{" "}
                          </h6>
                          <p
                            className="fs-11 font-weight-bold"
                            style={{ lineHeight: "18px" }}
                          >
                            {" "}
                            A penchart for art Drawing classes recommended
                          </p>
                        </div>
                      </div>{" "}
                    </div> */}
                        </div>
                      </div>
                      {/* <div className=" ">
                  <div className="p-2">
                    <h5 className="font-weight-bold mb-3">Medical History</h5>
                    <div className="">
                      <div className="p-2 border rounded-3 mb-3">
                        <div className="d-flex  align-items-center font-weight-bold justify-content-between">
                          <h6 className="font-weight-bold fs-14">
                            Anxiety disorder
                          </h6>
                          <p>F41.9</p>
                        </div>

                        <p className="fs-11 mb-2">
                          Personal Consultation recommended{" "}
                        </p>

                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center ">
                            <div
                              style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "red",
                              }}
                            ></div>
                            <p className="font-weight-bold ml-1 fs-12">
                              Active
                            </p>
                          </div>
                          <div>
                            <Button
                              className="text-success"
                              variant="plain"
                              size="small"
                              style={{ fontSize: "6px", padding: "4px 4px" }}
                            >
                              <p
                                style={{ fontSize: "11px", fontWeight: "bold" }}
                              >
                                See full history{" "}
                                <ArrowForwardIcon sx={{ width: "20px" }} />
                              </p>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 border rounded-3 mb-3">
                      <div className="d-flex  align-items-center font-weight-bold justify-content-between">
                        <h6 className="font-weight-bold fs-14">
                          Mild Depressive Episode
                        </h6>
                        <p>F41.9</p>
                      </div>

                      <p className="fs-11 mb-2">
                        Personal Consultation recommended{" "}
                      </p>

                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ">
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              backgroundColor: "green",
                            }}
                          ></div>
                          <p className="font-weight-bold ml-1 fs-12">Curd</p>
                        </div>
                        <div>
                          <Button
                            className="text-success"
                            variant="plain"
                            size="small"
                            style={{ fontSize: "6px", padding: "4px 4px" }}
                          >
                            <p style={{ fontSize: "11px", fontWeight: "bold" }}>
                              See full history{" "}
                              <ArrowForwardIcon sx={{ width: "20px" }} />
                            </p>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstituteProfile;

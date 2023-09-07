import React, { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import ReportIcon from "@mui/icons-material/Report";
import WarningIcon from "@mui/icons-material/Warning";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReactApexChart from "react-apexcharts";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Alert from "@mui/joy/Alert";
import { SwipeableDrawer, useMediaQuery } from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/joy/Badge";
import MailIcon from "@mui/icons-material/Mail";
import {
  Chip,
  ListDivider,
  ListItemDecorator,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import { FastForwardTwoTone, MoreVert } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import JobDetails from "../Careers/components/JobDetails";
import ProfilePage from "../Profile/ProfilePage";
import { Link } from "react-router-dom";
import MessageList from "../Careers/components/MessageList";
import NewApplicationListItem from "../Careers/components/NewApplicationListItem";
import Switch, { switchClasses } from "@mui/joy/Switch";
import EmployerSidebar from "../Careers/components/EmployerSidebar";
import InstituteSidebar from "./Component/InstituteSidebar";
import { styled } from "styled-components";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

function InstituteDashboard() {
  const [checked, setChecked] = React.useState(false);
  const [toggleApplicationCheck, setToggleApplicationCheck] = useState(true);
  const [toggleSortlistedCheck, setToggleSortlistedCheck] = useState(true);
  const [toggleRejectedCheck, setToggleRejectedCheck] = useState(true);
  const [state, setState] = React.useState({});
  const [stateProfile, setStateProfile] = React.useState({});
  const [applicationsAnalytics, setApplicationsAnalytics] = useState({
    options: {},
    series: [],
  })
  const [applicationStats, setApplicationStats] = useState([]);
  const [newApplicants, setNewApplicants] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer1 = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setStateProfile({ ...stateProfile, [anchor]: open });
  };

  const series = [
    {
      name: "Applications",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sortlisted",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Hold",
      data: [0, 2, 0, 0, 0, 0, 0],
    },
    {
      name: "Rejected",
      data: [20, 8, 10, 18, 8, 50, 59],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const { api, userData } = useGlobalContext();


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

  const getApplicationsAnalytics = async () => {
    api.get(`/app/charts/job-applications/institute/1?timeRange=week`)
      .then((res) => {
        setApplicationsAnalytics(res?.data?.response);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error getting applications analytics");
      });
  }


  const getApplicationStats = async () => {
    api.get(`/app/charts/job-applications-stats/institute/1`)
      .then((res) => {
        console.log("Stats: ", res);
        setApplicationStats(res?.data?.applicationStatusStats);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error getting applications stats");
      });
  }

  const getNewApplicants = async (req, res) => {
    api.get(`/app/applicants/new-applicants/1`)
    .then((res) => {
      console.log("Applicants: ", res);
      setNewApplicants(res?.data);
    })
    .catch((err) => {
      console.error(err);
      toast.error("Error getting applications stats");
    });
  };

  useEffect(() => {
    getApplicationsAnalytics();
    getApplicationStats();
    getNewApplicants();
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          
          <div
            className="col col-12 col-lg-12 scroll-minibar"
            style={ScrollerStyle}
          >
            <div className="row mb-4">
              {/* <div className="col">
                    <h4 className="">Dashboard</h4>
                  </div> */}
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className=" shadow  rounded-3 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-between p-4 ">
                    <div className="font-weight-bold">
                      <p className="fs-13">APPLICATIONS</p>
                      <h4>{applicationStats?.pending?.count || 0}</h4>
                    </div>

                    <div className="">
                      <CircularProgress
                        size="lg"
                        determinate
                        value={applicationStats?.pending?.percentage || 0}

                      >
                        {applicationStats?.pending?.percentage || 0} %
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className=" shadow    rounded-3">
                  <div className="d-flex justify-content-between p-4">
                    <div className="font-weight-bold">
                      <p className="fs-13">SHORTLISTED</p>
                      <h4>{applicationStats?.reviewed?.count || 0}</h4>
                    </div>

                    <div className="">
                      <CircularProgress size="lg" color="success" determinate value={applicationStats?.reviewed?.percentage || 0}>
                        {applicationStats?.reviewed?.percentage || 0} %
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className=" shadow  rounded-3 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-between p-4 ">
                    <div className="font-weight-bold">
                      <p className="fs-13">ONHOLD</p>
                      <h4>{applicationStats?.hold?.count || 0}</h4>
                    </div>

                    <div className="ml-5">
                      <CircularProgress
                        size="lg"
                        determinate
                        value={applicationStats?.hold?.percentage || 0}
                        color="warning"
                      >
                        {applicationStats?.hold?.percentage || 0} %
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className=" shadow  rounded-3 mb-3 mb-lg-0">
                  <div className="d-flex justify-content-between p-4 ">
                    <div className="font-weight-bold">
                      <p className="fs-13">REJECTED</p>
                      <h4>{applicationStats?.rejected?.count || 0}</h4>
                    </div>

                    <div className="ml-5">
                      <CircularProgress
                        size="lg"
                        determinate
                        value={applicationStats?.rejected?.percentage || 0}
                        color="danger"
                      >
                        {applicationStats?.rejected?.percentage || 0} %
                      </CircularProgress>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12 col-lg-8">
                <div className="chart shadow p-4 rounded">
                  <Typography
                    variant="plain"
                    color="warning"
                    className=" mb-4 pl-3"
                  >
                    <strong> Top Active Jobs </strong>
                  </Typography>
                  {/* <Stack
                    direction={"row"}
                    spacing={3}
                    flexWrap="wrap"
                    className="px-3 mb-3"
                  >
                    <Switch
                      className="mb-3 ml-3"
                      checked={toggleApplicationCheck}
                      onChange={(event) => setToggleApplicationCheck(event.target.checked)}
                      sx={(theme) => ({
                        "--Switch-thumbShadow":
                          "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                        "--Switch-thumbSize": "17px",
                        "--Switch-trackWidth": "41px",
                        "--Switch-trackHeight": "21px",
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level2,
                        [`& .${switchClasses.thumb}`]: {
                          transition: "width 0.2s, left 0.2s",
                        },
                        "&:hover": {
                          "--Switch-trackBackground":
                            theme.vars.palette.background.level3,
                        },
                        "&:active": {
                          "--Switch-thumbWidth": "22px",
                        },
                        [`&.${switchClasses.checked}`]: {
                          "--Switch-trackBackground": "rgb(46 80 255)",
                          "&:hover": {
                            "--Switch-trackBackground": "rgb(46 80 255)",
                          },
                        },
                      })}
                      endDecorator={<Typography>Applications</Typography>}
                    />
                    <Switch
                      className="mb-3 ml-3"
                      checked={toggleSortlistedCheck}
                      onChange={(event) => setToggleSortlistedCheck(event.target.checked)}
                      sx={(theme) => ({
                        "--Switch-thumbShadow":
                          "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                        "--Switch-thumbSize": "17px",
                        "--Switch-trackWidth": "41px",
                        "--Switch-trackHeight": "21px",
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level2,
                        [`& .${switchClasses.thumb}`]: {
                          transition: "width 0.2s, left 0.2s",
                        },
                        "&:hover": {
                          "--Switch-trackBackground":
                            theme.vars.palette.background.level3,
                        },
                        "&:active": {
                          "--Switch-thumbWidth": "22px",
                        },
                        [`&.${switchClasses.checked}`]: {
                          "--Switch-trackBackground": "rgb(48 209 88)",
                          "&:hover": {
                            "--Switch-trackBackground": "rgb(48 209 88)",
                          },
                        },
                      })}
                      endDecorator={<Typography>Shortlisted</Typography>}
                    />
                    <Switch
                      className="mb-3 ml-3"
                      checked={toggleRejectedCheck}
                      onChange={(event) => setToggleRejectedCheck(event.target.checked)}
                      sx={(theme) => ({
                        "--Switch-thumbShadow":
                          "0 3px 7px 0 rgba(0 0 0 / 0.12)",
                        "--Switch-thumbSize": "17px",
                        "--Switch-trackWidth": "41px",
                        "--Switch-trackHeight": "21px",
                        "--Switch-trackBackground":
                          theme.vars.palette.background.level2,
                        [`& .${switchClasses.thumb}`]: {
                          transition: "width 0.2s, left 0.2s",
                        },
                        "&:hover": {
                          "--Switch-trackBackground":
                            theme.vars.palette.background.level3,
                        },
                        "&:active": {
                          "--Switch-thumbWidth": "22px",
                        },
                        [`&.${switchClasses.checked}`]: {
                          "--Switch-trackBackground": "rgb(209 48 48)",
                          "&:hover": {
                            "--Switch-trackBackground": "rgb(209 48 48)",
                          },
                        },
                      })}
                      endDecorator={<Typography>Rejected</Typography>}
                    />
                  </Stack> */}
                  {
                    applicationsAnalytics?.series?.length ?
                      <ReactApexChart
                        options={applicationsAnalytics?.options || options}
                        series={applicationsAnalytics?.series || series}
                        type="area"
                        height={350}
                      /> : null
                  }

                  {/* <div className="">
                    <div className="row  p-4">
                      <div className="col">
                        <div className=" text-dark">
                          <Typography
                            variant="plain"
                            color="warning"
                            className="mb-3"
                          >
                            <strong>Job Title</strong>
                          </Typography>

                          <div className="">
                            <p className="py-2 hover-y">Data Scientist</p>
                            <p className="py-2 hover-y">Cybersecurity </p>
                            <p className="py-2 hover-y">App Developer</p>
                            <p className="py-2 hover-y"> Engineer</p>
                            <p className="py-2 hover-y">App Developer</p>
                            <p className="py-2 hover-y"> Engineer</p>
                          </div>
                        </div>
                      </div>
                      <div className="col text-right">
                        <div className="">
                          <Typography
                            variant="plain"
                            color="warning"
                            className="mb-3"
                          >
                            <strong> Application</strong>
                          </Typography>
                          <div className=" text-dark">
                            <p className="p-2">34</p>
                            <p className="p-2">23 </p>
                            <p className="p-2">45</p>
                            <p className="p-2">06</p>
                            <p className="p-2">45</p>
                            <p className="p-2">06</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="row mb-4">
                  <div className="col">
                    <div className=" text-dark  shadow rounded-3 p-4 ">
                      <Typography
                        variant="plain"
                        color="warning"
                        className=" mb-4 pl-3"
                      >
                        <strong> Accusitions </strong>
                      </Typography>

                      <div
                        className="d-flex mx-2 rounded overflow-hidden mb-4"
                        style={{ height: "10px" }}
                      >
                        <div
                          className="h-10"
                          style={{ width: `${applicationStats?.pending?.percentage || 0}%`, backgroundColor: '#008ffb' }}
                        ></div>
                        <div
                          className=" h-10"
                          style={{ width: `${applicationStats?.pending?.percentage || 0}%`, backgroundColor: '#00e396' }}
                        ></div>
                        <div
                          className="bg-warning h-10"
                          style={{ width: `${applicationStats?.hold?.percentage || 0}%` }}
                        ></div>
                        <div
                          className=" h-10"
                          style={{ width: `${applicationStats?.rejected?.percentage || 0}%`, backgroundColor: '#ff4560' }}
                        ></div>


                      </div>
                      <div className="container">
                        <div className="row align-items-center mb-4">
                          <div className="col-2">
                            <div
                              className="bg-info rounded"
                              style={{
                                height: "14px",
                                width: "14px",
                              }}
                            ></div>
                          </div>
                          <div className="col-7">
                            <p>Applications</p>
                          </div>
                          <div className="col-3">
                            <Chip size="sm" variant="soft" color="info">
                            {applicationStats?.pending?.percentage || 0}%
                            </Chip>
                          </div>
                        </div>
                        <div className="row align-items-center mb-4">
                          <div className="col-2">
                            <div
                              className="bg-success rounded"
                              style={{
                                height: "14px",
                                width: "14px",
                              }}
                            ></div>
                          </div>
                          <div className="col-7">
                            <p>Shortlisted</p>
                          </div>
                          <div className="col-3">
                            <Chip size="sm" variant="soft" color="success">
                            {applicationStats?.reviewed?.percentage || 0}%
                            </Chip>
                          </div>
                        </div>
                        <div className="row align-items-center mb-4">
                          <div className="col-2">
                            <div
                              className="bg-warning rounded"
                              style={{
                                height: "14px",
                                width: "14px",
                              }}
                            ></div>
                          </div>
                          <div className="col-7">
                            <p>On-Hold</p>
                          </div>
                          <div className="col-3">
                            <Chip size="sm" variant="soft" color="warning">
                            {applicationStats?.hold?.percentage || 0}%
                            </Chip>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-2">
                            <div
                              className="bg-danger rounded"
                              style={{
                                height: "14px",
                                width: "14px",
                              }}
                            ></div>
                          </div>
                          <div className="col-7">
                            <p>Rejected</p>
                          </div>
                          <div className="col-3">
                            <Chip size="sm" variant="soft" color="danger">
                            {applicationStats?.rejected?.percentage || 0}%
                            </Chip>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <div className=" text-dark  shadow rounded-3 p-4 ">
                      <Typography
                        variant="plain"
                        color="warning"
                        className=" mb-3 pl-3"
                      >
                        <strong> New Applications </strong>
                      </Typography>
                      {
                          newApplicants?.map((applicant, index) => (
                            <NewApplicationListItem key={index} applicant={applicant}/>
                          ))
                      }
                      

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

export default InstituteDashboard;

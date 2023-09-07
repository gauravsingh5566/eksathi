import { Drawer, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useGlobalContext } from "global/context";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import AskQuestion from "pages/Forum/components/Questions/AskQuestion";
import { Popup } from "./Popup";
import SearchIcon from "@mui/icons-material/Search";
import {
  BusinessRounded,
  Cancel,
  CheckBox,
  ContentCopy,
  ContentCut,
  DeleteForever,
  DoneAll,
  DoneAllRounded,
  Edit,
  Info,
  LogoutTwoTone,
  MailLockTwoTone,
  MailRounded,
  MailTwoTone,
  MessageTwoTone,
  NotificationImportantRounded,
  NotificationsRounded,
  NotificationsTwoTone,
  PeopleAltTwoTone,
  PeopleOutlineRounded,
  QuestionAnswer,
  Settings,
} from "@mui/icons-material";
import {
  Button,
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListDivider,
  ListItemDecorator,
  Menu,
  MenuItem,
  MenuList,
  badgeClasses,
  CircularProgress,
} from "@mui/joy";
import { toast } from "react-hot-toast";
import Notifications from "pages/static/Careers/Notifications";
import { fontSize } from "@mui/system";
import NotificationListItem from "./NotificationListItem";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };
  const {
    userData,
    removeToken,
    removeUser,
    api,
    socket,
    categories,
    OnboardingData,
  } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [profileCompletion, setProfileCompletion] = useState(0);

  const getNotifications = async () => {
    try {
      const res = await api.get("/app/notification");
      if (res?.status === 200) {
        console.log("Notifications: ", res?.data);
        setNotifications(res?.data?.notifications);
        setUnreadCount(res?.data?.unread);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error getting notifications"
      );
    }
  };

  const handleSearch = () => {
    if (searchKeyword) {
      navigate(`search?q=${searchKeyword}`);
      window.location.reload();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getProfileCompletion = async () => {
    try {
      const res = await api.get(`/app/user/profile-completion/${userData?.id}`);
      if (res?.status === 200) {
        console.log("Profile completion:  ", res?.data);
        setProfileCompletion(res?.data?.completionPercentage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userData?.id !== undefined) {
      getNotifications();
      getProfileCompletion();
    }
  }, [userData?.id]);

  useEffect(() => {
    socket?.on("get-notification", (data) => {
      // setNotifications((prev) => [...prev, data]);
      getNotifications();
      // toast.custom((t) => (
      //   <>
      //     <div className="d-flex p-4 shadow-lg rounded bg-white">
      //       <div>
      //         <Avatar
      //           alt="Santosh"
      //         ></Avatar>
      //       </div>
      //       <div>
      //         <p className="fw-bold">{data?.sender_name}</p>
      //         <p>Commented on your question</p>
      //       </div>
      //     </div>
      //   </>
      // ))

      switch (data?.type) {
        case 1:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span>{" "}
                    commented on your question
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 2:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span>{" "}
                    commented on your answer
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 3:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span> replied
                    on your comment
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 4:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span>{" "}
                    answered your question
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 5:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span> sent
                    you a new message
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 6:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span> liked
                    your question
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 7:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span> liked
                    your answer
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        case 8:
          toast.custom((t) => (
            <>
              <Stack
                spacing={2}
                direction={"row"}
                className="p-4 shadow-lg rounded bg-white mr-4"
                style={{
                  maxWidth: "350px",
                }}
              >
                <div>
                  <Avatar alt={data?.sender_name} src={data?.avatar}></Avatar>
                </div>
                <div
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  <p>
                    {" "}
                    <span className="fw-bold">{data?.sender_name}</span> unliked
                    your answer
                  </p>
                </div>
              </Stack>
            </>
          ));
          break;
        default:
          console.error("Invalid Notification");
          break;
      }
      console.log("New Notification: ", data);
    });
  }, [socket]);

  const handleLogout = () => {
    // Perform logout actions
    localStorage.removeItem("isLogin"); // Remove isLogin flag from localStorage
    removeToken(); // Remove tokens (assuming removeToken is a custom function)
    removeUser(); // Remove user data (assuming removeUser is a custom function)

    // Redirect to "/auth/login"
    navigate("/auth/login");
  };

  const handleInstituteLogin = () => {
    // Redirect to "/l/login/institute"
    localStorage.removeItem("isLogin"); // Remove isLogin flag from localStorage
    removeToken(); // Remove tokens (assuming removeToken is a custom function)
    removeUser();
    window.location.href = "/auth/institute/login";
  };

  const handleLogoutOrInstituteLogin = () => {
    if (userData && userData.first_name) {
      handleLogout();
    } else if (userData && userData.name) {
      handleInstituteLogin();
    }
  };

  let profileURL;
  if (userData?.role === "institute") {
    profileURL = `/institute/profile`;
  } else {
    profileURL = `/profile/`;
  }
  let DashboardURL;
  if (userData?.role === "institute") {
    DashboardURL = `/institute/dashboard`;
  } else {
    DashboardURL = `/careers/dashboard`;
  }
  let jobsearchurl;
  if (userData?.role === "institute") {
    jobsearchurl = `/experts`;
  } else {
    jobsearchurl = `/careers`;
  }

  return (
    <>
      <header className="header-area bg-light py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo-box">
                <NavLink to="/" className="logo">
                  <img
                    src="/images/logo-gradiant.png"
                    alt="logo"
                    style={{ maxWidth: "150px", objectFit: "contain" }}
                  />
                </NavLink>
                <div className="user-action">
                  <div
                    className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                    title="Main menu"
                    onClick={() => {
                      toggleSidebar();
                      navigate("/notifications");
                    }}
                  >
                    <i className="la la-bars"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* end col-lg-2 */}
            <div className="col-lg-10">
              <div className="menu-wrapper">
                <nav className="menu-bar mr-auto menu-bar-white">
                  <ul>
                    {/* <li>
                    <NavLink to="/">Home</NavLink>
                  </li> */}
                    {/* <li className="is-mega-menu">
                    <NavLink to="#">
                      Users <i className="la la-angle-down fs-11"></i>
                    </NavLink>
                    <div className="dropdown-menu-item">
                      <ul className="row">
                        <li className="col">
                          <div className="p-3">
                            <input type="search" name="search" id="search" placeholder="Find User" className="form-control mt-3 w-100"/>
                          </div>
                          <NavLink to="/requests">All Users</NavLink>
                          <NavLink to="/requests">Unanswered Users</NavLink>
                          <NavLink to="/requests">Answered Users</NavLink>
                          <NavLink to="/requests">Top Users</NavLink>
                        </li>
                      </ul>
                    </div>
                  </li> */}

                    {/* <li className="is-mega-menu">
                    <NavLink to="#">
                      Questions <i className="la la-angle-down fs-11"></i>
                    </NavLink>
                    <div className="dropdown-menu-item mega-menu">
                      <ul className="row">
                        <li className="col-lg-4">
                          <div className="p-3">
                            <h5>Questions</h5>
                            <NavLink to={"/requests/post"} className="p-0">
                              <Button
                                variant="contained"
                                size="large"
                                className="py-2 mt-2 text-capitalize"
                              >
                                Ask Question
                              </Button>
                            </NavLink>
                          </div>
                          <NavLink to="/requests">All Questions</NavLink>
                          <NavLink to="/requests">Unanswered Questions</NavLink>
                          <NavLink to="/requests">Answered Questions</NavLink>
                          <NavLink to="/requests">Top Questions</NavLink>
                        </li>
                        <li className="col-lg-4">
                          <div className="p-3">
                            <h5>Categories</h5>
                            <NavLink to={"/requests/post"} className="p-0">
                              <Button
                                variant="contained"
                                size="large"
                                className="py-2 mt-2 text-capitalize"
                              >
                                View All Categories
                              </Button>
                            </NavLink>
                          </div>
                          <NavLink to="/requests">Science</NavLink>
                          <NavLink to="/requests">Technologies</NavLink>
                          <NavLink to="/requests">Teachers</NavLink>
                          <NavLink to="/requests">Geography</NavLink>
                          <NavLink to="/requests">View all Categories</NavLink>
                        </li>
                        <li className="col-lg-4">
                          <div className="p-3">
                            <h5>Trending Questions</h5>
                            <NavLink to={"/requests/post"} className="p-0">
                              <Button
                                variant="contained"
                                size="large"
                                className="py-2 mt-2 text-capitalize"
                              >
                                View All Requests
                              </Button>
                            </NavLink>
                          </div>
                          <div className="sidebar-questions pt-3">
                            <NavLink
                              to={"requests/request"}
                              className="media media-card media--card media--card-2"
                            >
                              <div className="media-body">
                                <h5>Using web3 to call precompile contract</h5>
                                <small className="meta">
                                  <span className="pr-1">2 mins ago</span>
                                  <span className="pr-1">. by</span>
                                  Sudhir Kumbhare
                                </small>
                              </div>
                            </NavLink>
                            
                            <NavLink
                              to={"requests/request"}
                              className="media media-card media--card media--card-2"
                            >
                              <div className="media-body">
                                <h5>
                                  Is it true while finding Time Complexity of
                                  the algorithm [closed]
                                </h5>
                                <small className="meta">
                                  <span className="pr-1">48 mins ago</span>
                                  <span className="pr-1">. by</span>
                                  wimax
                                </small>
                              </div>
                            </NavLink>
                    
                            <NavLink
                              to={"requests/request"}
                              className="media media-card media--card media--card-2"
                            >
                              <div className="media-body">
                                <h5>
                                  image picker and store them into firebase with
                                  flutter
                                </h5>
                                <small className="meta">
                                  <span className="pr-1">1 hour ago</span>
                                  <span className="pr-1">. by</span>
                                  Antonin gavrel
                                </small>
                              </div>
                            </NavLink>
                           
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                    {/* <li>
                    <NavLink to="/blogs">
                      blogs <i className="la la-angle-down fs-11"></i>
                    </NavLink>
                    <ul className="dropdown-menu-item">
                      <li>
                        <NavLink to="/blogs/blog">blog 1</NavLink>
                      </li>
                    </ul>
                  </li> */}
                    <li>
                      <NavLink to="/about" className={"fw-bold text-info"}>
                        About <i className="la la-angle-down fs-11"></i>
                      </NavLink>
                      <ul
                        className="dropdown-menu-item mt-0"
                        style={{ top: "80px" }}
                      >
                        <li>
                          <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="/ourteam">Our Team</NavLink>
                        </li>
                        <li>
                          <NavLink to="/careers">Careers & Jobs</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="/users" className={"fw-bold text-info"}>
                        Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/experts" className={"fw-bold text-info"}>
                        Experts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/questions"
                        className={"fw-bold text-info"}
                        onClick={() => window.reload()}
                      >
                        Questions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/institutes"
                        className={"fw-bold text-info"}
                        onClick={() => window.reload()}
                      >
                        Institutes
                      </NavLink>
                    </li>
                  </ul>
                  {/* end ul */}
                </nav>
                {/* end main-menu */}
                <div className="nav-right-button">
                  {userData?.first_name ||
                  userData?.name ||
                  OnboardingData?.name ? (
                    <>
                      <div className="menu-bar  ">
                        <ul className="d-flex align-items-center">
                          <li className="mr-4">
                            <Button
                              variant="soft"
                              color="info"
                              onClick={() => {
                                navigate(jobsearchurl);
                              }}
                            >
                              {userData?.role === "institute"
                                ? " Find a Teacher "
                                : "Search Jobs"}
                              &nbsp;
                              {/* <SearchIcon /> */}
                            </Button>
                          </li>
                          {/* <li className="mr-4">
                            <IconButton
                              variant="soft"
                              color="info"
                              aria-label={notificationsLabel(100)}
                              onClick={() => navigate("/messages")}
                              className="rounded"
                            >
                              <Badge
                                variant="soft"
                                badgeContent={100}
                                color="info"
                              >
                                <MailRounded sx={{ fontSize: "30px" }} />
                              </Badge>
                            </IconButton>
                          </li> */}
                          <li className="mr-4">
                            <IconButton
                              variant="soft"
                              color="warning"
                              aria-label={notificationsLabel(100)}
                              onClick={() => navigate("/notifications")}
                              className="rounded"
                            >
                              <Badge
                                variant="soft"
                                badgeContent={unreadCount}
                                color="info"
                              >
                                <NotificationsRounded
                                  color="warning"
                                  sx={{ fontSize: "30px" }}
                                />
                              </Badge>
                            </IconButton>
                            <ul
                              className="dropdown-menu-item rounded p-2 p-lg-3 shadow"
                              style={{
                                position: "absolute",
                                left: "-240px",
                                width: "350px",
                                top: "60px",
                                maxHeight: 500,
                              }}
                            >
                              <li className="px-3 py-1">
                                <h5>Notifications</h5>
                              </li>
                              {notifications.length ? (
                                notifications?.map(
                                  (item, key) =>
                                    key < 4 && (
                                      <NotificationListItem
                                        key={key}
                                        data={item}
                                        reload={getNotifications}
                                      />
                                    )
                                )
                              ) : (
                                <>
                                  <li>No new notifications found</li>
                                </>
                              )}

                              <li>
                                <Divider />
                              </li>
                              <li className="mt-3">
                                <Stack
                                  direction="row"
                                  justifyContent="space-between"
                                >
                                  <Button
                                    variant="plain"
                                    size="sm"
                                    startDecorator={<DoneAllRounded />}
                                  >
                                    Mark all as read
                                  </Button>
                                  <Button
                                    className=""
                                    variant="soft"
                                    size="sm"
                                    onClick={() => {
                                      navigate("/notifications");
                                    }}
                                  >
                                    All Notifications
                                  </Button>
                                </Stack>
                              </li>
                            </ul>
                          </li>
                          {/* <li className="mr-2">
                          <IconButton
                            id="positioned-demo-button"
                            aria-controls={openMenu ? 'positioned-demo-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                            variant="outlined"
                            color="neutral"
                            onClick={handleMenuClick}
                          >
                            <Badge
                              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                              badgeInset="14%"
                              color="success"
                              sx={{
                                [`& .${badgeClasses.badge}`]: {
                                  '&::after': {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    // animation: 'ripple 1.2s infinite ease-in-out',
                                    border: '2px solid',
                                    borderColor: 'success.500',
                                    content: '""',
                                  },
                                },
                                '@keyframes ripple': {
                                  '0%': {
                                    transform: 'scale(1)',
                                    opacity: 1,
                                  },
                                  '100%': {
                                    transform: 'scale(2)',
                                    opacity: 0,
                                  },
                                },
                              }}
                            >
                              <Avatar alt={userData?.first_name || userData?.username || userData?.email} src={userData?.profile || "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=826&t=st=1686244439~exp=1686245039~hmac=90414ed63eccda4b6262bd742f1abf5ef8a0add952a55b3e73988c7de09ed589"} />
                            </Badge>
                          </IconButton>
                          <Menu
                            id="positioned-demo-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleMenuClose}
                            aria-labelledby="positioned-demo-button"
                            placement="bottom-end"
                            className="z-3"
                          >
                            <MenuItem onClick={handleMenuClose}>
                              <ListItemDecorator>
                                <Edit />
                              </ListItemDecorator>{' '}
                              Edit post
                            </MenuItem>
                            <MenuItem disabled onClick={handleMenuClose}>
                              <ListItemDecorator />
                              Draft post
                            </MenuItem>
                            <ListDivider />
                            <MenuItem onClick={handleMenuClose} variant="soft" color="danger">
                              <ListItemDecorator sx={{ color: 'inherit' }}>
                                <DeleteForever />
                              </ListItemDecorator>{' '}
                              Delete
                            </MenuItem>
                          </Menu>
                        </li> */}
                          <li>
                            <Badge
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                              }}
                              badgeInset="14%"
                              color="success"
                              sx={{
                                [`& .${badgeClasses.badge}`]: {
                                  "&::after": {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                    // animation: 'ripple 1.2s infinite ease-in-out',
                                    border: "2px solid",
                                    borderColor: "success.500",
                                    content: '""',
                                  },
                                },
                                "@keyframes ripple": {
                                  "0%": {
                                    transform: "scale(1)",
                                    opacity: 1,
                                  },
                                  "100%": {
                                    transform: "scale(2)",
                                    opacity: 0,
                                  },
                                },
                              }}
                            >
                              <Avatar
                                alt={
                                  userData?.first_name ||
                                  userData?.username ||
                                  userData?.email
                                }
                                src={
                                  userData?.profile ||
                                  "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg?w=826&t=st=1686244439~exp=1686245039~hmac=90414ed63eccda4b6262bd742f1abf5ef8a0add952a55b3e73988c7de09ed589"
                                }
                              />
                            </Badge>
                            <ul
                              className="dropdown-menu-item rounded p-2 p-lg-3 shadow"
                              style={{
                                position: "absolute",
                                left: "-150px",
                                maxWidth: "200px",
                                top: "60px",
                              }}
                            >
                              <li>
                                <p className="fw-bold mb-2 text-info">
                                  Hi,{" "}
                                  {userData?.first_name ||
                                    OnboardingData?.name ||
                                    userData?.name}
                                </p>
                              </li>
                              <li>
                                <Stack
                                  direction={"row"}
                                  spacing={2}
                                  alignItems="center"
                                >
                                  <CircularProgress
                                    size="lg"
                                    determinate
                                    value={Math.round(profileCompletion)}
                                    color="primary"
                                  >
                                    {Math.round(profileCompletion)} %
                                  </CircularProgress>
                                  <h6 className="text-wrap">
                                    Profile Completion
                                  </h6>
                                </Stack>
                              </li>
                              <ListDivider className="mt-3 mb-2" />
                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to={profileURL}
                                >
                                  Profile
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to={DashboardURL}
                                >
                                  Dashboard
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to="/profile/connection"
                                >
                                  Connections
                                </NavLink>
                              </li>

                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to="/profile/questions"
                                >
                                  Questions Asked
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to="/profile/answers"
                                >
                                  Answered
                                </NavLink>
                              </li>
                              <li>
                                <NavLink
                                  className="text-dark fw-semibold rounded-2"
                                  to="/setting/account"
                                >
                                  Account
                                </NavLink>
                              </li>
                              <li className="mt-2">
                                <Button
                                  className=""
                                  fullWidth
                                  variant="soft"
                                  onClick={handleLogoutOrInstituteLogin}
                                  startDecorator={<LogoutTwoTone />}
                                >
                                  Logout
                                </Button>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink
                        to="/auth/login"
                        className="btn theme-btn theme-btn-outline  mr-2 rounded"
                      >
                        <i className="la la-sign-in mr-1"></i> Login
                      </NavLink>
                      <NavLink
                        to={"/auth/register"}
                        className="btn theme-btn theme-btn-white rounded"
                      >
                        <i className="la la-user mr-1"></i>Register
                      </NavLink>
                    </>
                  )}
                </div>
                {/* end nav-right-button */}
              </div>
              {/* end menu-wrapper */}
            </div>
            {/* end col-lg-10 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </header>
      <Drawer open={sideBar}>
        <div className="d-lg-none " style={{ minWidth: 350 }}>
          <div className="d-flex align-items-center justify-content-between bg-light p-2 py-3">
            <NavLink to="/" className="logo">
              <img
                src="/images/logo-gradiant.png"
                alt="logo"
                className="pl-3"
                style={{ maxWidth: "140px", objectFit: "contain" }}
              />
            </NavLink>
            <div className="controls">
              <IconButton
                variant="plain"
                aria-label={notificationsLabel(100)}
                onClick={() => navigate("/notifications")}
                className="rounded"
              >
                <Badge color="warning" badgeContent={1}>
                  <NotificationsRounded sx={{ fontSize: "30px" }} />
                </Badge>
              </IconButton>
              <IconButton
                variant="plain"
                onClick={() => {
                  toggleSidebar();
                  navigate("/notifications");
                }}
              >
                <Cancel className="text-black" />
              </IconButton>
            </div>
          </div>
          <div className="p-2">
            <MenuList className="border-0">
              <MenuItem className="rounded">
                <Button
                  onClick={() => {
                    setOpen(true);
                    toggleSidebar();
                  }}
                  variant="soft"
                  className="rounded w-100 py-3 text-capitalize"
                >
                  Ask a Question
                </Button>
              </MenuItem>
              <NavLink
                to="/questions"
                onClick={() => {
                  toggleSidebar();
                  navigate("/questions");
                }}
              >
                <MenuItem className="rounded">
                  <ListItemIcon>
                    <QuestionAnswer fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Questions</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/users"
                onClick={() => {
                  toggleSidebar();
                  navigate("/users");
                }}
              >
                <MenuItem className="rounded">
                  <ListItemIcon>
                    <PeopleAltTwoTone fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Users</ListItemText>
                </MenuItem>
              </NavLink>

              <NavLink
                to="/careers"
                onClick={() => {
                  toggleSidebar();
                  navigate("/careers");
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <BusinessRounded fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Careers & Jobs</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/team"
                onClick={() => {
                  toggleSidebar();
                  navigate("/team");
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <PeopleOutlineRounded fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Our Team</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/notifications"
                onClick={() => {
                  toggleSidebar();
                  navigate("/notifications");
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <NotificationImportantRounded fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Notifications</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/setting/account"
                onClick={() => {
                  toggleSidebar();
                  navigate("/setting/account");
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Account</ListItemText>
                </MenuItem>
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => {
                  toggleSidebar();
                  navigate("/about");
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <Info fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>About Us</ListItemText>
                </MenuItem>
              </NavLink>
            </MenuList>
          </div>
        </div>
      </Drawer>
      <AskQuestion
        open={open}
        handleClose={handleClose}
        categories={categories}
      />
    </>
  );
};

export default Navbar;

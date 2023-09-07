import {
  CardMembershipTwoTone,
  Category,
  Dashboard,
  Diversity3,
  DynamicFormTwoTone,
  FavoriteBorder,
  Filter2TwoTone,
  FilterAltTwoTone,
  HelpCenterOutlined,
  HelpOutlineTwoTone,
  HomeOutlined,
  Menu,
  Mic,
  Person,
  Search,
  SearchTwoTone,
  SettingsVoice,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Badge,
  Box,

  ButtonGroup,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,

  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import AskQuestion from "./components/Questions/AskQuestion";
import QuestionCard from "./components/Questions/QuestionCard";
import QuestionSkeleton from "./components/Skeleton/QuestionSkeleton";
import "./Forum.css";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import StopIcon from "@mui/icons-material/Stop";
import AccessDenied from "./components/Fallback/AccessDenied";
import ReportContent from "./components/Modals/ReportContent";
import { ForumProvider } from "./forumContext/forumContext";
import SuggestedExperts from "pages/user/widgets/SuggestedExperts";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Input, ListItemDecorator, Tab, TabList, Tabs, IconButton, CircularProgress, Button } from "@mui/joy";
import RelevantQuestions from "pages/user/widgets/RelevantQuestions";
import { tabClasses } from '@mui/joy/Tab';
import SwipeableEdgeDrawer from "./components/Extras/SwipeableEdgeDrawer";
import useDidMountEffect from "global/useDidMountEffect";

const Forum = () => {
  const { userData, api, questions, setQuestions, categories } =
    useGlobalContext();
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  // const [questions, setQuestions] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(location?.state?.open ? true : false);
  const [forumAccess, setForumAccess] = useState(true);
  const [showFilterBox, setShowFilterBox] = useState(false);
  const [pageHeading, setPageHeading] = useState("Top Questions");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState();
  const [category, setCategory] = useState("");
  const [loadMore, setLoadMore] = useState(false);
  const [showLoadBtn, setShowLoadBtn] = useState(true);
  const [sortAndFilter, setSortAndFilter] = useState({});
  const { token } = useGlobalContext();
  const [openReport, setOpenReport] = React.useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const isLogin = localStorage.getItem("isLogin");
  const [skill, setSkill] = useState();
  const [index, setIndex] = React.useState(0);
  const colors = ['primary', 'info', 'danger', 'success'];
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [listening, setListening] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getQuestionsByQuery = async () => {
    setLoading(true);
    try {
      const res = await api.get(
        `/app/question?sort=${sort}&filter=${filter}&page=${page}&limit=${limit}&offset=${offset}`
      );
      if (res.status === 200) {
        setQuestions(res?.data?.results);
        if (sort) {
          setPageHeading(
            `${sort.charAt(0).toUpperCase() + sort.slice(1)} Questions`
          );
        }
        console.log("GetQuestionsByQuery: ", res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "En" });
    setListening(true);
  }
  // console.log(startListening)

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const stopListening = () => {
    SpeechRecognition.abortListening();
    setListening(false);
  };

  useDidMountEffect(() => {
    formik.setFieldValue("search", transcript);
    if (transcript && transcript != "") {
      formik.handleSubmit();
      stopListening();
    }
  }, [transcript]);

  const getQuestionsByCategory = async (categoryId) => {
    setLoading(true);
    navigate("/questions");
    try {
      const res = await api.get(
        `/app/question/category?categoryId=${categoryId}&sort=${sort}&filter=${filter}&page=${page}&limit=${limit}&offset=${offset}`
      );
      if (res.status === 200) {
        setQuestions(res?.data?.results);
        // if (sort) {
        //   setPageHeading(`${sort.charAt(0).toUpperCase() + sort.slice(1)} Questions`);
        // }
        // setPageHeading(`${category}`);
        console.log("GetQuestionsByCategory: ", res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };

  const getQuestions = async () => {
    setLoading(true);
    navigate("/questions");
    try {
      // const res = await api.get(`/app/questions`);
      const res = await api.get(
        `/app/question?sort=top-questions&filter=${filter}&page=${page}&limit=${limit}&offset=${offset}`
      );
      if (res.status === 200) {
        setQuestions(res?.data?.results);
        setPageHeading(`Top Questions`);
        console.log("Question Data: ", res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  const getMyQuestions = async () => {
    setLoading(true);
    navigate("/questions");
    try {
      const res = await api.get(`/app/question/my?userId=${userData?.id}`);
      if (res.status === 200) {
        setQuestions(res?.data?.results);
        setPageHeading(`My Questions`);
        console.log("My Question Data: ", res);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values, action) => {
      console.log("Serching...  :", values);
      setLoading(true);
      try {
        const response = await api.get(`/app/search?keyword=${values.search}`);
        if (response.status === 200) {
          console.log("Serching Formik :", response?.data?.results);
          action.resetForm();
          setQuestions(response?.data?.result);
          setPageHeading(`Search Results (${response?.data?.result?.length})`);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const getSearchResults = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `/app/search?keyword=${location?.state?.keyword}`
      );
      if (response.status === 200) {
        console.log("GetSearchResults :", response?.data?.results);
        setQuestions(response?.data?.result);
        setPageHeading(`Search Results (${response?.data?.result?.length})`);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // const verifyUser = async () => {
  //   try {
  //     const res = await api.post(`/app/verify-user`, {
  //       email: userData?.email,
  //     });
  //     if (res?.status === 200) {
  //       console.log("Verified User");
  //       setForumAccess(true);
  //       getQuestions();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     if (error?.response?.status === 403) {
  //       try {
  //         const resData = await apiJsonAuth.get("/student/detail", {
  //           headers: {
  //             Authorization: token,
  //           },
  //         });
  //         if (resData?.status === 200) {
  //           let user = resData?.data?.result[0];
  //           // setStudentData(user?.data?.result[0]);
  //           console.log("User :", user?.data?.result[0]);
  //           const createUserRes = await api.post(`/app/create-user`, {
  //             name: user?.first_name + " " + user?.last_name,
  //             email: user?.email,
  //             profile_pic: user?.profile,
  //             instituteName: user?.institution_name,
  //             delegateCountry: user?.g20_country,
  //             delegateDesignation: user?.g20_designation
  //           });
  //           if (createUserRes?.status === 200) {
  //             setForumAccess(true);
  //             getQuestions();
  //             setSort('top-questions');
  //           }
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         if (error?.response?.status === 409) {
  //           setForumAccess(true);
  //           getQuestions();
  //         } else {
  //           setForumAccess(false);
  //         }
  //       }
  //     } else {
  //       console.log(error);
  //       setForumAccess(false);
  //     }
  //   }
  // }

  const handleShowFilterBox = () => {
    if (showFilterBox) {
      setShowFilterBox(false);
    } else {
      setShowFilterBox(true);
    }
  };

  useDidMountEffect(() => {
    // verifyUser();
    console.log("Params : ", params);
    if (location?.state?.keyword) {
      getSearchResults();
    }
  }, [location?.state?.keyword]);

  useDidMountEffect(() => {
    console.log("UesEffect Sort or filter");
    if (sort && filter) {
      setFilterCount(2);
    } else if (filter || sort) {
      setFilterCount(1);
    } else {
      setFilterCount(0);
    }
    getQuestionsByQuery();
  }, [sort, filter]);

  useEffect(() => {
    getQuestionsByQuery();
  }, []);

  return (
    <>
      <ForumProvider>
        <div className="container">
          {forumAccess ? (
            <div className="row my-3">
              <div className="col-lg-3 p-2">
                {params?.slug ? (
                  <SuggestedExperts skill={skill} className="mb-3" />
                ) : null}
                {categories?.length ? (
                  <>
                    <div className="shadow-lg rounded p-2 p-lg-3 mb-3">
                      <h6>Categories</h6>
                      <input
                        class="form-control forum-nav-item mt-3 rounded-3"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search category..."
                        onKeyDown={async (e) => {
                          console.log(e);
                          if (e.key === "Enter") {
                            setPage(1);
                            let categoryName = e.target.value;
                            if (categoryName) {
                              setPageHeading(categoryName);
                            } else {
                              setPageHeading("Newest Questions");
                            }
                            categories?.forEach((c) => {
                              if (c.name === categoryName) {
                                e.target.value = "";
                                return getQuestionsByCategory(c.id);
                              }
                            });
                          }
                        }}
                      />
                      <datalist id="datalistOptions" className="w-100 bg-light">
                        {categories?.map((category, index) => (
                          <option
                            className="forum-nav-item my-2 p-2 border rounded-3"
                            key={category.id}
                            value={category?.name}
                          >
                            {category.id}: {category?.name}
                          </option>
                        ))}
                      </datalist>

                      <ul className="nav-items">
                        {categories?.map(
                          (category, index) =>
                            index < 5 && (
                              <li
                                className="forum-nav-item my-2 p-2 border rounded-3"
                                key={category.id}
                                onClick={() => {
                                  // navigate('/questions');
                                  setPage(1);
                                  setPageHeading(category.name);
                                  getQuestionsByCategory(category.id);
                                }}
                              >
                                {category?.name}
                              </li>
                            )
                        )}
                      </ul>
                    </div>
                  </>
                ) : null}
              </div>

              {/* Search Box */}

              <div className="col-lg-6 p-2">
                <FormControl
                  variant="outlined"
                  fullWidth
                  className="mb-3 rounded"
                >
                  <Input
                    color="primary"
                    size="lg"
                    id="search"
                    type="text"
                    className="rounded-4 px-3 shadow-lg border-0"
                    name="search"
                    value={formik.values.search}
                    onChange={formik.handleChange}
                    startDecorator={
                      <InputAdornment position="start">
                        {
                          listening ?
                            <IconButton onClick={stopListening} >
                              <CircularProgress color="warning" >
                                {/* <SettingsVoice color="warning" /> */}
                              </CircularProgress>
                            </IconButton>

                            :
                            <IconButton
                              variant="plain"
                              onClick={startListening}
                              edge="end"
                            >
                              <MicNoneIcon />
                            </IconButton>
                        }


                      </InputAdornment>
                    }
                    endDecorator={
                      <InputAdornment position="end">
                        <IconButton
                          variant="plain"
                          aria-label="toggle password visibility"
                          onClick={formik.handleSubmit}
                          edge="end"
                        >
                          <SearchTwoTone />
                        </IconButton>


                      </InputAdornment>
                    }
                    placeholder="Search..."
                  />
                </FormControl>
                <Outlet
                  context={[
                    { questions, pageHeading, loading, setSkill },
                    {
                      loading,
                      questions,
                      pageHeading,
                      setSort,
                      filterCount,
                      handleShowFilterBox,
                      showFilterBox,
                      sortAndFilter,
                      setSortAndFilter,
                      setFilter,
                      setShowFilterBox,
                      setPage,
                      setPageHeading,
                      getQuestions,
                      showLoadBtn,
                      setLoadMore,
                      sort,
                      filter,
                      page,
                      limit,
                      offset,
                      setQuestions,
                      loadMore,
                      handleClickOpen,
                      setShowLoadBtn,
                    },
                  ]}
                />
                {/* <div style={{ display: "flex", alignItems: "center" }}>
                  {transcript && (
                    <img
                      alt="Recording"
                      src="/images/soundWave.gif"
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                  <MicNoneIcon
                    size={20}
                    onClick={startListening}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginLeft: "8px",
                    }}
                  />
                  <StopIcon
                    size={20}
                    onClick={SpeechRecognition.stopListening}
                    style={{
                      cursor: "pointer",
                      color: "black",
                      marginLeft: "8px",
                    }}
                  />
                </div> */}
              </div>
              <div className="col-lg-3 p-2">
                <div className="mb-3">
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleClickOpen}
                    className="rounded py-3 fs-5 text-capitalize fw-bold shadow-lg"
                  >
                    <HelpOutlineTwoTone />
                    &nbsp;Ask Question
                  </Button>
                </div>
                <div className="shadow-lg rounded p-2 p-lg-3 mb-3">
                  <nav class="nav nav-pills nav-fill flex-column">
                    <h6>Navigation</h6>
                    <ul className="nav-items">
                      <li
                        className="forum-nav-item my-2 p-2 border rounded-3"
                        onClick={getQuestions}
                      >
                        Top Questions
                      </li>
                      {isLogin && (
                        <li
                          className="forum-nav-item my-2 p-2 border rounded-3"
                          onClick={getMyQuestions}
                        >
                          My Question
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
                <div className="d-md-none">
                  {/*Mobile Navigation Dock  */}
                  <ul
                    className="nav nav-pills-design-4 mobile nav-pills bg-white w-100 shadow justify-content-between w-100"
                    id="pills-tab"
                    role="tablist"
                    style={{ position: "fixed", bottom: 0, left: 0, zIndex: 400 }}
                  >

                    <li className="nav-item col text-center p-0" role="presentation" style={{ display: 'inline' }}>
                      <IconButton className="nav-link text-center w-100 py-3 d-flex flex-column justify-content-center" variant="plain"
                        onClick={() => setOpenMobileDrawer(true)}
                      >
                        <Category color="primary" sx={{ fontSize: 30 }} />
                        <p className="caption">Categories</p>
                      </IconButton>
                    </li>
                    <li className="nav-item col text-center p-0" role="presentation" style={{ display: 'inline' }}>
                      <IconButton className="nav-link text-center w-100 py-3 d-flex flex-column justify-content-center" variant="plain">
                        <Mic color="primary" sx={{ fontSize: 30 }} />
                        <p className="caption">Ask</p>
                      </IconButton>
                    </li>
                    <li className="nav-item col text-center p-0" role="presentation" style={{ display: 'inline' }}>
                      <IconButton className="nav-link text-center w-100 py-3 d-flex flex-column justify-content-center" variant="plain">
                        <Menu color="primary" sx={{ fontSize: 30 }} />
                        <p className="caption">Navigation</p>
                      </IconButton>
                    </li>

                  </ul>
                  {/* <Tabs
                    size="lg"
                    aria-label="Bottom Navigation"
                    value={index}
                    onChange={(event, value) => setIndex(value)}
                    
                    sx={(theme) => ({
                      position: "fixed", bottom: 0,  zIndex: 40,
                      borderRadius: 'xl',
                      maxWidth: 400,
                      mx: 'auto',
                      boxShadow: theme.shadow.sm,
                      '--Tabs-gap': '8px',
                      '--joy-shadowChannel': theme.vars.palette[colors[index]].darkChannel,
                      [`& .${tabClasses.root}`]: {
                        boxShadow: 'none',
                        borderRadius: 'lg',
                        whiteSpace: 'nowrap',
                        transition: '0.3s',
                        fontWeight: 'lg',
                        flex: 1,
                        [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                          opacity: 0.72,
                        },
                      },
                    })}
                  >
                    <TabList variant="plain" sx={{ '--ListItemDecorator-size': '28px' }}>
                      <Tab
                        orientation="vertical"
                        {...(index === 0 && { variant: 'soft', color: colors[0] })}
                      >
                        <ListItemDecorator>
                          <HomeOutlined />
                        </ListItemDecorator>
                        Home
                      </Tab>
                      <Tab
                        orientation="vertical"
                        {...(index === 1 && { variant: 'soft', color: colors[1] })}
                      >
                        <ListItemDecorator>
                          <FavoriteBorder />
                        </ListItemDecorator>
                        Likes
                      </Tab>
                      <Tab
                        orientation="vertical"
                        {...(index === 2 && { variant: 'soft', color: colors[2] })}
                      >
                        <ListItemDecorator>
                          <Search />
                        </ListItemDecorator>
                        Search
                      </Tab>
                      <Tab
                        orientation="vertical"
                        {...(index === 3 && { variant: 'soft', color: colors[3] })}
                      >
                        <ListItemDecorator>
                          <Person />
                        </ListItemDecorator>
                        Profile
                      </Tab>
                    </TabList>
                  </Tabs> */}
                  {/*End Mobile Navigation Dock  */}
                </div>
                {params?.slug ? (
                  <RelevantQuestions slug={params?.slug} className="mb-3" />
                ) : null}
                {/* {
                    categories?.length ?
                      <>
                        <div className="border rounded p-2 p-lg-3 mb-3">
                          <h6>Categories</h6>
                          <ul className="nav-items">
                            {
                              categories?.map((category) => {
                                return <li className="forum-nav-item my-2 p-2 border rounded-3"
                                  onClick={() => {
                                    setPage(1);
                                    setPageHeading(category.name);
                                    getQuestionsByCategory(category.id);
                                  }}
                                >{category?.name}</li>
                              })
                            }
                          </ul>
                        </div>
                      </> : null
                  } */}
              </div>
            </div>
          ) : (
            <>
              <AccessDenied
                // title="Access Denied"
                message="It seems like you don't have access to the Q&A portal currently, Please contact your admin to activate the feature."
                contact="support@yuvamanthan.org"
              />
            </>
          )}
        </div>
        <AskQuestion
          open={open}
          handleClose={handleClose}
          getQuestions={getQuestions}
          categories={categories}
        />
        <SwipeableEdgeDrawer openDrawer={openMobileDrawer} anchor={'bottom'} />
        <ReportContent open={openReport} setOpen={setOpenReport} />
      </ForumProvider>
    </>
  );
};

export default Forum;

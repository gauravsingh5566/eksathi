import {
  BusinessCenterTwoTone,
  Favorite,
  FavoriteBorderOutlined,
  FiberManualRecordTwoTone,
  FlashOnTwoTone,
  LocationCity,
  LocationOnTwoTone,
  SchoolTwoTone,
  Share,
  Thunderstorm,
  ArrowBackIosNewRounded,
  WhatsApp,
  Facebook,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/joy";
import { useGlobalContext } from "global/context";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const JobDetails = ({ setShowQuickApplyModel, setJobId }) => {
  const navigate = useNavigate();
  // const [jobdetailss , setjobdetailss] = useState('')
  const { api, userData, jobdetailss, setjobdetailss } = useGlobalContext();
  const [data, setData] = useState([]);
  const location = useLocation();
  const { slug } = useParams();

  const [showShare, setShowShare] = useState(false);

  const getJobs = async () => {
    console.log("Location: ", location);
    var endpoint;

    if ( slug !== "undefined" && slug !== null) {
      endpoint = `/app/jobs/details/${slug}?userId=${userData?.id}`;
    } else if (location?.state?.id) {
      endpoint = `/app/jobs/post/${location?.state?.id}?userId=${userData?.id}`;
    } else {
      console.log("Both slug and location.state.id are undefined.");
      return;
    }

    try {
      const res = await api.get(endpoint);
      if (res?.status === 200) {
        console.log("Job was successfully Fetched: ", res?.data?.result);
        setData(res?.data?.result);
        setjobdetailss(res?.data?.result);
        setJobId(res?.data?.result?.id);
      }
    } catch (err) {
      console.log("Error getting jobs", err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    console.log("data", jobdetailss);
  }, [data]);

  const ScrollerStyle = {
    maxHeight: "900px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };
  return (
    <>
      <div className="p-3 scroll-minibar">
        <div>
          <div className="d-flex p-2 align-items-center justify-content-between mb-4 text-dark ">
            <Typography
              level="h3"
              startDecorator={
                <IconButton onClick={() => navigate(-1)}>
                  <ArrowBackIosNewRounded className="text-black" />
                </IconButton>
              }
            >
              <h4 className=" col font-weight-bold  ">Job Description</h4>
              {/* <div></div> */}
            </Typography>
          </div>
        </div>
        <div>
          {/* {data.map(job => ( */}
          <div key={""}>
            <div className="fixed">
              <div className="d-flex justify-content-between align-items-center flex-wrap ">
                <h2 className="mb-4 fw-bold">{data?.job_title}</h2>
                <Avatar src={data?.institute?.logo} />
              </div>
              <div className="d-flex justify-content-between align-items-end flex-wrap ">
                <Stack
                  className="organisation-info"
                  direction={"column"}
                  spacing={1}
                >
                  <Typography startDecorator={<SchoolTwoTone color="info" />}>
                    {data?.institute?.name}
                  </Typography>
                  <Typography
                    startDecorator={<LocationOnTwoTone color="primary" />}
                  >
                    {data?.job_location}
                  </Typography>
                </Stack>
                <div>
                  <Stack direction="row" spacing={2} className="my-3">
                    <IconButton
                      variant="outlined"
                      onClick={() => {
                        if (showShare) {
                          setShowShare(false);
                        } else {
                          setShowShare(true);
                        }
                      }}
                    >
                      <Share />
                    </IconButton>

                    {showShare ? (
                      <>
                        <IconButton
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            window.open(
                              `https://wa.me/?text=Please%20checkout%20this%20job%0Ahttps://www.eksathi.com/careers/job/${slug}`,
                              "_blank",
                              "rel=noopener noreferrer"
                            )
                          }
                        >
                          <WhatsApp />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            window.open(
                              `http://www.facebook.com/share.php?u=eksathi.com/careers/job/${slug}&t=CNN%26s+website"`,
                              "_blank",
                              "rel=noopener noreferrer"
                            )
                          }
                        >
                          <Facebook />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            window.open(
                              `https://twitter.com/intent/tweet?text=Please%20checkout%20this%20job%0Ahttps://www.eksathi.com/careers/job/${slug}`,
                              "_blank",
                              "rel=noopener noreferrer"
                            )
                          }
                        >
                          <Twitter />
                        </IconButton>
                        <IconButton
                          variant="outlined"
                          color="primary"
                          onClick={() =>
                            window.open(
                              `https://www.linkedin.com/sharing/share-offsite/?url=https://www.eksathi.com/careers/job/${slug}`,
                              "_blank",
                              "rel=noopener noreferrer"
                            )
                          }
                        >
                          <LinkedIn />
                        </IconButton>
                      </>
                    ) : null}

                    {/* <IconButton variant="outlined">
                      <FavoriteBorderOutlined />
                    </IconButton> */}
                    {userData?.role === "teacher" ||
                    userData?.role === "professional" ? (
                      <Button
                        variant="soft"
                        startDecorator={<FlashOnTwoTone />}
                        onClick={() => setShowQuickApplyModel(true)}
                      >
                        Quick Apply
                      </Button>
                    ) : null}
                  </Stack>
                </div>
              </div>
              <Divider className="my-4" />
            </div>
            <div className="job-details mb-4">
              <h5 className="mb-2 fw-bold">Job Details</h5>
              <Typography startDecorator={<BusinessCenterTwoTone />}>
                {data?.employment_type} <span>&nbsp;</span>
              </Typography>
            </div>
            {/* <div className="job-details mb-4">
              <h5 className="mb-2  fw-bold">Benefits</h5>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip variant="soft" className="rounded-2 mb-2" color="neutral">
                  Work From Home
                </Chip>
              </Stack>
            </div> */}
            <div className="job-details mb-4">
              <h5 className="mb-2  fw-bold"> Minimum Qualification</h5>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Chip variant="soft" className="rounded-2 mb-2" color="neutral">
                  {data?.minimum_qualification?.degree}
                </Chip>
              </Stack>
            </div>
            <Divider className="my-4" />
            <div className="job-description mb-4">
              <h5 className="mb-4  fw-bold">Full Job Description</h5>
              <div>
                <div className="jd-about mb-4">
                  <h6 className="mb-2">About the Company:</h6>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.job_description,
                    }}
                  />
                </div>
              </div>
              {/* <div>
                <div className="jd-responsibilities mb-4">
                  <h6 className="mb-2">Responsibilities: </h6>
                  <List>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Getting a depth understanding of the teaching modules
                        provided by Learn2Read
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Complete the required learning program in the designated
                        timeframe with the ideal result and outcome
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Engaging students with creative and fun methods of
                        teaching using a variety of teaching aids in each
                        session
                      </Typography>
                    </ListItem>
                  </List>
                </div>
              </div> */}
              {/* <div>
                <div className="jd-responsibilities mb-4">
                  <h6 className="mb-2">Requirements/Skills needed: </h6>
                  <List>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Must be a Graduate Prior experience as a Pre-Primary
                        teacher (mandatory).
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Minimum 2 years of teaching experience in kindergarten
                        and primary level or kids between 3-8 years old.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Extremely good with numeracy skills. Good Command over
                        the English language.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Critical thinking skill and ability to utilize math
                        concepts in everyday life.
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography
                        startDecorator={
                          <FiberManualRecordTwoTone
                            fontSize="12px"
                            color="nuetral"
                          />
                        }
                      >
                        Skill to deal with young kids with patience and empathy
                      </Typography>
                    </ListItem>
                  </List>
                </div>
              </div> */}
              <div className="job-type mb-4">
                <h6 className="mb-2">
                  Job Types:{" "}
                  <span className="fw-normal font-weight-bold ">
                    {data?.employment_type}
                  </span>
                </h6>
                {/* <h6 className="mb-2">
                  Contract length: <span className="fw-normal">12 months</span>
                </h6>
                <h6 className="mb-2">
                  Part-time hours:{" "}
                  <span className="fw-normal">18 per week</span>
                </h6> */}
              </div>
              <div className="salary mb-4">
                <h6 className="mb-2">
                  Salary: <span>{data?.salary_range}</span>
                </h6>
              </div>
              {/* <div className="jd-benifits mb-4">
                <h6 className="mb-2">Benifits: </h6>
                <List>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      Work from home
                    </Typography>
                  </ListItem>
                </List>
              </div> */}
              {/* <div className="jd-benifits mb-4">
                <h6 className="mb-2">Schedule: </h6>
                <List>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      Evening shift
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      Morning shift
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      UK shift
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      US shift
                    </Typography>
                  </ListItem>
                </List>
              </div> */}
              <div className="jd-education mb-4">
                <h6 className="mb-2">Education: </h6>
                <List>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      {data?.minimum_qualification?.degree}
                    </Typography>
                  </ListItem>
                </List>
              </div>
              <div className="jd-experience mb-4">
                <h6 className="mb-2">Experience: </h6>
                <List>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      {data?.experience}
                    </Typography>
                  </ListItem>
                </List>
              </div>
              {/* <div className="jd-language mb-4">
                <h6 className="mb-2">Language: </h6>
                <List>
                  <ListItem>
                    <Typography
                      startDecorator={
                        <FiberManualRecordTwoTone
                          fontSize="12px"
                          color="nuetral"
                        />
                      }
                    >
                      English (Required)
                    </Typography>
                  </ListItem>
                </List>
              </div> */}
            </div>
            <div>
              <div className="jd-about mb-4">
                <h6 className="mb-2">Special Note:</h6>
                <div />
                {data?.special_note}
              </div>
            </div>
            <Divider className="my-3" />
            <div>
              <Stack
                direction="row"
                spacing={2}
                className="justify-content-between"
              >
                <Stack direction="row" spacing={2}>
                  <IconButton
                    variant="outlined"
                    onClick={() => {
                      if (showShare) {
                        setShowShare(false);
                      } else {
                        setShowShare(true);
                      }
                    }}
                  >
                    <Share />
                  </IconButton>

                  {showShare ? (
                    <>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          window.open(
                            `https://wa.me/?text=Please%20checkout%20this%20job%0Ahttps://www.eksathi.com/careers/job/${slug}`,
                            "_blank",
                            "rel=noopener noreferrer"
                          )
                        }
                      >
                        <WhatsApp />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          window.open(
                            `http://www.facebook.com/share.php?u=eksathi.com/careers/job/${slug}&t=CNN%26s+website"`,
                            "_blank",
                            "rel=noopener noreferrer"
                          )
                        }
                      >
                        <Facebook />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          window.open(
                            `https://twitter.com/intent/tweet?text=Please%20checkout%20this%20job%0Ahttps://www.eksathi.com/careers/job/${slug}`,
                            "_blank",
                            "rel=noopener noreferrer"
                          )
                        }
                      >
                        <Twitter />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() =>
                          window.open(
                            `https://www.linkedin.com/sharing/share-offsite/?url=https://www.eksathi.com/careers/job/${slug}`,
                            "_blank",
                            "rel=noopener noreferrer"
                          )
                        }
                      >
                        <LinkedIn />
                      </IconButton>
                    </>
                  ) : null}
                  {/* <IconButton variant="outlined">
                    <FavoriteBorderOutlined />
                  </IconButton> */}
                </Stack>
                {userData?.role === "teacher" ||
                userData?.role === "professional" ? (
                  <Button
                    variant="soft"
                    startDecorator={<FlashOnTwoTone />}
                    onClick={() => setShowQuickApplyModel(true)}
                  >
                    Quick Apply
                  </Button>
                ) : null}
              </Stack>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default JobDetails;

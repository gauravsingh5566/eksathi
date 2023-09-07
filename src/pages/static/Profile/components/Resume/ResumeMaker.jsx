import React, { useRef, useState, useEffect } from "react";
import Cloud from "@mui/icons-material/Cloud";
import Sun from "@mui/icons-material/LightMode";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import { useReactToPrint } from "react-to-print";
import { Button, Textarea } from "@mui/joy";
import Checkbox from "@mui/joy/Checkbox";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import "./Resume.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider, Grid, InputBase, Paper } from "@mui/material";
import Achievement from "./Component/Achievement";
import Summary from "./Component/Summary";
import Experience from "./Component/Experience";
import Projects from "./Component/Project";
import Certification from "./Component/Certification";
import Education from "./Component/Education";
import Header from "./Component/Header";
import Social from "./Component/Social";
import EkSathiRefrence from "./Component/EkSathiRefrence";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";

const Skills = ({ skillsData, profile, currentUser }) => {
  const { userData, api } = useGlobalContext();
  const [openAddSkill, setOpenAddSkill] = useState(false);
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    try {
      const res = await api.get(
        `/app/candidates/skills/${profile || userData?.id}`
      );
      if (res?.status === 200) {
        setSkills(res?.data?.results);
        console.log("Skills : ", res?.data?.results);
      }
    } catch (err) {
      console.log(err);
      // toast.error("Error getting skills");
      setSkills([]);
    }
  };

  useEffect(() => {
    getSkills();
  }, [profile]);
  return (
    <>
      <div className="p-3">
        <h4 className="font-weight-bold mb-2">Skills</h4>
        <div className="job-list d-flex flex-wrap ">
          {/* <Button variant='soft' color='info' size='sm' className='mr-2 mb-2'>Communication Skills</Button> */}
          {skills.map((skill) => (
            <>
              {profile === currentUser ? (
                <Chip
                  variant="soft"
                  color="info"
                  className="rounded-1 mr-2 mb-2"
                  // endDecorator={<ChipDelete onDelete={() => deleteSkill(skill?.id)} />}
                >
                  {skill?.skill_name}
                </Chip>
              ) : (
                <Chip
                  variant="soft"
                  color="info"
                  className="rounded-1 mr-2 mb-2"
                >
                  {skill?.skill_name}
                </Chip>
              )}
            </>
          ))}
        </div>
        {/* <div className="mb-3" style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {skillsData.map((skill, index) => (
              <Chip key={index} variant="soft">
                {skill}
              </Chip>
            ))}
          </Box>
        </div> */}
      </div>
      {/* <div className="border"></div> */}
    </>
  );
};

const ColorPicker = ({ color, setColor }) => {
  return (
    <>
      <div>
        <Card
          orientation="horizontal"
          variant="solid"
          invertedColors
          sx={{
            gap: 10,
            minHeight: 125,
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: color,
            flexGrow: 1,
            zIndex: 0,
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              bottom: "1.5rem",
              right: "1.5rem",
              borderRadius: "50%",
            }}
            onClick={() => {
              const colors = [
                "#333333",
                "#0066CC",
                "#0099CC",
                "#669966",
                "#666699",
                "#FF9900",
                "#6699CC",
                "#666633",
                "#993333",
                "#996633",
              ];

              const nextColor = colors.indexOf(color);
              setColor(colors[nextColor + 1] ?? colors[0]);
            }}
          >
            🎨
          </IconButton>
        </Card>
      </div>
    </>
  );
};

function ResumeMaker({ data }) {
  const { state } = useLocation();
  console.log("state", state);
  // const [profile, setprofile] = useState(state);
  const ComponentPdf = useRef();
  const contentRef = useRef();
  const [sections, setSections] = useState({
    summary: true,
    experience: true,
    education: true,
    certification: true,
    projects: true,
    socialLinks: true,
    skills: true,
    achievement: true,
  });
  const [edit, setedit] = useState(true);
  const [editExp, seteditExp] = useState(true);
  const [editEdu, seteditEdu] = useState(true);
  const [editpro, seteditpro] = useState(true);
  const [editCert, seteditCert] = useState(true);
  const [editAchiev, seteditAchiev] = useState(true);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = React.useState("#9eaeb5");
  const [showResume, setshowResume] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const [profile, setProfile] = useState(data);
  const navigate = useNavigate();
  const {
    userData,
    token,
    api,
    apiAuth,
    setShowMessage,
    setMessageTo,
    setAuth,
    onlineUsers,
  } = useGlobalContext();
  const pdf = useReactToPrint({
    content: () => ComponentPdf.current,
  });
  const genratePDF = () => {
    setshowResume(true);
    return setTimeout(() => {
      pdf();
      setshowResume(false);
    }, 100);
  };

  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, []);

  const handleEdit = () => {
    setedit(!edit);
  };
  const EditExperince = () => {
    seteditExp(!editExp);
  };
  const EditEducation = () => {
    seteditEdu(!editEdu);
  };
  const EditProject = () => {
    seteditpro(!editpro);
  };
  const EditCertification = () => {
    seteditCert(!editCert);
  };
  const EditAchivement = () => {
    seteditAchiev(!editAchiev);
  };

  // Skills Datat
  const [showSkillsInput, setShowSkillsInput] = useState(false);
  const [textQ, setTextQ] = useState("");
  const [qualifications, setQualifications] = useState([
    "Problem-Solving",
    "Data Structures and Algorithms",
    "DevOps",
    "Security",
    "Database Management",
    "Back-End",
    "RESTful APIs",
    "Deployment and Hosting",
    "Database Design",
  ]);

  const [skillsData, setSkillsData] = useState([]);

  const handleEditClick = () => {
    setShowSkillsInput(true);
  };

  const handleClickQ = () => {
    if (textQ.trim() !== "") {
      setQualifications((prevQualifications) => [...prevQualifications, textQ]);
      setTextQ("");
      setSkillsData((prevSkillsData) => [...prevSkillsData, textQ]);
    }
  };

  const handleDeleteQ = (skillToDelete) => {
    setQualifications((prevQualifications) =>
      prevQualifications.filter(
        (qualification) => qualification !== skillToDelete
      )
    );
    setSkillsData((prevSkillsData) =>
      prevSkillsData.filter((skill) => skill !== skillToDelete)
    );
  };

  const { username } = useParams();

  const getProfile = async () => {
    let profileNotify = toast.loading("Getting profile information...");
    setLoading(true);
    try {
      console.log("Username: ", username);
      if (username && username === "profile") {
        const res = await api.get(
          `app/user/profile/${userData?.id}?userId=${userData?.id}`
        );
        if (res.status == 200) {
          toast.dismiss(profileNotify);
          toast.success("Resume fetched successfully");
          setProfile(res?.data);
          // setSkills(res?.data?.skills);
          setLoading(false);
          // localStorage.setItem('user', user);
          console.log(res);
          console.log("Profile: ", res?.data);
        }
      } else if (username) {
        const res = await api.get(
          `app/user/profile/${username || userData?.id}?userId=${userData?.id}`
        );
        if (res.status == 200) {
          toast.dismiss(profileNotify);
          toast.success("Information fetched successfully");
          setProfile(res?.data);
          // setSkills(res?.data?.skills);
          setLoading(false);
          // localStorage.setItem('user', user);
          console.log(res);
          console.log("Profile: ", res?.data);
        }
      } else if (userData?.id) {
        const res = await api.get(`app/user/${userData?.id}`);
        if (res.status == 200) {
          toast.dismiss(profileNotify);
          toast.success("Resume fetched successfully");
          setProfile(res?.data);
          // setSkills(res?.data?.skills);
          setLoading(false);
          // localStorage.setItem('user', user);
          console.log(res);
          console.log("Profile: ", res?.data);
        }
      } else {
        navigate("/404");
      }
    } catch (error) {
      toast.dismiss(profileNotify);
      if (error?.response?.data?.status === 404) {
        toast.error(
          "Error getting profile information, Please try again later!"
        );
        navigate("/404");
      } else {
        // toast.error(error?.response?.data?.message);
        // toast("Redirecting back to last visited page...");
        // navigate(-1);
        navigate("/404");
      }

      // setLoading(false);
    }
  };
  useEffect(() => {
    // setIsOnline(false);
    getProfile();
    window.scrollTo(0, 0);
  }, [username]);
  console.log("peofile", profile);

  return (
    <>
      <div className="container">
        <div className="row   ">
          <div className="col-lg-9 col-sm-12 ">
            <div style={{ width: "98%" }}>
              <div
                className=" shadow rounded-2"
                ref={contentRef}
                style={{ marginTop: "25px", marginBottom: "30px" }}
              >
                <div className=" " ref={ComponentPdf} style={{ width: "100%" }}>
                  <Header
                    profile={profile}
                    profileData={profile?.profile}
                    color={color}
                  />

                  <div className="container">
                    <div className="row  ">
                      <div className="col ">
                        <div className="">
                          <div>
                            {" "}
                            {sections.summary && (
                              <Summary showSummary={edit}  profile={profile} />
                            )}{" "}
                          </div>
                          <div>
                            {sections.experience && (
                              <Experience
                                profile={profile?.id}
                                EditExperince={editExp}
                              />
                            )}
                          </div>
                          <div>
                            {sections.education && (
                              <Education
                                profile={profile?.id}
                                EditEducation={editEdu}
                              />
                            )}
                          </div>
                          <div className="">
                            {sections.certification && (
                              <Certification
                                profile={profile?.id}
                                EditCertification={editCert}
                              />
                            )}
                          </div>
                          {/* <div>
                            {sections.projects && (
                              <Projects EditProject={editpro} />
                            )}
                          </div> */}
                        </div>
                      </div>
                      <div className="col-4  border border-bottom-0 border-right-0 border-top-0">
                        <div>{<EkSathiRefrence profile={profile} />}</div>
                        <div>
                          {sections.socialLinks && (
                            <Social
                              URL={profile?.profile?.social_links?.facebook}
                            />
                          )}
                        </div>

                        <div className="mt-2">
                          {sections.skills && (
                            <Skills
                              skillsData={qualifications}
                              profile={profile?.id}
                            />
                          )}
                        </div>
                        <div className="mt-2">
                          {/* {sections.achievement && (
                            <Achievement EditAchivement={editAchiev} />
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-3 shadow rounded-3"
            style={{ marginTop: "25px", marginBottom: "30px" }}
          >
            <div className="p-2 mt-3  rounded-3">
              <h4 className="font-weight-bold mb-3">Change Theme</h4>
              <div className="">
                <ColorPicker color={color} setColor={setColor} />
              </div>
            </div>
            <div className="p-2 mt-3 rounded-3">
              <div className="">
                <h4 className="font-weight-bold mb-3">Show/Hide Details</h4>
                <div className=" ">
                  <Box sx={{ display: "" }}>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Checkbox
                          label="Summary"
                          color="info"
                          variant="outlined"
                          checked={sections.summary}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              summary: !prevState.summary,
                            }))
                          }
                        />{" "}
                      </div>
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          color="info"
                          onClick={() => {
                            navigate("/setting/profile");
                          }}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Checkbox
                          label="Work Experience"
                          variant="outlined"
                          color="info"
                          checked={sections.experience}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              experience: !prevState.experience,
                            }))
                          }
                        />{" "}
                      </div>
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          color="info"
                          onClick={() => {
                            navigate("/setting/profile/job-profile");
                          }}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Checkbox
                          label="Education"
                          variant="outlined"
                          color="info"
                          checked={sections.education}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              education: !prevState.education,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          color="info"
                          onClick={() => {
                            navigate("/setting/profile/academic-profile");
                          }}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>
                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Checkbox
                          label="Certification"
                          variant="outlined"
                          color="info"
                          checked={sections.certification}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              certification: !prevState.certification,
                            }))
                          }
                        />{" "}
                      </div>
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          color="info"
                          variant="outlined"
                          onClick={() => {
                            navigate("/setting/profile/academic-profile");
                          }}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>
                    {/* <br /> */}
                    {/* <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <Checkbox
                          label="Projects"
                          variant="outlined"
                          checked={sections.projects}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              projects: !prevState.projects,
                            }))
                          }
                        />{" "}
                      </div>
                      <div> */}
                    {/* <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          onClick={EditProject}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button> */}
                    {/* </div> */}
                    {/* </div> */}
                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <Checkbox
                        label="Social Links"
                        variant="outlined"
                        color="info"
                        checked={sections.socialLinks}
                        onChange={() =>
                          setSections((prevState) => ({
                            ...prevState,
                            socialLinks: !prevState.socialLinks,
                          }))
                        }
                      />
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          color="info"
                          onClick={() => {
                            navigate("/setting/profile");
                          }}
                        >
                          <i className="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>

                    <br />
                    <div className="d-flex align-items-center justify-content-between">
                      <Checkbox
                        label="Skills"
                        variant="outlined"
                        color="info"
                        checked={sections.skills}
                        onChange={() =>
                          setSections((prevState) => ({
                            ...prevState,
                            skills: !prevState.skills,
                          }))
                        }
                      />
                      <div></div>{" "}
                      <div>
                        <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          color="info"
                          onClick={() => {
                            navigate("/setting/profile/academic-profile");
                          }}
                        >
                          <i className="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button>
                      </div>
                    </div>
                    {showSkillsInput && (
                      <div className="  ">
                        <h6 className="m-2">Add Skills </h6>
                        <div className="row ">
                          <div className="col ">
                            <div>
                              <Paper
                                component="form"
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  width: 250,
                                }}
                              >
                                <InputBase
                                  sx={{ ml: 1, flex: 1 }}
                                  placeholder="Add Skills"
                                  value={textQ}
                                  onChange={(e) => setTextQ(e.target.value)}
                                />
                                <IconButton
                                  color="primary"
                                  sx={{ p: "3px" }}
                                  aria-label="directions"
                                  onClick={handleClickQ}
                                >
                                  <AddIcon />
                                </IconButton>
                              </Paper>

                              <div>
                                <Grid
                                  container
                                  direction="column"
                                  spacing={1}
                                  sx={{ marginTop: "16px" }}
                                >
                                  {qualifications.map(
                                    (qualification, index) => (
                                      <Grid item key={index}>
                                        <Grid
                                          container
                                          alignItems="center"
                                          spacing={1}
                                        >
                                          <Grid item>
                                            <Button
                                              variant="outlined"
                                              color="info"
                                              onClick={() =>
                                                console.log(
                                                  `Clicked: ${qualification}`
                                                )
                                              }
                                            >
                                              {qualification}
                                            </Button>
                                          </Grid>
                                          <Grid item>
                                            <IconButton
                                              aria-label="delete"
                                              onClick={() =>
                                                handleDeleteQ(qualification)
                                              }
                                            >
                                              {/* Replace this icon with your desired delete icon */}
                                              <DeleteIcon />
                                            </IconButton>
                                          </Grid>
                                        </Grid>
                                      </Grid>
                                    )
                                  )}
                                </Grid>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* <br /> */}
                    <div className="d-flex align-items-center justify-content-between">
                      {/* <div>
                        <Checkbox
                          label="Achievement"
                          variant="outlined"
                          checked={sections.achievement}
                          onChange={() =>
                            setSections((prevState) => ({
                              ...prevState,
                              achievement: !prevState.achievement,
                            }))
                          }
                        />
                      </div> */}
                      <div>
                        {/* <Button
                          className="d-flex align-items-center"
                          size="sm"
                          variant="outlined"
                          onClick={EditAchivement}
                        >
                          <i class="bi bi-pencil-fill"></i>&nbsp; Edit
                        </Button> */}
                      </div>
                    </div>
                    <div>
                      {/* <div className="mt-2">
                        {sections.skills && (
                          <Skills
                            skillsData={skillsData}
                            onDeleteSkill={handleDeleteSkill}
                            showDeleteButton={false}
                          />
                        )}
                      </div> */}
                    </div>
                    {/* </div> */}
                  </Box>
                </div>
              </div>
            </div>
            <Button
              variant="outlined"
              color="info"
              onClick={genratePDF}
              className="mt-5"
              fullWidth
            >
              <i class="bi bi-file-earmark-arrow-down mr-1"></i> Download Resume
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeMaker;

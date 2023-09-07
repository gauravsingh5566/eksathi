import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Avatar from "@mui/material/Avatar";
import Radio from "@mui/joy/Radio";
import Button from "@mui/joy/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import RadioGroup from "@mui/joy/RadioGroup";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Apartment from "@mui/icons-material/Apartment";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/joy/Box";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import JobDetails from "./components/JobDetails";
import ApplyJobModel from "./components/ApplyJobModel";

function ApplyJob() {
  // for subject expert

  const [text, setText] = useState("");
  const [chips, setChips] = useState([]);
  const [showQuickApplyModel, setShowQuickApplyModel] = useState(false);
  const [jobId, setJobId] = useState();


 
  // for qualification

  const [textQ, setTextQ] = useState(""); //
  const [qualifications, setQualifications] = useState([]);

  const handleClickQ = () => {
    if (textQ.trim() !== "") {
      setQualifications((prevQualifications) => [...prevQualifications, textQ]);
      setTextQ("");
    }
  };

  const handleDeleteQ = (qualificationToDelete) => {
    setQualifications((prevQualifications) =>
      prevQualifications.filter(
        (qualification) => qualification !== qualificationToDelete
      )
    );
  };

  // for certification
  const [textCer, setTextCer] = useState("");
  const [certification, setCertification] = useState([]);

  const handleClickCer = () => {
    if (textCer.trim() !== "") {
      setCertification((prevCertification) => [...prevCertification, textCer]);
      setTextCer("");
    }
  };

  const handleDeleteCer = (certificationToDelete) => {
    setCertification((prevCertification) =>
      prevCertification.filter(
        (certification) => certification !== certificationToDelete
      )
    );
  };

  // For Research Paper

  const [textRes, setTextRes] = useState("");
  const [ResearchPaper, setResearchPaper] = useState([]);

  const handleClickRes = () => {
    if (textRes.trim() !== "") {
      setResearchPaper((prevResearchPaper) => [...prevResearchPaper, textRes]);
      setTextRes("");
    }
  };

  const handleDeleteRes = (ResearchPaperToDelete) => {
    setResearchPaper((prevResearchPaper) =>
      prevResearchPaper.filter(
        (ResearchPaper) => ResearchPaper !== ResearchPaperToDelete
      )
    );
  };

  // Upload Resume

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    // Perform file upload logic here, e.g., using axios or fetch API
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      // Send formData to the server or perform the desired upload action
      console.log("Uploading file...", formData);
    } else {
      console.log("No file selected.");
    }
  };
  return (
    <>
      <div className="container p-5">
            <JobDetails   setShowQuickApplyModel={setShowQuickApplyModel} setJobId={setJobId}/>
            <ApplyJobModel  open={showQuickApplyModel} setOpen={setShowQuickApplyModel} jobId={jobId}/>
        {/* <div className="row row-cols-1 row-cols-lg-2 mt-5 mb-5">
          <div className="col ">
          </div>
          <div className="col shadow rounded-4">
            <div className="mt-4 m-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="mt-0 mb-0 ">Application</h4>
                <div className="text-center card
                " style={{height:"80px" }}>
                  <Avatar
                  className="ml-4 m-2"
                    alt="Ek Sathi"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40 }}
                  />{" "}
              
                  <Rating
                    name="size-small"
                    defaultValue={3}
                    size="small"
                    className="mb-0  "
                  />
                </div>
              </div>

              <div className="row row-cols-1 row-cols-lg-2 mt-4 mb-5">
                <div className="col p-2 ">
                  First Name:
                  <Input size="md" placeholder="First Name" />
                </div>
                <div className="col p-2">
                  Last Name:
                  <Input size="md" placeholder="Last Name" />
                </div>
                <div className="col p-2">
                  Email:
                  <Input size="md" placeholder="Email" />
                </div>
                <div className="col p-2">
                  Phone Number
                  <Input size="md" placeholder="Phone Number" />
                </div>
              </div>
            </div>
            <div className="m-3">
              What would you like us to know about You?
              <Textarea
                minRows={6}
                placeholder="Your message"
                className="mt-1"
              />
            </div>
            <div className="m-3 mt-3">
              <h4>Upload File</h4>
              <div className="text-center border border-3 rounded-4 mt-3">
                <p className="mt-4 mb-3">Drop your resume here or Browse</p>
                <input
                  className="border-0 "
                  type="file"
                  onChange={handleFileChange}
                  style={{ border: "none" }}
                />
                <button
                  className="border border-3 rounded-1 mb-5 w-15"
                  onClick={handleFileUpload}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="container mt-4 mb-2">
              <h4 className="mt-2 mb-3 m-2"> Add Subject </h4>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col m-2">
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <IconButton
                        sx={{ p: "10px" }}
                        aria-label="menu"
                      ></IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Add Subject"
                        // inputProps={{ "aria-label": "search google maps" }}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
                        aria-label="directions"
                        onClick={handleClick}
                      >
                        <AddIcon />
                      </IconButton>
                    </Paper>
                    <Stack direction="row" spacing={1} className="mt-3 w-50 ">
                      {chips.map((chip) => (
                        <Chip
                          key={chip}
                          label={chip}
                          variant="outlined"
                          onClick={() => console.log(`Clicked: ${chip}`)} // Add your custom click event handler
                          onDelete={() => handleDelete(chip)}
                          
                        />
                      ))}
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="container mt-4 mb-2 ">
              <h4 className="m-2">Add Qualification </h4>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col m-2">
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <IconButton
                        sx={{ p: "10px" }}
                        aria-label="menu"
                      ></IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Add Qualification"
                        value={textQ}
                        onChange={(e) => setTextQ(e.target.value)}
                      />

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
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
                        {qualifications.map((qualification) => (
                          <Grid item key={qualification}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Button
                                  variant="outlined"
                                  onClick={() =>
                                    console.log(`Clicked: ${qualification}`)
                                  }
                                >
                                  {qualification}
                                </Button>
                              </Grid>
                              <Grid item>
                                <IconButton
                                  aria-label="delete"
                                  onClick={() => handleDeleteQ(qualification)}
                                >
                                  
                                  <DeleteIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="container mt-4 mb-2 ">
              <h4 className="m-2">Add Certification </h4>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col m-2">
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <IconButton
                        sx={{ p: "10px" }}
                        aria-label="menu"
                      ></IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Add Certification"
                        value={textCer}
                        onChange={(e) => setTextCer(e.target.value)}
                      />

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
                        aria-label="directions"
                        onClick={handleClickCer}
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
                        {certification.map((certification) => (
                          <Grid item key={certification}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Button
                                  variant="outlined"
                                  color="danger"
                                  onClick={() =>
                                    console.log(`Clicked: ${certification}`)
                                  }
                                >
                                  {certification}
                                </Button>
                              </Grid>
                              <Grid item>
                                <IconButton
                                  // color="primary"
                                  aria-label="delete"
                                  onClick={() => handleDeleteCer(certification)}
                                >
                                 
                                  <DeleteIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="container mt-4 mb-2 ">
              <h4 className="m-2">Add Research Papers </h4>
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col m-2">
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <IconButton
                        sx={{ p: "10px" }}
                        aria-label="menu"
                      ></IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Add Research Papers"
                        value={textRes}
                        onChange={(e) => setTextRes(e.target.value)}
                      />

                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        sx={{ p: "10px" }}
                        aria-label="directions"
                        onClick={handleClickRes}
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
                        {ResearchPaper.map((ResearchPaper) => (
                          <Grid item key={ResearchPaper}>
                            <Grid container alignItems="center" spacing={1}>
                              <Grid item>
                                <Button
                                  variant="outlined"
                                  color="warning"
                                  onClick={() =>
                                    console.log(`Clicked: ${ResearchPaper}`)
                                  }
                                >
                                  {ResearchPaper}
                                </Button>
                              </Grid>
                              <Grid item>
                                <IconButton
                                  // color="primary"
                                  aria-label="delete"
                                  onClick={() => handleDeleteRes(ResearchPaper)}
                                >
                                  
                                  <DeleteIcon />
                                </IconButton>
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="text-start m-3 mt-4 mb-5">
              <h6>How much experience do you have?</h6>
              <div className="row mt-4">
                <div className="col">
                  <Select
                    placeholder="Select a School"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="dog">Greenfield Elementary School</Option>
                    <Option value="cat">Maplewood Middle School</Option>
                    <Option value="fish">Oakridge High School</Option>
                    <Option value="bird">Sunnydale Academy</Option>
                  </Select>
                </div>
                <div className="col">
                  <Select
                    placeholder="Select Years experience "
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="dog">0-2 years</Option>
                    <Option value="cat">2-5 years</Option>
                    <Option value="fish">+5 years</Option>
                  </Select>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <Select
                    placeholder="Select a Designation"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="dog">Teacher</Option>
                    <Option value="cat">Principal</Option>
                    <Option value="fish">Librarian</Option>
                    <Option value="bird">School Counselor</Option>
                  </Select>
                </div>
                <div className="col">
                  <Select
                    placeholder="Select Class Tought"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="dog">1to5</Option>
                    <Option value="cat">1to10</Option>
                    <Option value="fish">5to10</Option>
                    <Option value="bird">5to12</Option>
                  </Select>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="">
              <h4 className="m-4 mb-2">Employment Type</h4>
              <div className="col m-2 mb-3">
                <Select
                  placeholder="Select Years experience "
                  indicator={<KeyboardArrowDown />}
                  sx={{
                    width: 240,
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="dog">Part Time</Option>
                  <Option value="cat">Full Time</Option>
                  <Option value="fish">Guest Lecture</Option>
                </Select>
              </div>
            </div>
            <div className="m-4">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 400,
                }}
              >
                <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Add Reference"
                />

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Paper>
            </div>

            <div className="text-center mb-3 mt-3">
              <Button component="a" href="#as-link">
                Apply
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ApplyJob;

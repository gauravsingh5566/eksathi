import React, { useEffect, useState } from "react";
// import Modal from "@mui/joy/Modal";
import Textarea from "@mui/joy/Textarea";
import RadioGroup from "@mui/joy/RadioGroup";
import Input from "@mui/joy/Input";
import { Link } from "react-router-dom";
import { Modal, Form } from "react-bootstrap";
import Radio from "@mui/joy/Radio";
import JobCard from "./components/JobCard";
import Button from "@mui/joy/Button";
import { useGlobalContext } from "global/context";

const Careers = () => {
  const { api, OnboardingData, userData } = useGlobalContext();
  // const isLoggedIn = !!OnboardingData?.name && !!userData?.name;
  const [categorized, setCategorized] = useState([]);
  const [locationdata, setlocationdata] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [showModalForm, setShowForm] = useState(false);

  const handleCloseForm = () => setShowForm(false);
  const handleShowForm = () => setShowForm(true);

  const [selectedFile, setSelectedFile] = useState(null);
  const [allJobs, setAllJobs] = useState([]);
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

  const getAllJobs = async () => {
    try {
      const res = await api.get(`/app/jobs/post`);
      if (res?.status === 200) {
        console.log("Job was successfully Fetchech: ", res?.data?.results);
        setAllJobs(res?.data?.results);
      }
    } catch (err) {
      console.log("Error getting jobs", err);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);
  const getJobs = async () => {
    try {
      const res = await api.get(`/app/jobs/categorized`);
      if (res?.status === 200) {
        console.log(
          "Job was successfully Fetchech: ",
          res?.data?.groupedJobDescriptions
        );
        setCategorized(res?.data?.groupedJobDescriptions);
      }
    } catch (err) {
      console.log("Error getting jobs", err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      <div>
        <div
          className="container mt-lg-2 mb-5 p-5 position-relative bg-light shadow rounded rounded-sm-0 "
          style={{
            backgroundImage: "linear-gradient(45deg, #472fcb, #00a4a5)",
          }}
        >
          <h1 className="fs-60 fw-bold mb-3 text-center text-white">
            {" "}
            Start doing work that matters{" "}
          </h1>
          <h5 className="fs-25 font-weight-bold text-bold mb-3 text-center text-white">
            Our philosophy is simple - hire a team of diverse, passionate people
            <br></br>
            and foster a culture that empowers you to do your best work.{" "}
          </h5>
          <div className="d-flex align-items-end justify-content-center">
            {userData?.role === "institute" && (
              <div className="text-right me-4 top-0 m-2">
                <Link
                  to="/careers/post"
                  className="btn border-2 theme-btn bg-light text-dark rounded border me-4 font-weight-bold"
                >
                  Post a Job
                </Link>
              </div>
            )}
            {userData?.role != "institute" && (
              <div className="text-right me-4 top-0 m-2">
                <Link
                  to="/careers/dashboard"
                  className="btn border-2 theme-btn bg-light text-dark rounded border me-4 font-weight-bold"
                >
                  Career Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>

        {categorized.length ? (
          <>
            {categorized?.map((category) => (
              <div className="container mt-5 " key={category?.categoryId}>
                <div className="row flex-column">
                  <div className="col mb-4 ">
                    <h5 className="font-weight-bold">
                      {category?.categoryName}
                    </h5>
                    <p className="font-weight-bold">
                      {category?.categoryDescription}
                    </p>
                  </div>
                  <div className="col">
                    <div className="row row-cols-1 row-cols-lg-4">
                      {category?.jobDescriptions?.map((job) => (
                        <>
                          <div className="col" key={job?.id}>
                            <JobCard jd={job} jobs={allJobs} />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1
              className="text-center mt-5 fw-bold text-secondary"
              style={{ fontSize: "10vh" }}
            >
              Sorry!
            </h1>
            <h1 className="text-center mb-5 fw-bold text-secondary">
              No openings right now
            </h1>
          </>
        )}

        {/* <div className="container-fluid">
        <img
          className="w-100"
          src="https://img.freepik.com/free-photo/corporate-woman-businesswoman-holding-clipboard-with-documents-office-smiling-camera-white-background_1258-123217.jpg?w=1380&t=st=1684934332~exp=1684934932~hmac=1c3e8f6628baa5bab6283ee81fab9f7193b4a41e3a6cdc354bd8cae6c339f99c"
          alt= "BeautyFull Girl"/>
        </div> */}

        <div className="container mt-5 mb-5 ">
          <div
            className="row row-cols-1 border rounded-4 row-cols-lg-2  text-white p-5 shadow  rounded-sm-0 "
            style={{
              backgroundImage: "linear-gradient(45deg, #472fcb, #00a4a5)",
            }}
          >
            <div className="col mb-3 p-4 mb-sm-0 ">
              <h5 className="font-weight-bold mb-5 mt-5 fs-40 text-white">
                {" "}
                Don't see the role you're interested in? Specify your preferred
                job type in the form provided.
              </h5>
            </div>
            <div className="col ">
              <div className="text-right mb-5 mt-5  p-3">
                <Button onClick={handleShow} variant="soft" size="lg">
                  Request Us{" "}
                  <i className="la text-dark la-arrow-right icon ml-1" />
                </Button>
                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header className="text-dark">
                    <Modal.Title>
                      We'll update you on relevant job openings
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Full Name :</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your Full Name"
                        />
                      </Form.Group>{" "}
                      <br></br>
                      <Form.Group>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control
                          type="address"
                          placeholder="Enter your Address"
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group>
                        <Form.Label>Phone number:</Form.Label>
                        <Form.Control
                          type="tel"
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group controlId="position">
                        <Form.Label>Desired Position:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your desired position"
                        />
                      </Form.Group>{" "}
                      <br></br>
                      <Form.Group>
                        <Form.Label>Preferred Work Location:</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your preferred work location"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Send message</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;

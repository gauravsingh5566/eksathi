import { Avatar, Box, Button, Chip, Modal, ModalDialog } from "@mui/joy";
import {
  IconButton,
  SwipeableDrawer,
  // SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGlobalContext } from "global/context";
import { useEffect } from "react";
import FastForwardIcon from "@mui/icons-material/FastForward";
import JobDetails from "./JobDetails";
import CoverLaterDetail from "./CoverLaterDetail";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import moment from "moment";
const data = [
  {
    id: 2,
    name: "IT Trainer",
    image:
      "https://img.freepik.com/free-photo/woman-summer-field-brunette-brown-sweater_1157-39325.jpg?w=740&t=st=1691589237~exp=1691589837~hmac=838bf1b5c46b4c45f9938e106ab6c42e1e9da4e397beaf31959c4d2fafc17607",
    phone: 9876543210,
    Specialization: "Physics",
    email: "jennifer@example.com",
    date: "09/18/2023",
    Employeement: "Full-Time",
    status: "Denied",
  },
  {
    id: 3,
    name: "Programming Educator ",
    image:
      "https://img.freepik.com/free-photo/mother-with-daughter-playing-autumn-field_1157-25390.jpg?t=st=1691589237~exp=1691589837~hmac=0d157f4ede0a4cbdde0fdece63626a0857dd8cf4bdd6851f0245d8c8a60dacbe",
    phone: 1234567890,
    Specialization: "Chemistry",
    email: "alex@example.com",
    date: "01/15/2023",
    Employeement: "Guest Lecturer",
    status: "Interview",
  },
  {
    id: 4,
    name: "Coding Teacher",
    image:
      "https://img.freepik.com/free-photo/beautiful-stylish-couple-field-with-sunflowers_1157-25972.jpg",
    phone: 5647382910,
    Specialization: "Biology",
    email: "emily@example.com",
    date: "01/15/2023",
    Employeement: "Part-Time",
    status: "Denied",
  },
  {
    id: 5,
    name: "Computer Literacy Instructor",
    image:
      "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043955.jpg?t=st=1691672875~exp=1691673475~hmac=9c78e61630171579f3b69bc61e96091139b06b9d3e95ea7362bb25fb1ca9d591",
    phone: 8765432109,
    Specialization: "History",
    email: "robert@example.com",
    date: "09/18/2023",
    Employeement: "Guest Lecturer",
    status: "Denied",
  },
  {
    id: 6,
    name: "Software Development Mentor",
    image:
      "https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?w=1380&t=st=1691672897~exp=1691673497~hmac=448eb464f23144dfbfa81bfb382b84997bd5f855933623384f5794da2b6144ef",
    phone: 6574839201,
    Specialization: "English",
    email: "sophia@example.com",
    date: "01/15/2023",
    Employeement: "Full-Time",
    status: "Interview",
  },
  {
    id: 7,
    name: "Computer Skills Coach",
    image:
      "https://img.freepik.com/free-photo/closeup-photo-young-beautiful-lady-standing-white-background_114579-92756.jpg?w=740&t=st=1691672902~exp=1691673502~hmac=4ecf42ba671c868196268a91bd9a650db96f111c43b5e18337fa4f7d713a8b48",
    phone: 9870123456,
    Specialization: "Computer Science",
    email: "daniel@example.com",
    date: "09/18/2023",
    Employeement: "Guest Lecturer",
    status: "Denied",
  },
  {
    id: 8,
    name: "Technology Education Specialist",
    image:
      "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=996&t=st=1691672910~exp=1691673510~hmac=6125b3042a260694324d657ee8113c474422b8fe98086c06dea70a1b94fde7c4",
    phone: 4567890123,
    Specialization: "Psychology",
    Employeement: "Part-Time",
    email: "isabella@example.com",
    date: "01/15/2023",
    Employeement: "Full-Time",
    status: "Interview",
  },
];
function EmployeeDashboard() {
  const [openApplication, setopenApplication] = useState(false);
  const { api, userData } = useGlobalContext();
  const [appliedJobs, setAppliedJobs] = useState([]);

  const getAppliedJobs = async () => {
    api.get(`/app/jobs/applied/${userData?.id}`)
      .then((res) => {
        console.log("Applied Jobs", res);
        setAppliedJobs(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getAppliedJobs();
  }, []);

  return (
    <div className="">
      <div className="">
        <TableContainer component={Paper} className="rounded-4">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "rgb(133 0 255 / 17%)" }}>
              <TableRow>
                <TableCell>
                  {" "}
                  <h6 className="font-weight-bold">Apply For</h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Employment Type</h6>
                </TableCell>
                {/* <TableCell align="center">
                  <h6 className="font-weight-bold"></h6>
                </TableCell> */}
                <TableCell align="center">
                  <h6 className="font-weight-bold">Status</h6>
                </TableCell>

                <TableCell align="start">
                  <h6 className="font-weight-bold">Apply Date</h6>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appliedJobs.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className="d-flex align-items-center">
                      <div>
                        <Avatar
                          alt={item?.job_descriptions?.job_title}
                          src={item?.job_descriptions?.institutes?.logo}
                          sx={{ width: "40px", height: "40px" }}
                        />{" "}
                      </div>
                      <div className="ml-2 fs-15 font-weight-bold">
                        {item?.job_descriptions?.job_title}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Chip
                      variant="soft"
                      color="neutral"
                      className="font-weight-bold"
                      style={{ color: "#5f35ae" }}
                      size="sm"
                    >
                      {item?.job_descriptions?.employment_type[0]}
                    </Chip>
                  </TableCell>
                  {/* <TableCell align="center">
                    <div>
                      <Button
                        variant="soft"
                        color="warning"
                        size="sm"
                        className="text-center m-3 "
                        style={{ fontSize: "10px" }}
                        onClick={() => {
                          setopenApplication(true);
                        }}
                      >
                        {"View Application"}
                      </Button>
                      <Modal
                        open={openApplication}
                        onClose={() => setopenApplication(false)}
                      >
                        <ModalDialog
                          variant="outlined"
                          role="alertdialog"
                          aria-labelledby="alert-dialog-modal-title"
                          aria-describedby="alert-dialog-modal-description"
                          sx={{
                            minWidth: 500,
                          }}
                        >
                          <CoverLaterDetail />
                        </ModalDialog>
                      </Modal>
                    </div>
                  </TableCell> */}

                  <TableCell align="center">
                    <Chip
                      variant="soft"
                      color={
                        item?.status === "Interview"
                          ? "success"
                          : item?.status === "Denied"
                            ? "danger"
                            : "neutral"
                      }
                      className="fw-bold text-capitalize"
                    >
                      {item?.status}
                    </Chip>
                  </TableCell>
                  <TableCell align="center">
                    <p className="font-weight-bold">{moment(item?.createdAt).format('ll')}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default EmployeeDashboard;

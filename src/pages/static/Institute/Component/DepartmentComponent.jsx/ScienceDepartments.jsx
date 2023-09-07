import React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { Avatar, Box, Button, Chip, Table } from "@mui/joy";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
} from "@mui/material";
const initialTeachersData = [
  {
    teacherName: "Shivam",
    subject: "Science",
    email: "sadhh@gmail.com",
    phoneNumber: "9788975",
    action: "Invite",
  },
  {
    teacherName: "Sophia",
    subject: "Science",
    email: "sophia@gmail.com",
    phoneNumber: "7654321",
    action: "Invite",
  },

  {
    teacherName: "Sophia",
    subject: "Science",
    email: "sophia@gmail.com",
    phoneNumber: "7654321",
    action: "Invite",
  },
];
function ScienceDepartments() {
  const [open, setOpen] = useState(false);
  const [teachersData, setTeachersData] = useState(initialTeachersData);
  const [newTeacher, setNewTeacher] = useState({
    teacherName: "",
    subject: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTeacher((prevTeacher) => ({ ...prevTeacher, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeachersData((prevData) => [...prevData, newTeacher]);
    setNewTeacher({
      teacherName: "",
      subject: "",
      email: "",
      phoneNumber: "",
    });
    setOpen(false);
  };
  return (
    <div>
      <div className="rounded-3   p-3">
        <div className=" p-2 d-flex align-items-center justify-content-between">
          <Button
            className="font-weight-bold shadow-sm p-2  rounded-2  "
            variant="soft"
            color="info"
            desabled
            // sx={{ backgroundColor: "rgba(25,103,210,.1)" }}
          >
            Science Department
          </Button>

          <Button
            variant="outlined"
            color="neutral"
            startDecorator={<Add />}
            onClick={() => setOpen(true)}
            sx={{ backgroundColor: "rgba(25,103,210,.1)" }}
          >
            New Teacher
          </Button>

          <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog
              aria-labelledby="basic-modal-dialog-title"
              aria-describedby="basic-modal-dialog-description"
              sx={{ maxWidth: 500 }}
            >
              <Typography id="basic-modal-dialog-title" level="h2">
                Create new project
              </Typography>

              <form onSubmit={handleSubmit}>
                <Stack spacing={1}>
                  <FormControl>
                    <FormLabel>Teacher Name</FormLabel>
                    <Input
                      variant="soft"
                      autoFocus
                      required
                      name="teacherName"
                      value={newTeacher.teacherName}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Specialization</FormLabel>
                    <Input
                      variant="soft"
                      required
                      name="subject"
                      value={newTeacher.subject}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      variant="soft"
                      required
                      name="email"
                      value={newTeacher.email}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormControl className="mb-2">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      variant="soft"
                      required
                      name="phoneNumber"
                      value={newTeacher.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <Button variant="outlined" color="info" type="submit">
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        </div>
        <div>
          <div className="p-2">
            {/* <h3 className="mb-2 mt-2 font-weight-bold">Teachers</h3> */}
            <div className="p-1">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "rgba(25,103,210,.1)" }}>
                    <TableRow
                      key="header-row"
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                        // backgroundColor: "red",
                      }}
                    >
                      <TableCell sx={{ backgroundColor: "red" }}>
                        {" "}
                        <h6 className="font-weight-bold">Teachers Name</h6>
                      </TableCell>
                      <TableCell align="center">
                        <h6 className="font-weight-bold">Specialization</h6>
                      </TableCell>

                      <TableCell align="center">
                        <h6 className="font-weight-bold">Email</h6>
                      </TableCell>

                      <TableCell align="center">
                        <h6 className="font-weight-bold">Phone Number</h6>
                      </TableCell>
                      <TableCell align="center">
                        <h6 className="font-weight-bold">Action</h6>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {teachersData.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <div className="d-flex align-items-center">
                            <div></div>
                            <div className="ml-3 fs-15 font-weight-bold">
                              {item?.teacherName}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="start">
                          {" "}
                          <Chip
                            variant="soft"
                            color="info"
                            className="text-dark font-weight-bold"
                          >
                            {item.subject}
                          </Chip>
                        </TableCell>

                        <TableCell align="start">
                          {" "}
                          <p className="">{item.email}</p>
                        </TableCell>

                        <TableCell align="start">
                          <h6>{item?.phoneNumber} </h6>
                        </TableCell>
                        <TableCell align="start">
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <Button color="info" variant="outlined" size="sm">
                              {item?.action}
                            </Button>
                            {/* <Button variant="outlined">{item?.phone}</Button> */}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScienceDepartments;

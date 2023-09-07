import { Avatar, Box, Button, Chip } from "@mui/joy";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function ApplicationData({view}) {
 
 
  
  const data = [
    {
      id: 1,
      name: "Shivam Tiwari",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Ui Designer",
      location: "London, UK",
      skills: ["Node JS", "React", "CSS"],
    },
    {
      id: 2,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 3,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 5,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 6,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 7,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 8,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 9,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 10,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 11,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 12,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/blink-camera-through-fingers-embarrassed-covering-face_1187-278661.jpg",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
  ];
  return (
    <div className="" style={{userSelect:"none"}}>
      {/* <div className="view-toggle mb-2 p-1 d-flex align-items-center justify-content-end">
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleViewChange}
          aria-label="view toggle group"
        >
          <ToggleButton value="grid">Grid View</ToggleButton>
          <ToggleButton value="list">List View</ToggleButton>
        </ToggleButtonGroup>
      </div> */}
      {view === false && (
        <div className="row g-3  p-3 row-cols-1 row-cols-lg-3">
          {data.map((item, index) => (
            <div key={index} className="shadow-sm rounded mb-2" >
              <div className="d-flex align-items-center justify-content-center">
                <Avatar
                  alt={item?.name}
                  src={item?.image}
                  sx={{ width: "110px", height: "110px" }}
                />
              </div>
              <div className="">
                <h4 className="mb-2 d-flex align-items-center justify-content-center">
                  {item?.name}
                </h4>
                <div className="mb-1 d-flex align-items-center justify-content-center">
                  <h6>
                    <i className="bi bi-cash"></i>&nbsp;${item?.hourlyRate} /
                    hour
                  </h6>
                </div>
                <div className="mb-2 d-flex align-items-center justify-content-center">
                  <p className="text-primary font-weight-bold">{item.role}</p>
                  <p className="ml-3">
                    <i className="bi bi-geo-alt"></i> {item?.location}
                  </p>
                </div>
                <div className="mb-2 d-flex align-items-center justify-content-center">
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {item?.skills?.map((skill, index) => (
                      <Chip variant="soft" key={index}>
                        {skill}
                      </Chip>
                    ))}
                  </Box>
                </div>
              </div>
              <div className="p-1 d-flex align-items-center justify-content-center">
                <div>
                  <IconButton>
                    <VisibilityIcon className="fs-20" />
                  </IconButton>
                  <IconButton>
                    <CheckIcon className="fs-20" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon className="fs-20" />
                  </IconButton>
                  <IconButton>
                    <HighlightOffIcon className="fs-20" />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {view === true && (
        <div className="p-1">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "rgba(25,103,210,.1)" }}>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={item?.image}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="d-flex align-items-center">
                        <div>
                          <Avatar
                            alt={item?.name}
                            src={item?.image}
                            sx={{ width: "70px", height: "70px" }}
                          />{" "}
                        </div>
                        <div className="ml-3 fs-15 font-weight-bold">{item?.name}</div>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      <p className="text-primary font-weight-bold">
                        {item.role}
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <p className="">
                        <i className="bi bi-geo-alt"></i> {item?.location}
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <h6>
                        <i className="bi bi-cash"></i>&nbsp;${item?.hourlyRate}{" "}/hour
                      </h6>
                    </TableCell>
                    <TableCell align="center">
                      <div className="mb-2 d-flex align-items-center justify-content-center">
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          {item?.skills?.map((skill, index) => (
                            <Chip variant="soft" key={index} color="success">
                              {skill}
                            </Chip>
                          ))}
                        </Box>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div>
                        <IconButton>
                          <VisibilityIcon className="fs-17" />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon className="fs-17" />
                        </IconButton>
                        <IconButton>
                          <CreateIcon className="fs-17" />
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default ApplicationData;

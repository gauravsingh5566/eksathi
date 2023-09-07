import { Avatar, Box, Chip } from "@mui/joy";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TableContainer from "@mui/material/TableContainer";
import { useState } from "react";
function ApplicantsData({view}) {
 
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
        "https://img.freepik.com/free-photo/closeup-tender-cute-pretty-african-american-curlyhaired-woman-yellow-sweater-stretchin-hands-forward-smiling-gazing-camera-with-love-care-give-hug-cuddle-friend_176420-50617.jpg?w=1380&t=st=1691236249~exp=1691236849~hmac=d65ff26a159480166385d6d21da4ed5012fb28bdcdf5370166eff24d205bd4b5",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 3,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/young-caucasian-handsome-man-isolated-white-background-keeping-arms-crossed-frontal-position_1368-339239.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
    {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    }, {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    }, {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    }, {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    }, {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    }, {
      id: 4,
      name: "Sophia Davis",
      image:
        "https://img.freepik.com/premium-photo/grizzled-guy-white-shirt-grizzled-guy-style-studio-shot-grizzled-guy-mature-grizzled-guy_474717-87810.jpg?w=1380",
      hourlyRate: 44,
      role: "Developer",
      location: "London, UK",
      skills: ["Node JS", "React", "MongoDB"],
    },
  ];
  return (
    <div className="" style={{userSelect:"none"}}>
       {view === false &&  (
        <div className="p-0">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "rgba(25,103,210,.1)" }}>
                <TableRow>
                <TableCell>
                  {" "}
                  <h6 className="font-weight-bold">Name</h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Job Role</h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Address </h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Rate </h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Skill</h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Action</h6>
                </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow
                    key={item?.image}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div className="d-flex align-items-center p-0">
                        <div>
                          <Avatar
                            alt={item?.name}
                            src={item?.image}
                            sx={{ width: "70px", height: "70px" }}
                          />{" "}
                        </div>
                        <div className="ml-3 fs-15 font-weight-bold">
                          {item?.name}
                        </div>
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
                        <i className="bi bi-cash"></i>&nbsp;${item?.hourlyRate}{" "}
                        /hour
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
      {view === true &&(
        <div className="row g-3 row-cols-1 row-cols-lg-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-sm mb-3  d-flex rounded p-4 align-items-center justify-content-between "
            >
              <div className=" ">
                <Avatar
                  alt={item?.name}
                  src={item?.image}
                  sx={{ width: "130px", height: "130px" }}
                />
              </div>
              <div className="ml-3">
                <h4 className="">{item?.name}</h4>
                <div className="d-flex align-content-center justify-content-arround">
                  <p className="text-primary font-weight-bold">{item.role}</p>
                  <p className="ml-3">
                    <i className="bi bi-geo-alt"></i> {item?.location}
                  </p>
                </div>
                <div className="m-1">
                  <h6>
                    <i className="bi bi-cash"></i>&nbsp;${item?.hourlyRate} /
                    hour
                  </h6>
                </div>
                <div className="mt-3">
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
              <div className="ml-3">
                <div>
                  <IconButton>
                    <VisibilityIcon className="fs-17" />
                  </IconButton>
                  <IconButton>
                    <CheckIcon className="fs-17" />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon className="fs-17" />
                  </IconButton>
                  <IconButton>
                    <HighlightOffIcon className="fs-17" />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
     
    </div>
  );
}

export default ApplicantsData;

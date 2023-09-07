import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import {
  Avatar,
  Button,
  Input,
  Modal,
  ModalClose,
  Sheet,
  ListItemDecorator,
  ListDivider,
  Box,
} from "@mui/joy";
import { Chip } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { DeleteForever, MoreVert } from "@mui/icons-material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AppliCantsDetail from "./AppliCantsDetail";
import { useGlobalContext } from "global/context";
import { toast } from "react-hot-toast";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";

function Applications({ Title }) {
  const navigate = useNavigate(); 
  const location = useLocation();
  const { api, userData } = useGlobalContext();
  const { title } = useParams();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = useState(Boolean(anchorEl));
  const [data, setData] = useState();
  const [openmodal, setOpenmodal] = React.useState(false);

  const getApplications = async () => {
    await api
      .get(`/app/jobs/applications/${location?.state?.id}`)
      .then((res) => {
        if (res?.status === 200) {
          console.log("Applications Found: ", res?.data);
          setData(res.data);
        }
      })
      .catch((err) => {
        toast.error("Error getting applications");
      });
  };

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOpen(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(null);
  };

  const handleDelete = (id) => {
    const updatedData = data?.filter((item) => item?.id !== id);
    setData(updatedData);
  };

  const handleStatus = (id, status) => {
    api
      .put(`/app/jobs/application/status/${id}`, {
        newStatus: status,
      })
      .then((res) => {
        if (res?.status === 200) {
          getApplications();
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error updating status of application");
      });
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <div className="p-2">
      <div className="row mb-4 p-2">
        <div className=" col d-flex align-items-center justify-content-arround">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosRoundedIcon className="text-dark" />
          </IconButton>
          <h4 className="  font-weight-bold ">{location?.state?.title}</h4>
        </div>
        <div className="form col  d-flex align-items-center justify-content-between ">
          <Input
            fullWidth
            placeholder="Type in here…"
            variant="outlined"
            sx={{ width: "100%" }}
            endDecorator={<SearchIcon />}
          />

          {/* <div className="d-flex align-items-center ml-3 ">
            <IconButton
              id="positioned-demo-button"
              aria-controls={open ? "positioned-demo-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? true : undefined}
              variant="plain"
              color="neutral"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              aria-labelledby="basic-demo-button"
              placement="bottom-end"
            >
              <MenuItem onClick={handleClose}>Select All</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
              <MenuItem onClick={handleClose}>Update Status</MenuItem>
            </Menu>
          </div> */}
        </div>
      </div>
      <div className="">
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
                  <h6 className="font-weight-bold">Email </h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Phone </h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Status</h6>
                </TableCell>
                <TableCell align="center">
                  <h6 className="font-weight-bold">Action</h6>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <TableRow
                  key={item?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div
                      className="d-flex align-items-center"
                      onClick={() =>
                        navigate(
                          `/institute/jobs/Applications/applicant/${item?.users?.username}`,
                          {
                            state: {
                              id: item?.id,
                              status: item?.status,
                            },
                          }
                        )
                      }
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <div>
                        <Avatar
                          alt={
                            item?.users?.first_name +
                            " " +
                            item?.users?.last_name
                          }
                          src={item?.users?.avatar_url}
                          sx={{ width: "46px", height: "46px" }}
                        />{" "}
                      </div>
                      <div className="ml-2 fs-15 font-weight-bold">
                        {item?.users?.first_name} {item?.users?.last_name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <p className="text-primary text-capitalize font-weight-bold">
                      {item?.users?.role}
                    </p>
                  </TableCell>
                  <TableCell align="center">
                    <p className="">{item?.users?.email}</p>
                  </TableCell>
                  <TableCell align="center">
                    <p className="">{item?.users?.phone}</p>
                  </TableCell>
                  {/* <TableCell align="center">
                    <h6>
                      <i className="bi bi-cash"></i>&nbsp;${item?.hourlyRate}{" "}
                      /hour
                    </h6>
                  </TableCell> */}
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
                        <Chip
                          variant="soft"
                          // color="success"
                          color={
                            item?.status === "hired"
                              ? "success"
                              : item?.status === "hold"
                              ? "warning"
                              : item?.status === "in-progress"
                              ? "info"
                              : item?.status === "rejected"
                              ? "danger"
                              : "neutral"
                          }
                        >
                          {item?.status}
                        </Chip>
                      </Box>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    <div>
                      <Box sx={{ gap: 2 }}>
                        <Tooltip title="View Application" variant="outlined" color="secondary">
                          <IconButton>
                            <VisibilityIcon
                              onClick={() =>
                                navigate(
                                  `/institute/jobs/Applications/applicant/${item?.users?.username}`,
                                  {
                                    state: {
                                      id: item?.id,
                                      status: item?.status,
                                    },
                                  }
                                )
                              }
                              className="fs-17"
                            />
                          </IconButton>
                        </Tooltip>{" "}
                        &nbsp;
                        {/* <Tooltip title="Delete" variant="outlined" color="error">
                          <IconButton onClick={() => handleDelete(item?.id)}>
                            <DeleteIcon className="fs-17" />
                          </IconButton>
                        </Tooltip>{" "} */}
                        &nbsp;
                        <IconButton
                          aria-controls={
                            open === item?.id
                              ? "positioned-demo-menu"
                              : undefined
                          }
                          aria-haspopup="true"
                          aria-expanded={open}
                          variant="plain"
                          color="neutral"
                          onClick={(event) => handleClick(event, item?.id)}
                        >
                          <MoreVert className="fs-17" />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open === item?.id}
                          onClose={handleClose}
                          aria-labelledby="basic-demo-button"
                          placement="bottom-end"
                        >
                          <MenuItem
                            onClick={() => handleStatus(item?.id, "reviewed")}
                          >
                            Sortlisted
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleStatus(item?.id, "in-progress");
                            }}
                          >
                            In Progress
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleStatus(item?.id, "hold");
                            }}
                          >
                            On Hold
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleStatus(item?.id, "hired");
                            }}
                          >
                            Hired
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleStatus(item?.id, "rejected");
                            }}
                          >
                            Rejected
                          </MenuItem>
                        </Menu>
                      </Box>
                    </div>
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

export default Applications;

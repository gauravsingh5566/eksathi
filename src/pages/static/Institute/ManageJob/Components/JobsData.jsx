import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar, Box, Button, Chip } from "@mui/joy";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "global/context";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { SubjectRounded } from "@mui/icons-material";
function createData(id, image, Title, Application, Time, status, Action) {
  return { id, image, Title, Application, Time, status, Action };
}

// const rows = [
//   createData(
//     1,
//     "https://img.freepik.com/free-vector/gradient-car-dealer-logo-template_23-2149343860.jpg?w=740&t=st=1691833841~exp=1691834441~hmac=f411b3e09b9d3ffdac1d3f669cdeb1b20d1d51ca6c944bdf5ba30ed93b9364f6",
//     "Software Engineer ",
//     159,
//     6.0,
//     "Active",
//     4.0
//   ),
//   createData(
//     2,
//     "https://img.freepik.com/premium-vector/gradient-logo-template-with-abstract-shape_23-2148211716.jpg?w=740",
//     "Recruiting Coordinator",
//     237,
//     9.0,
//     "Expired",
//     4.3
//   ),
//   createData(
//     3,
//     "https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-239.jpg?w=1380&t=st=1691736091~exp=1691736691~hmac=8834522b003564ae0864894ea769b4e9b507153798303fa74532939eab01b2ae",
//     "Product Manager, Studio",
//     262,
//     16.0,
//     "Active",
//     6.0
//   ),
//   createData(
//     4,
//     "https://www.freepik.com/free-vector/gradient-abstract-logo_4408543.htm#query=company%20logo&position=22&from_view=search&track=ais",
//     "Senior Product Designer",
//     305,
//     3.7,
//     "Active",
//     4.3
//   ),
//   createData(
//     5,
//     "https://as1.ftcdn.net/v2/jpg/01/32/67/54/1000_F_132675456_2I1T2Qo0g1fd3o5pUpPv59RUrCH5sbWl.jpg",
//     "Gingerbread",
//     356,
//     16.0,
//     "Expired",
//     3.9
//   ),
//   createData(
//     6,
//     "https://img.freepik.com/free-vector/gradient-abstract-logo_52683-8517.jpg?w=740&t=st=1691833861~exp=1691834461~hmac=aba0a8feac9e5721e9eeebfa93d34ce4b73a34784d63665798ee31a8a561c980",
//     "Software Engineer (Android)",
//     356,
//     16.0,
//     "Expired",
//     3.9
//   ),
//   createData(
//     7,
//     "https://img.freepik.com/premium-photo/young-hispanic-woman-isolated-pink-background-making-phone-gesture-call-me-back-sign_1368-419577.jpg?w=1380",
//     "Recruiting Coordinator",
//     356,
//     16.0,
//     "Expired",
//     3.9
//   ),
//   createData(
//     8,
//     "https://img.freepik.com/premium-photo/young-hispanic-woman-isolated-pink-background-making-phone-gesture-call-me-back-sign_1368-419577.jpg?w=1380",
//     "Gingerbread",
//     356,
//     16.0,
//     "Expired",
//     3.9
//   ),
// ];

export default function JobsData() {
  const { api, userData } = useGlobalContext();
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const getJobs = async () => {
    try {
      const res = await api.get(`/app/jobs/post?instituteId=${userData?.id}`);
      if (res?.status === 200) {
        console.log("Jobs were successfully Fetched: ", res?.data?.results);
        setJobs(res?.data?.results);
      }
    } catch (err) {
      console.log("Error getting jobs", err);
    }
  };

  const handleDeleteJob = async (id) => {
    try {
      const res = await api.delete(`jobs/app/jobs/${id}`);
      if (res?.status === 200) {
        console.log("Job deleted successfully");
        toast.success("Job deleted successfully");
        // Update the state to remove the deleted job
        setJobs((prevJobs) => prevJobs.filter((jobs) => jobs?.id !== id));
      }
    } catch (err) {
      console.log("Error deleting job", err);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  // const [expandedRows, setExpandedRows] = useState({});
  // const toggleRowExpansion = (title) => {
  //   setExpandedRows((prevState) => ({
  //     ...prevState,
  //     [title]: !prevState[title],
  //   }));
  // };

  return (
    <TableContainer className="rounded shadow-sm">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "rgb(133 0 255 / 17%)" }}>
          <TableRow>
            <TableCell>
              {" "}
              <h6 className="font-weight-bold">Title</h6>
            </TableCell>
            <TableCell align="center">
              <h6 className="font-weight-bold">Applications</h6>
            </TableCell>
            <TableCell align="center">
              <h6 className="font-weight-bold">Created & Expired </h6>
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
          {jobs.map((item, index) => (
            <React.Fragment key={item?.Title}>
              <TableRow
                key={item?.Title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <div
                    className="d-flex align-items-center  "
                    onClick={() => {
                      if (
                        item?.totalApplications &&
                        item?.status === "active"
                      ) {
                        navigate(`/institute/jobs/Applications`, {
                          state: {
                            id: item?.id,
                            title: item?.job_title,
                          },
                        });
                      } else {
                        toast.error("No Applications");
                      }
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <Avatar
                        alt={item?.job_title}
                        // src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=1380&t=st=1692169387~exp=1692169987~hmac=f7ffc84bfd58ebadf7ec9e71a1cc186e4a2f4da0ba1219913a944850cdf6d1eb"
                        sx={{ width: "46px", height: "46px" }}
                      >
                        <SubjectRounded />
                      </Avatar>{" "}
                    </div>
                    <div className="ml-2">{item?.job_title}</div>
                  </div>
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Button
                    variant="soft"
                    size="sm"
                    color="neutral"
                    // onClick={() => toggleRowExpansion(row?.Title)}
                    onClick={() =>
                      navigate(`/institute/jobs/Applications`, {
                        state: { id: item?.id, title: item?.job_title },
                      })
                    }
                    disabled={item?.totalApplications ? false : true}
                  >
                    {item?.totalApplications} Applied
                  </Button>
                </TableCell>
                <TableCell align="center">
                  {(item?.createdAt).substring(0, 10)}
                </TableCell>
                <TableCell align="center">
                  <Chip
                    variant="soft"
                    color={
                      item?.status === "active"
                        ? "success"
                        : item?.status === "inactive"
                        ? "warning"
                        : item?.status === "expired"
                        ? "danger"
                        : item?.status === "renewed"
                        ? "success"
                        : "neutral"
                    }
                    className="fw-bold text-capitalize"
                  >
                    {item?.status}
                  </Chip>
                </TableCell>
                <TableCell align="center">
                  <div>
                    <IconButton
                      onClick={() => {
                        navigate(
                          `/institute/jobs/Applications/ApplicationDetail`,
                          {
                            state: {
                              id: item?.id,
                            },
                          }
                        );
                      }}
                    >
                      <VisibilityIcon className="fs-17" />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteJob(item?.id)}>
                      <DeleteIcon className="fs-17" />
                    </IconButton>
                    {/* <IconButton>
                      <CreateIcon className="fs-17" />
                    </IconButton> */}
                  </div>
                </TableCell>
              </TableRow>
              {/* {expandedRows[row?.Title] && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <div className="ml-3 mb-1  ">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <Avatar
                            alt="Remy Sharp"
                            src="https://as1.ftcdn.net/v2/jpg/02/67/70/34/1000_F_267703458_IbiI4HODGqv1cauNKErSLa8q9iTb7z1G.jpg"
                          />
                          <p className="ml-lg-2">Michael Williams</p>
                        </div>
                        <div className="d-flex">
                          <p className="text-primary font-weight-bold ml-lg-5">
                            Ui Designer
                          </p>
                          <p className="ml-lg-5">
                            <i className="bi bi-geo-alt"></i> Delhi
                          </p>
                        </div>
                        <div className="ml-lg-5 d-flex align-items-center">
                          <h6 className="fs-14">
                            <i className="bi bi-cash"></i>&nbsp;$ 20/hour
                          </h6>
                          <Box
                            className="ml-5"
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              React JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className="ml-3 mb-1  ">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <Avatar
                            alt="Remy Sharp"
                            src="https://as2.ftcdn.net/v2/jpg/02/42/84/07/1000_F_242840794_yy3h6hyWGhSkpamZE5oJmPpjt2oRj3JY.jpg"
                          />
                          <p className="ml-lg-2">Michael Williams</p>
                        </div>
                        <div className="d-flex">
                          <p className="text-primary font-weight-bold ml-lg-5">
                            Ui Designer
                          </p>
                          <p className="ml-lg-5">
                            <i className="bi bi-geo-alt"></i> Delhi
                          </p>
                        </div>
                        <div className="ml-lg-5 d-flex align-items-center">
                          <h6 className="fs-14">
                            <i className="bi bi-cash"></i>&nbsp;$ 20/hour
                          </h6>
                          <Box
                            className="ml-5"
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              React JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className="ml-3  ">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <Avatar
                            alt="Remy Sharp"
                            src="https://as2.ftcdn.net/v2/jpg/02/44/16/89/1000_F_244168960_82fmMA0KEZqfXAXotV10IwhsKVTdRXTQ.jpg"
                          />
                          <p className="ml-lg-2">Michael Williams
                          </p>
                        </div>
                        <div className="d-flex">
                          <p className="text-primary font-weight-bold ml-lg-5">
                            Ui Designer
                          </p>
                          <p className="ml-lg-5">
                            <i className="bi bi-geo-alt"></i> Delhi
                          </p>
                        </div>
                        <div className="ml-lg-5 d-flex align-items-center">
                          <h6 className="fs-14">
                            <i className="bi bi-cash"></i>&nbsp;$ 20/hour
                          </h6>
                          <Box
                            className="ml-5 d-flex"
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              React JS
                            </Chip>
                            <Chip variant="soft" color="success" size="sm">
                              Node JS
                            </Chip>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )} */}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

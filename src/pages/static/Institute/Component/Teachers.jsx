import { Avatar, Box, Button, Chip } from "@mui/joy";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Teachers() {
  const data = [
    {
      id: 1,
      name: "Shivam Tiwari",
      image: "sdsd",
      phone: 4454875478,
      Specialization: "Math",
      email: "K@gmail.com",
      action: "Invite",
    },
    {
      id: 2,
      name: "Jennifer Smith",
      image:
        "https://img.freepik.com/free-photo/woman-summer-field-brunette-brown-sweater_1157-39325.jpg?w=740&t=st=1691589237~exp=1691589837~hmac=838bf1b5c46b4c45f9938e106ab6c42e1e9da4e397beaf31959c4d2fafc17607",
      phone: 9876543210,
      Specialization: "Physics",
      email: "jennifer@example.com",
      action: "Profile ",
    },
    {
      id: 3,
      name: "Alex Johnson",
      image:
        "https://img.freepik.com/free-photo/mother-with-daughter-playing-autumn-field_1157-25390.jpg?t=st=1691589237~exp=1691589837~hmac=0d157f4ede0a4cbdde0fdece63626a0857dd8cf4bdd6851f0245d8c8a60dacbe",
      phone: 1234567890,
      Specialization: "Chemistry",
      email: "alex@example.com",
      action: "Invite",
    },
    {
      id: 4,
      name: "Emily Davis",
      image:
        "https://img.freepik.com/free-photo/beautiful-stylish-couple-field-with-sunflowers_1157-25972.jpg",
      phone: 5647382910,
      Specialization: "Biology",
      email: "emily@example.com",
      action: "Profile ",
    },
    {
      id: 5,
      name: "Robert Martinez",
      image:
        "https://img.freepik.com/free-photo/bride-groom-having-their-wedding-beach_23-2149043955.jpg?t=st=1691672875~exp=1691673475~hmac=9c78e61630171579f3b69bc61e96091139b06b9d3e95ea7362bb25fb1ca9d591",
      phone: 8765432109,
      Specialization: "History",
      email: "robert@example.com",
      action: "Invite",
    },
    {
      id: 6,
      name: "Sophia Lee",
      image:
        "https://img.freepik.com/free-photo/businessman-black-suit-holding-his-tasklist-makes-thumb-up_114579-15902.jpg?w=1380&t=st=1691672897~exp=1691673497~hmac=448eb464f23144dfbfa81bfb382b84997bd5f855933623384f5794da2b6144ef",
      phone: 6574839201,
      Specialization: "English",
      email: "sophia@example.com",
      action: "Profile ",
    },
    {
      id: 7,
      name: "Daniel Brown",
      image:
        "https://img.freepik.com/free-photo/closeup-photo-young-beautiful-lady-standing-white-background_114579-92756.jpg?w=740&t=st=1691672902~exp=1691673502~hmac=4ecf42ba671c868196268a91bd9a650db96f111c43b5e18337fa4f7d713a8b48",
      phone: 9870123456,
      Specialization: "Computer Science",
      email: "daniel@example.com",
      action: "Invite",
    },
    {
      id: 8,
      name: "Isabella Wilson",
      image:
        "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=996&t=st=1691672910~exp=1691673510~hmac=6125b3042a260694324d657ee8113c474422b8fe98086c06dea70a1b94fde7c4",
      phone: 4567890123,
      Specialization: "Psychology",
      email: "isabella@example.com",
      action: "Invite",
    },
    {
      id: 9,
      name: "Michael Thompson",
      image:
        "https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-239.jpg?w=1380&t=st=1691672916~exp=1691673516~hmac=928ae9a61cf96a3fe1fe9430c740ccc83db62018b66cc61d7a4a665bdaf66ee4",
      phone: 7890123456,
      Specialization: "Economics",
      email: "michael@example.com",
      action: "Profile ",
    },
    {
      id: 10,
      name: "Olivia Harris",
      image:
        "https://img.freepik.com/free-photo/young-tender-curly-girl-holding-documents_176420-239.jpg?w=1380&t=st=1691672916~exp=1691673516~hmac=928ae9a61cf96a3fe1fe9430c740ccc83db62018b66cc61d7a4a665bdaf66ee4",
      phone: 2345678901,
      Specialization: "Sociology",
      email: "olivia@example.com",
      action: "Invite",
    },
    // Add more entries as needed
  ]; 

  return (
    <div className="p-2">
      <h3 className="mb-2 mt-2 font-weight-bold">Teachers</h3>
      <div className="p-1">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "rgba(25,103,210,.1)" }}>
              <TableRow>
                <TableCell>
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
                <TableCell align="start">
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
                    <div className="d-flex align-items-center">
                      <div>
                        <Avatar
                          alt={item?.name}
                          src={item?.image}
                          sx={{ width: "40px", height: "40px" }}
                        />{" "}
                      </div>
                      <div className="ml-3 fs-15 font-weight-bold">
                        {item?.name}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Chip variant="soft" color="neutral" className='text-info'>
                      {item.Specialization}
                    </Chip>
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <p className="">{item.email}</p>
                  </TableCell>

                  <TableCell align="center">
                    <h6>{item?.phone} </h6>
                  </TableCell>
                  <TableCell align="center">
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
  );
}

export default Teachers;

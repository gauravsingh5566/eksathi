import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button, FormControl, FormLabel, Input, Textarea } from "@mui/joy";
import Table from "@mui/joy/Table";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";

import Stack from "@mui/joy/Stack";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
const label = { inputProps: { "aria-label": "Switch demo" } };
function Dummy() {
  const inputRef = React.useRef(null);
  return (
    <div className="container">
      <div className="p-2">
        <div
          className="d-flex align-items-center justify-content-between rounded-2"
          style={{ backgroundColor: "rgb(237, 108, 2)" }}
        >
          <div className="p-2">
            <h2 className="text-white">ADVANCE SETTINGS</h2>
            <h6 className="text-white">
              <strong>Questions:</strong> File Extinguisher Availble
            </h6>
          </div>
          <HighlightOffIcon
            className="text-white mr-2 fs-40 cursor-pointer"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="">
          <div className="row p-2">
            <div className=" col p-2">
              <FormLabel>Question Text</FormLabel>
              <Input
                placeholder="Type in here…"
                size="lg"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className=" col p-2">
              <FormLabel>Question Type</FormLabel>
              <Select
                size="lg"
                placeholder="Select a Question…"
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: "100%",
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
              >
                <Option value="dog">Dog</Option>
                <Option value="cat">Cat</Option>
                <Option value="fish">Fish</Option>
                <Option value="bird">Bird</Option>
              </Select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="row ">
            <div className="col-lg-6 col-sm-12 w-100 ">
              <FormLabel>Question Text</FormLabel>
              <Input
                placeholder="Type in here…"
                size="lg"
                variant="outlined"
                fullWidth
                className=""
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="card rounded-3">
            <Table aria-label="basic table ">
              <thead>
                <tr>
                  <th className="font-weight-bold">Options</th>
                  <th className="font-weight-bold">Score</th>
                  <th className="font-weight-bold">Image Required</th>
                  <th className="font-weight-bold">Comment Required</th>
                  {/* <th>Protein&nbsp;(g)</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <Select
                        size="lg"
                        placeholder="Select an Options..."
                        indicator={<KeyboardArrowDown />}
                        sx={{
                          width: "100%",
                          [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                              transform: "rotate(-180deg)",
                            },
                          },
                        }}
                      >
                        <Option value="dog">Yes</Option>
                        <Option value="cat">No</Option>
                      </Select>
                    </div>
                  </td>
                  <td>
                    <div>
                      {" "}
                      <Stack
                        spacing={1.5}
                        sx={{ minWidth: "30%" }}
                        className="card rounded-3"
                      >
                        <Input
                          type="number"
                          // defaultValue={2.5}
                          slotProps={{
                            input: {
                              ref: inputRef,
                              min: 0,

                              step: 1,
                            },
                          }}
                        />
                      </Stack>
                    </div>
                  </td>
                  <td>
                    <div className="ml-4">
                      {" "}
                      <Switch {...label} />
                    </div>
                  </td>
                  <td>
                    <div className="ml-4">
                      {" "}
                      <Switch {...label} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Select
                        size="lg"
                        placeholder="Select an Options..."
                        indicator={<KeyboardArrowDown />}
                        sx={{
                          width: "100%",
                          [`& .${selectClasses.indicator}`]: {
                            transition: "0.2s",
                            [`&.${selectClasses.expanded}`]: {
                              transform: "rotate(-180deg)",
                            },
                          },
                        }}
                      >
                        <Option value="dog">Yes</Option>
                        <Option value="cat">No</Option>
                      </Select>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="">
                      {" "}
                      <Stack
                        spacing={1.5}
                        sx={{ minWidth: "30%" }}
                        className="card rounded-3 "
                      >
                        <Input
                          type="number"
                          // className="card"

                          slotProps={{
                            input: {
                              ref: inputRef,
                              min: 0,

                              step: 1,
                            },
                          }}
                        />
                      </Stack>
                    </div>
                  </td>
                  <td>
                    <div className="ml-4">
                      {" "}
                      <Switch {...label} />
                    </div>
                  </td>
                  <td>
                    <div className="ml-4">
                      {" "}
                      <Switch {...label} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div>
          <div>
            <FormLabel>Hint Text</FormLabel>
            <Textarea
              size="lg"
              name="Size"
              placeholder="Type Here..."
              minRows={3}
            />
          </div>
        </div>

        <div>
          <div className="p-2 row">
            <div className="p-2">
              <Button variant="outlined" startDecorator={<CloudUploadIcon />} size="lg">
                Add/Upload Media 
              </Button>
            </div>
            <div className="p-2">
              <Button variant="outlined" startDecorator={<HelpOutlineIcon />} size="lg">
                Make this question conditional
              </Button>
            </div>
          </div>
        </div>

        <div>
      <div className="row p-2">
        <div className=""> <Switch {...label} /> Include in Analytics</div>
        <div className=""> <Switch {...label} /> Include in Overall Score</div>
        <div className="">  <Switch {...label} /> Automated Actions </div>
      </div>
      <div className="row p-2">
        <div className=""> <Switch {...label} /> Mandatory Question</div>
        <div className=""> <Switch {...label} /> Comment Required</div>
        <div className="">  <Switch {...label} /> Image Required </div>
        <div className="">  <Switch {...label} /> Action Review Required </div>
      </div>

        </div>
      </div>
    </div>
  );
}

export default Dummy;

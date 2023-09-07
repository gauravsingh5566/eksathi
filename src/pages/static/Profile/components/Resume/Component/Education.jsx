import { Textarea } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";
import moment from "moment";
import {
  AspectRatio,
  Box,
  Divider,
  IconButton,
  ListDivider,
  Typography,
} from "@mui/joy";
import { useGlobalContext } from "global/context";
import { useLocation } from "react-router-dom";
import { width } from "@mui/system";

function Education({ EditEducation, profile }) {
  const location = useLocation();
  const { api, userData } = useGlobalContext();
  const [educations, setEducations] = useState([]);

  const getEducations = async () => {
    try {
      const res = await api.get(
        `/app/candidates/educations/${profile || userData?.id}`
      );
      if (res?.status === 200) {
        console.log("educations : ", res?.data?.results);
        setEducations(res?.data?.results);
      }
    } catch (e) {
      console.log(e);
      setEducations([]);
    }
  };

  useEffect(() => {
    getEducations();
  }, [profile]);

  return (
    <>
      <div className="">
        <div className="p-3">
          <div>
            <h4 className="font-weight-bold">Education</h4>
            <div className="job-list p-1">
              {educations?.map((education) => (
                <div className="job-item  d-flex justify-content-between">
                  <Box
                    sx={{
                      display: "flex",
                      marginBottom: "10px",
                      gap: 1,
                      py: 1,
                      overflow: "auto",
                      width: "100%",
                      scrollSnapType: "x mandatory",
                      "& > *": {
                        scrollSnapAlign: "center",
                      },
                      "::-webkit-scrollbar": { display: "none" },
                    }}
                  >
                    <Box sx={{ whiteSpace: "nowrap" }} className="w-100 ml-2">
                      <div className="d-flex justify-content-between w-100">
                        <div>
                          <h6
                            className="font-weight-bold"
                            style={{
                              width: "30%",
                              maxWidth: "30%",
                              wordWrap: "break-word",
                            }}
                          >
                            <span>
                              {education?.degree}, {education?.field_of_study}
                            </span>
                          </h6>

                          <p className="font-weight-bold" fontWeight="lg">
                            {education?.institution_name}
                          </p>
                        </div>
                      </div>

                      <Typography level="body2">
                        {moment(education?.start_date).format("MMM YYYY")} -{" "}
                        {moment(education?.end_date).format("MMM YYYY")}
                      </Typography>
                      {/* <Typography level="body2">Delhi, India · On-site</Typography> */}
                      {/* <Typography level="body2">Skills: <span>MySQL · Cascading Style Sheets (CSS) · Data Structures · REST APIs · JavaScript · HTML5 · React.js · Node.js</span></Typography> */}
                    </Box>
                  </Box>
                </div>
              ))}
            </div>
            {}
            {/* <div className="p-3">
              {EditEducation ? (
                <h5 className="font-weight-bold">{text}</h5>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  value={text}
                />
              )}
              {EditEducation ? (
                <p>{text1}</p>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setText1(e.target.value);
                  }}
                  value={text1}
                />
              )}

              <div
                className=" text-black d-flex align-items-baseline justify-content-center"
                style={{ marginRight: "67%" }}
              >
                <li> </li>
                {EditEducation ? (
                  <p style={{ lineHeight: "20px" }}>{text2}</p>
                ) : (
                  <Textarea
                    className="mt-2"
                    minRows={2}
                    fullWidth
                    name="Outlined"
                    variant="outlined"
                    style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                    onChange={(e) => {
                      setText2(e.target.value);
                    }}
                    value={text2}
                  />
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
}

export default Education;

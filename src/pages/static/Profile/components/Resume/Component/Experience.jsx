import { Textarea } from "@mui/joy";
import { useGlobalContext } from "global/context";
import React, { useRef, useState, useEffect } from "react";
import { Edit } from "@mui/icons-material";
import {
  AspectRatio,
  Box,
  Divider,
  IconButton,
  ListDivider,
  Typography,
} from "@mui/joy";
import moment from "moment";
import { useLocation } from "react-router-dom";
function Experience({ EditExperince, profile }) {
  const location = useLocation();
  const { api, userData } = useGlobalContext();
  const [text, setText] = useState(
    " Developed and maintained managed care and long-term health plans for 15+ patients using software applications and databases."
  );
  const [text1, settext1] = useState(
    "Assisted patients with all necessary movements and functions through the design and implementation of user-friendly healthcare software solutions."
  );
  const [text2, settext2] = useState(
    " Achieved and maintained a 98%+ compassion score by incorporating empathy-focused features in the software to enhance patient experience."
  );
  const [text3, settext3] = useState("Software Engineer");
  const [text4, settext4] = useState("Mar 2019 - Present");
  const [text5, settext5] = useState("Govardhan Learning Cloud");

  const [experiences, setExperiences] = useState([]);

  const getExperiences = async () => {
    try {
      const res = await api.get(
        `/app/candidates/experiences/${profile || userData?.id}`
      );
      if (res?.status === 200) {
        console.log("experiences : ", res?.data?.results);
        setExperiences(res?.data?.results);
      }
    } catch (e) {
      console.log(e);
      setExperiences([]);
    }
  };
  useEffect(() => {
    getExperiences();
  }, [profile]);

  return (
    <>
      <div className=" p-3 ">
        <h4 className="font-weight-bold">Work Experience</h4>
        {experiences?.map((experience) => (
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
                    <h5 className=" font-weight-bold mb-1 fs-18">
                      {experience?.title}
                    </h5>
                    <h6 className=" font-weight-bold ">
                      {experience?.organization}
                    </h6>
                  </div>
                </div>

                <Typography level="body2">
                  {experience?.subject} · {experience?.standard}
                </Typography>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="font-weight-bold" level="body2">
                    {experience?.location}, India · On-site
                  </h6>
                  <Typography className="" level="body2">
                    {moment(experience?.start_date).format("MMM, YYYY")} -{" "}
                    {experience?.is_working
                      ? "Present"
                      : moment(experience?.end_date).format("MMM, YYYY")}{" "}
                    . Full Time · 7 mos
                  </Typography>
                </div>
                {/* <Typography level="body2">Skills: <span>MySQL · Cascading Style Sheets (CSS) · Data Structures · REST APIs · JavaScript · HTML5 · React.js · Node.js</span></Typography> */}
              </Box>
            </Box>
          </div>
        ))}
      </div>
      <div className="border"></div>
    </>
  );
}

export default Experience;

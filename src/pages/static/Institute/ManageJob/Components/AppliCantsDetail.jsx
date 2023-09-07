import { Box, CardCover, Chip } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import React from "react";
import { styled } from "styled-components";

function AppliCantsDetail() {
  const ScrollerStyle = {
    maxHeight: "900px",
    width: "100%",
    overflowY: "scroll",
    justifyContent: "flex-end",
    // marginTop: "140px",
  };
  const ScrollHiddenDiv = styled.div`
        .scroll-bar-hidden::-webkit-scrollbar {
          display: none;
        }
        }
      `;

  const ScrollMinibarDiv = styled.div`
    .scroll-minibar::-webkit-scrollbar {
      width: 3px;
      background-color: black;
    }

    .scroll-minibar::-webkit-scrollbar-thumb {
      background-color: rgb(185, 182, 182) !important;
    }
  `;
  return (
    <div className="">
      <div className="p-4 scroll-minibar" style={ScrollerStyle}>
        <Card variant="soft">
          <CardContent>
            <div className="row">
              <div className="col-12 col-lg-4 ">
                <div className="p-2">
                  <Card
                    component="li"
                    sx={{ minWidth: 200, height: 350, flexGrow: 1 }}
                  >
                    <CardCover>
                      <img
                        src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1691841059~exp=1691841659~hmac=f5d1464e405553704d415e5a39729bde923b41121e121a4f757aaaf68d5242e7"
                        srcSet="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?w=740&t=st=1691841059~exp=1691841659~hmac=f5d1464e405553704d415e5a39729bde923b41121e121a4f757aaaf68d5242e7"
                        loading="lazy"
                        alt=""
                      />
                    </CardCover>
                  </Card>
                </div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="p-3">
                  <div className="mb-4">
                    <h1 className="font-weight-bold mb-4 mt-5">
                      Shivam Tiwari
                    </h1>
                    <p >
                      I am an enthusiastic and dedicated professional with a
                      passion for digital marketing. With over 5 years of
                      experience in the digital marketing field, I have
                      developed a strong foundation in SEO, content marketing,
                      and social media management. My journey has equipped me
                      with the ability to drive organic traffic and engage
                      audiences through strategic content creation.
                    </p>
                  </div>
                  <div className="mt-2">
                    <h6>Portfolio</h6>
                    <p className="font-weight-bold text-black">
                      https://dribbble.com/shots/18404241-Talent-search
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 row">
              <div className="col mb-2">
                <p>Rate</p>
                <h6 className="font-weight-bold">$45/hour</h6>
              </div>
              <div className="col mb-2">
                <p>Level</p>
                <h6 className="font-weight-bold">Senior</h6>
              </div>
              <div className="col mb-2">
                <p>Phone</p>
                <h6 className="font-weight-bold">+91 7856780967</h6>
              </div>
              <div className="col mb-2">
                <p>Email</p>
                <h6 className="font-weight-bold">Email@gmail.com</h6>
              </div>
            </div>
            <div className="  p-2 mb-3 row">
              <div className="col mb-2">
                <p>Desired Commitment</p>
                <h6 className="font-weight-bold text-info">Full Time</h6>
              </div>
              <div className="col mb-2">
                <p>Location</p>
                <h6 className="font-weight-bold">Delhi,Gurgaon</h6>
              </div>
              <div className="col mb-2">
                <p>Year Experience</p>
                <h6 className="font-weight-bold">3-5 Years</h6>
              </div>
              <div className="col mb-2">
                <p>Desired Job Title</p>
                <h6 className="font-weight-bold">Full Stack Developer</h6>
              </div>
            </div>
            <div className="p-2">
              <h6 className="mb-1">Skill</h6>
              <Box sx={{}}>
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Python</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Java</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>JavaScript</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>C++</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>C#</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Ruby</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Django</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Flask</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>MySQL</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>PostgreSQL</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>MongoDB</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>AWS</p>
                </Chip>{" "}
                &nbsp;
                <Chip variant="outlined" className="rounded-1" color="neutral">
                  <p>Azure</p>
                </Chip>{" "}
                &nbsp;
              </Box>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AppliCantsDetail;

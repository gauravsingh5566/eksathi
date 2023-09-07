import { Textarea } from "@mui/joy";
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
import { useGlobalContext } from "global/context";
import { useLocation, useParams } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";

function Certification({ EditCertification, profile }) {
  const [first, setfirst] = useState("Oracle Certified Database Engineer");
  const [second, setsecond] = useState("Oracle");
  const [third, setthird] = useState("Issued Jul, 2023");
  const { api, userData } = useGlobalContext();
  const { publicId } = useParams();
  const [openAddCertification, setOpenAddCertification] = useState(false);
  const [certifications, setCertifications] = useState([]);
  const [edit, setEdit] = useState(false);
  const location = useLocation();
  const getCertifications = async () => {
    try {
      const res = await api.get(
        `/app/candidates/certifications/${profile || userData?.id}`
      );
      if (res?.status === 200) {
        console.log("certifications : ", res?.data?.results);
        setCertifications(res?.data?.results);
      }
    } catch (e) {
      console.log(e);
      setCertifications([]);
    }
  };

  useEffect(() => {
    getCertifications();
    console.log("Params Got: ", publicId);
  }, []);

  useEffect(() => {
    getCertifications();
  }, [profile, publicId]);
  return (
    <>
      <div className="p-3">
        <div>
          <h4 className="font-weight-bold mb-2">Certification</h4>
          <div className="job-list">
            {certifications?.map((certification) => (
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
                        <h5 className="font-weight-bold mb-1" fontWeight="lg">
                          {certification?.certification_name}
                        </h5>
                        <Typography fontWeight="sm">
                          {certification?.issuing_organization}
                        </Typography>
                      </div>
                      {location?.pathname === "/setting/jobprofile" ? (
                        <IconButton
                          variant="plain"
                          // sx={{position: 'absolute', right: '2.4rem'}}
                          sx={{
                            height: 30,
                            width: 30,
                          }}
                          onClick={() => {
                            setOpenAddCertification(true);
                          }}
                        >
                          <Edit />
                        </IconButton>
                      ) : null}
                    </div>
                    <div className="d-flex align-items-center justify-content-between ">
                      <Typography level="body2">
                        Certificate ID {certification?.certificate_id}
                      </Typography>
                      <Typography level="body2">
                        Issued{" "}
                        {moment(certification?.issuing_date).format(
                          "MMM, YYYY"
                        )}
                      </Typography>
                    </div>
                    {/* <Typography level="body2">Skills: <span>MySQL · Cascading Style Sheets (CSS) · Data Structures · REST APIs · JavaScript · HTML5 · React.js · Node.js</span></Typography> */}
                    {/* <Typography level="body2">Certificate URL {certification?.certificate_url}</Typography> */}
                  </Box>
                </Box>
              </div>
            ))}
            {/* <CertificationCard setOpenAddCertification={setOpenAddCertification} />
                    <CertificationCard />
                    <CertificationCard />
                    <CertificationCard /> */}
          </div>
          {/* <div className="p-3">
            {EditCertification ? (
              <h5 className="font-weight-bold">{first}</h5>
            ) : (
              <Textarea
                className="mt-2"
                minRows={2}
                fullWidth
                name="Outlined"
                variant="outlined"
                style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                onChange={(e) => {
                  setfirst(e.target.value);
                }}
                value={first}
              />
            )}
            {EditCertification ? (
              <p>{second}</p>
            ) : (
              <Textarea
                className="mt-2"
                minRows={2}
                fullWidth
                name="Outlined"
                variant="outlined"
                style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                onChange={(e) => {
                  setsecond(e.target.value);
                }}
                value={second}
              />
            )}
            <div
              className=" text-black d-flex align-items-baseline justify-content-center"
              style={{ marginRight: "75%" }}
            >
              <li> </li>
              {EditCertification ? (
                <p style={{ lineHeight: "20px" }}>{third}</p>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setthird(e.target.value);
                  }}
                  value={third}
                />
              )}
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="border"></div> */}
    </>
  );
}

export default Certification;

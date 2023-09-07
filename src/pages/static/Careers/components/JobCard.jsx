import { Button, Chip } from "@mui/joy";
import { useGlobalContext } from "global/context";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const JobCard = ({ jd }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { api } = useGlobalContext();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const transformStyle = isHovered ? { transform: "scale(0.1)" } : {};
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (jd && jd.expiry_date) {
      try {
        // Attempt to parse the ISO timestamp from jd.expiry_date
        const timestamp = new Date(jd.expiry_date);

        // Check if the parsed timestamp is valid
        if (!isNaN(timestamp)) {
          // Format the date as "YYYY-MM-DD"
          const formattedDate = timestamp.toISOString().split("T")[0];

          // Update the state with the formatted date
          setFormattedDate(formattedDate);
        } else {
          // Handle the case where jd.expiry_date is not a valid date
          console.error("Invalid date format:", jd.expiry_date);
        }
      } catch (error) {
        // Handle any parsing errors
        console.error("Error parsing date:", error);
      }
    }
  }, [jd]);

  return (
    <>
      <div
        className="p-4 shadow rounded-4 mb-3 d-flex flex-column justify-content-between hover-y"
        style={{ minHeight: 250 }}
      >
        <div>
          <h4
            className="fw-bold text-info"
            onClick={() =>
              navigate(`/careers/job/${jd?.slug}`, {
                state: {
                  id: jd?.id,
                },
              })
            }
            style={{
              cursor: "pointer",
              transition: "transform 0.5s", // Adding a smooth transition
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            {jd?.jobTitle || jd?.job_title}
          </h4>

          <div
            className="truncate"
            dangerouslySetInnerHTML={{
              __html: jd?.jobDescription || jd?.job_description,
            }}
          />
        </div>

        <div className="d-flex justify-content-between align-items-end">
          <div>
            <div className="d-flex align-items-center   ">
              <Chip
                size="sm"
                color="neutral"
                variant="soft"
                className="rounded-2"
              >
                {jd?.job_location}
              </Chip>
            </div>
            <p>
              <b className="bi bi-clock text-warning">
                {" "}
                &nbsp;{jd?.empType || jd?.employment_type[0]}
              </b>
            </p>
            {/* &nbsp;&nbsp;&nbsp; */}
            <p>
              <b className="bi bi-currency-rupee text-info">
                &nbsp;{jd?.salary || jd?.salary_range}
              </b>
            </p>
          </div>
          <div>
            <div className="d-flex align-items-center justify-content-center ">
              
              <div className="fs-11 fw-bold">{formattedDate} </div>
            </div>
            <Button
              variant="soft"
              color="info"
              onClick={() =>
                navigate(`/careers/job/${jd?.slug}`, {
                  state: {
                    id: jd?.id,
                  },
                })
              }
              // to="/careers/apply"
              // className="btn theme-btn bg-light text-dark rounded border me-4 font-weight-bold "
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;

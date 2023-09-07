import React from "react";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import { RocketLaunchTwoTone, StarRounded } from "@mui/icons-material";
import { useGlobalContext } from "global/context";

const labels = {
  0.5: "JustStarted",
  1: "justStarted+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
function EkSathiRefrence({ profile }) {
  const { userData } = useGlobalContext();
  const [value, setValue] = React.useState(5);
  const [hover, setHover] = React.useState(-1);

  return (
    <>
      <div className="mb-2">
        {" "}
        <div className="p-3" style={{ width: "100%" }}>
          <h4 className="font-weight-bold mb-2 ">EkSathi Refrence</h4>
          <div className="">
            <div className="mb-2">
              <p className="font-weight-bold mb-1 text-dark">Profile Link</p>
              <h6 style={{ wordWrap: "break-word" }}>
                <a 
                  href={window.location.origin + "/" + profile?.username}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {window.location.origin + "/" + profile?.username}
                </a>
              </h6>
            </div>
            <div className="mb-1">
              <p className="font-weight-bold text-dark">Rating</p>
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "between",
                }}
              >
                <div className="d-flex ">

               
                <span className="text-black fs-18 fw-bold">
                  {profile?.rating || 0}&nbsp;
                </span>
                <Rating
                  name="text-feedback"
                  value={profile?.rating || 0}
                  readOnly={
                    profile?.id === userData?.id || userData?.id === undefined
                      ? true
                      : false
                  }
                  precision={0.5}
                  icon={<StarRounded fontSize="inherit" />}
                  emptyIcon={
                    <StarRounded style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 1 }}>
                    {labels[Math.round(profile?.rating) || 0.5]}
                  </Box>
                )}
                 </div>
              </Box>
            </div>
           
            <div className="">
              <p className="font-weight-bold text-dark">Point</p>
            </div>
            <div className="mb-2 d-flex align-items-center ">
              <p className="font-weight-bold text-dark mb-2  mt-2">
                Connections
              </p>{" "}
              &nbsp;&nbsp;
              <h5 className="fw-bold fs-25 text-warning">
                {profile?.stats?.connectionCount}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
    </>
  );
}

export default EkSathiRefrence;

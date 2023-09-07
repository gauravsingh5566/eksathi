import { Textarea } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";

function Projects({ EditProject }) {
    const [first, setfirst] = useState("E-commerce Website Development");
    const [second, setsecond] = useState("Duration: January 2022 - April 2022");
    const [third, setthird] = useState(
      "Iss project mein maine ek E-commerce website ka development kiya, jismein customers products ko browse kar sakte the, unhein cart mein add kar sakte the, aur checkout kar sakte the."
    );
    return (
      <>
        <div className="p-3">
          <div>
            <h4 className="font-weight-bold">Projects</h4>
            <div className="p-3">
              {EditProject ? (
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
              {EditProject ? (
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
                className=" text-black"
                // style={{ marginRight: "75%" }}
              >
                <div>
                  <strong>Description:</strong> <br />
                  {EditProject ? (
                    <p>{third}</p>
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Projects
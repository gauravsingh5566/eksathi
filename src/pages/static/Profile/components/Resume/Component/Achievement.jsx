import { Textarea } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";

function Achievement({ EditAchivement }) {


    const [first, setfirst] = useState("Bank Teller of the Year (2019)");
    const [first1, setfirst1] = useState("Double Star National Bank");
    const [second, setsecond] = useState("Bount Bug In Facebook (2021)");
    const [second2, setsecond2] = useState("Facebook");
    const [third, setthird] = useState("100k Subscriber (2023)");
    const [third3, setthird3] = useState("100k Subscriber on Youtube");
    return (
      <>
        <div className="mb-2">
          {" "}
          <div className="p-3" style={{ width: "100%" }}>
            <h4 className="font-weight-bold mb-2">Achievement</h4>
            <div className="p-2">
              {EditAchivement ? (
                <h6 className="font-weight-bold">{first}</h6>
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
              {EditAchivement ? (
                <p>{first1}</p>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setfirst1(e.target.value);
                  }}
                  value={first1}
                />
              )}
            </div>
            <div className="p-2">
              {EditAchivement ? (
                <h6 className="font-weight-bold">{second}</h6>
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
              {EditAchivement ? (
                <p>{second2} </p>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setsecond2(e.target.value);
                  }}
                  value={second2}
                />
              )}
            </div>
            <div className="p-2">
              {EditAchivement ? (
                <h6 className="font-weight-bold"> {third}</h6>
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
              {EditAchivement ? (
                <p>{third3} </p>
              ) : (
                <Textarea
                  className="mt-2"
                  minRows={2}
                  fullWidth
                  name="Outlined"
                  variant="outlined"
                  style={{ width: "100% " }} // Change the width as needed, '100%' means it will take the full width available
                  onChange={(e) => {
                    setthird3(e.target.value);
                  }}
                  value={third3}
                />
              )}
            </div>
          </div>
        </div>
     
      </>
    );
  }
  export default Achievement
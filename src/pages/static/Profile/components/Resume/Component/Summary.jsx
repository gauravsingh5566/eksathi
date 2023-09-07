import { Textarea } from "@mui/joy";
import React, { useRef, useState, useEffect } from "react";

function Summary({ showSummary , profile }) {
    const [text, setText] = useState(
      "With a total experience of several years and 10 months in IT sector I have developed myself as a technical professional who is able to perform tasks and challenges in a team as well as individually. I am hard working and adaptable with good analytical skills, ability to learn new things quickly and work in both independent or team environments. Have been an integral part of the company through effective communication,Microsoft Office and development."
    );
    return (
      <>
        <div className="p-3">
          <h4 className="mb-2 font-weight-bold">Summary</h4>
          {showSummary ? (
            <p className="text-black" style={{ lineHeight: "20px" }}>
              {profile?.profile?.bio}
            </p>
          ) : (
            // <textarea onChange={(e)=>{setText(e.target.value)}} value={text} />
            <Textarea
              name="Outlined"
              variant="outlined"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
          )}
        </div>
        <div className="border"></div>
      </>
    );
  }
  export default Summary
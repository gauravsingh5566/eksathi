import React, { useContext } from "react";


import { useGlobalContext } from "global/context";
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import { useState } from "react";
import { Button } from "@mui/joy";
import { styled } from "styled-components";
import './PostJobs.css'
import JobDetail from "./Component/JobDetail";
import CandidateRequirements from "./Component/CandidateRequirements";
function PostJobs() {
  const { UserStep, setUserStep } = useGlobalContext();
  const [title, setTitle] = useState();

  const handleStepClick = (step, stepTitle) => {
    setUserStep(step); // Update the UserStep value to navigate to the desired step
    setTitle(stepTitle);
  };
  const stpeer = {
    color: "green",
  };
  function showStep(step) {
    switch (step) {
      case 1:
       return <JobDetail setTitle={setTitle} />;

      case 2:
      return <CandidateRequirements setTitle={setTitle} />;

      case 3:
      // return <InstituteAddress setTitle={setTitle} />;
      case 4:
      // return <AboutMe setTitle={setTitle} />;
      case 5:
      // return <PointOfContact setTitle={setTitle} />;
      case 6:
      // return <SocialInformation setTitle={setTitle} />;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="container">
        <div>
          {/* <h4 className="mb-3 fw-bold">{title}</h4> */}
          <div className="center-stepper my-4 p-3">
            <Stepper
              style={{ width: "100%",color:"red" }}
              activeStep={UserStep - 1} // Use UserStep to show the active step
              orientation="horizontal"
             
            >
              <Step
                style={stpeer}
                onClick={() => handleStepClick(1, "Institute Details")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)",
                    color: "magenta"
                  },
                }}
              >
                <StepLabel style={{ color: "red" }} ></StepLabel>
              </Step>

              <Step
                onClick={() => handleStepClick(2, "Contact Detail")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    // Make the StepLabel slightly bigger on hover
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
              <Step
                onClick={() => handleStepClick(3, "Address")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    // Make the StepLabel slightly bigger on hover
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
              <Step
                onClick={() => handleStepClick(4, "About")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    // Make the StepLabel slightly bigger on hover
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
              <Step
                onClick={() => handleStepClick(5, "Point Of Contact")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    // Make the StepLabel slightly bigger on hover
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
              <Step
                onClick={() => handleStepClick(6, "Social Information")}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    // Make the StepLabel slightly bigger on hover
                    transform: "scale(1.1)",
                  },
                }}
              >
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(UserStep)}
        </div>
      </div>
    </>
  );
}

export default PostJobs;

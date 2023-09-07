import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import Personal_Detail from "./InstituteDetail";
import About_Me from "./AboutMe";
import Personal_Information from "./AdditionalInformation";
import Social_Information from "./SocialInformation";
import { Button } from "@mui/joy";
import { Navigate, useNavigate } from "react-router-dom";
import AdditionalInformation from "./AdditionalInformation";
import { useRef } from "react";
import ContactDetail from "./ContactDetail";
const steps = [
  "Personal Detail",
  "About Me",
  "Additional",
  "Social Information",
];

export default function MainComponent() {
  const navigate = useNavigate();
  const [skipped, setSkipped] = React.useState(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const [requiredFieldsCompleted, setRequiredFieldsCompleted] = useState(false);
  const isStepOptional = (step) => {
    return step === 2 || step === 3; // Return true for steps 2 and 3 to make them optional
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSubmit = () => {
    navigate("/institute/profile");
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };
  const childFormRef = useRef(null);
  const stepsComponents = [
    <Personal_Detail  />,
    <ContactDetail />,
    <About_Me />,
    <AdditionalInformation />,
    <Social_Information />,

    // Add more components for additional steps if needed
  ];

  const handleParentSubmit = () => {
    // Call the onSubmit function in the child component using the ref
    if (childFormRef.current) {
      childFormRef.current.handleSubmit();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption"></Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                onClick={() => handleStepClick(index)}
                sx={{ cursor: "pointer" }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            <h3 className="text-center font-weight-bold mb-5 mt-5">
              All Steps Completed
            </h3>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              justifyContent: "center",
            }}
          >
            {/* <Box sx={{ flex: "1 1 auto" }} /> */}
            <Button variant="outlined" color="success" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, width: "50%" }}>
            {/* {activeStep + 1} */}
          </Typography>
          {/* Render the appropriate component based on the activeStep */}
          {stepsComponents[activeStep]}
          <Box sx={{ position: "relative" }}>
            {/* Your content goes here */}
            {/* ... */}

            {/* Fixed position buttons for smaller screens */}
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff", // You can change the background color if needed
                display: { xs: "flex", sm: "none" }, // Show on small screens, hide on larger screens
              }}
            >
              <Button
                color="success"
                variant="soft"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button
                  variant="soft"
                  color="danger"
                  onClick={handleSkip}
                  sx={{ mr: 1 }}
                >
                  Skip
                </Button>
              )}

              <Button variant="outlined" color="primary" onClick={handleNext}>
                {activeStep === stepsComponents.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>

            {/* Non-fixed position buttons for larger screens */}
            <Box
              sx={{
                p: 2,
                display: { xs: "none", sm: "flex" }, // Hide on small screens, show on larger screens
              }}
            >
              <Button
                color="success"
                variant="soft"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button
                  variant="soft"
                  color="danger"
                  onClick={handleSkip}
                  sx={{ mr: 1 }}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setActiveStep((prevActiveStep) => prevActiveStep + 1);
                  handleParentSubmit();
                }}
              >
                {activeStep === stepsComponents.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

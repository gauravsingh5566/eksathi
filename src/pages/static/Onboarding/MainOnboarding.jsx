import React, { useContext } from "react";
import PersonalDetail from "./Component/InstituteDetail";
import AboutMe from "./Component/AboutMe";
import AdditionalInformation from "./Component/AdditionalInformation";
import SocialInformation from "./Component/SocialInformation";
import { Stepper, StepLabel, Step } from "@mui/material";
import { useGlobalContext } from "global/context";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import ContactDetail from "./Component/ContactDetail";
import InstituteAddress from "./Component/InstituteAddress";
import PointOfContact from "./Component/PointOfContact";
import { useMediaQuery } from "@mui/material";
function MainOnboarding() {
  const theme = useTheme();
  const { UserStep, setUserStep } = useGlobalContext();
  const [title, setTitle] = useState();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleStepClick = (step, stepTitle) => {
    setUserStep(step); // Update the UserStep value to navigate to the desired step
    setTitle(stepTitle);
  };

  function showStep(step) {
    switch (step) {
      case 1:
        return <PersonalDetail setTitle={setTitle} />;
      case 2:
        return <ContactDetail setTitle={setTitle} />;
     
      case 3:
        return <InstituteAddress setTitle={setTitle} />;
      case 4:
        return <AboutMe setTitle={setTitle} />;
      case 5:
        return <PointOfContact setTitle={setTitle} />;
      case 6:
        return <SocialInformation setTitle={setTitle} />;
      default:
        return null;
    }
  }
  const responsiveDivStyles = {
    height: '600px',
    // backgroundColor: 'lightblue',
  };

  const smallScreenStyles = {
    width: '100%',
  };

  const largeScreenStyles = {
    width: '70%',
  };

  const currentScreenStyles = window.innerWidth <= 767 ? smallScreenStyles : largeScreenStyles;


  return (
    <>
      <div className="p-5 container d-flex align-item-center justify-content-center">
        <div style={{  width: isSmallScreen ? "100%" : "55%",height: isSmallScreen ? "700px" : "600px", }}>

      
        <div className="" style={{ }}>
          <h4 className="mb-3 fw-bold">{title}</h4>
          <div className="center-stepper my-4">
            <Stepper
              style={{ width: "100%" }}
              activeStep={UserStep - 1} // Use UserStep to show the active step
              orientation="horizontal"
            >
              <Step
                onClick={() => handleStepClick(1, "Institute Details")}
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
      </div>
    </>
  );
}

export default MainOnboarding;

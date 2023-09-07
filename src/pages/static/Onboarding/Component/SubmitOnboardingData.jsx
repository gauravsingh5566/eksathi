import { Button } from "@mui/joy";
import { useGlobalContext } from "global/context";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function SubmitOnboardingData({setTitle}) {
    const navigate = useNavigate();
    
  const { setUserStep,setUser, setOnboardingData, OnboardingData } = useGlobalContext();
  const handleSubmit = () => {
    // Assuming you have the onboardingData to be submitted.
    // You can use the `setOnboardingData` function to set the data in the global context.
    setOnboardingData(OnboardingData);
  
    // Assuming you have the target URL where the data needs to be sent after submission.
    navigate("/institute/dashboard");
     // Replace "/institute/profile" with the correct URL.
    
    // If you want to console.log the onboardingData, you can do it here.
    console.log(OnboardingData);
  };

  useEffect(() => {
    setTitle("Finish");
  }, [])
  return (
    <>
      <div
        className="p-4 d-flex align-items-center justify-content-center"
        // style={{width:"100vh"}}
      >
        <div className="p-4" style={{ marginTop: "80px" }}>
          <div className="text-center">
            <h4 className="font-weight-bold text-center  mb-4">
              Thankyou for providing your information <br />
              
            </h4>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Button variant="outlined" color="success" style={{ width: "75%" }} onClick={handleSubmit}>
            Finish
            </Button>
          </div>
        </div>
      </div>
      <div className="p-3 mt-3">
        <Button
          variant="outlined"
          color="danger"
          onClick={() => {
            setUserStep(4);
          }}
          style={{ width: "15%" }}
        >
          Back
        </Button>
      </div>
    </>
  );
}

export default SubmitOnboardingData;

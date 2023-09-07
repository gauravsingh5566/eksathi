import { Button, Input } from "@mui/joy";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SocialInformation({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData, api, userData } = useGlobalContext();
  const navigate = useNavigate();


  const handleSubmit = () => {
    console.log(OnboardingData);
    try {
      api
        .post(`/app/institutes/onboarding/${userData?.id}`, {
          ...OnboardingData,
          instituteData: {
            ...OnboardingData?.instituteData,
            status: 'Active'
          }
        })
        .then((response) => {
          console.log("onboarding response: ", response);
          toast.success("Welcome Onboard!");
          navigate("/institute/dashboard");
        }).catch((error) => {
          console.log(error);
          toast.error("Something went wrong");
        });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

  };

  useEffect(() => {
    setTitle("Finish");
  }, []);
  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setUserStep(3); // Move to the next step after successful form submission
  };

  const formik = useFormik({
    initialValues: {
      facebook: OnboardingData.facebook || "", // Set initial values from OnboardingData
      instagram: OnboardingData.instagram || "",
      linkdin: OnboardingData.linkdin || "",
      twitter: OnboardingData.twitter || "",
      youtube: OnboardingData.youtube || "",
      github: OnboardingData.github || "",
    },

    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    setTitle("Social Information");
  }, []);

  return (
    <>
      <div className="row mb-1">
        <div className=" col d-flex align-items-center justify-content-arround p-3 mb-2 ">
          <i className="bi bi-facebook fs-35" style={{ color: "blue" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Facebook URL"
            sx={{ width: "100%" }}
            value={OnboardingData?.profileData?.facebook}
            id="facebook"
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  facebook: e.target.value,
                }
              });
            }}
            name="website"
          />
        </div>
        <div className=" col d-flex align-items-center justify-content-arround p-3 mb-2 ">
          <i className="bi bi-instagram fs-35" style={{ color: "red" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Instagram URL"
            sx={{ width: "100%" }}
            id="instagram"
            name="website"
            value={OnboardingData?.profileData?.instagram}
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  instagram: e.target.value,
                }
              });
            }}
          />
        </div>
      </div>
      <div className="row mb-1">
        <div className=" col d-flex align-items-center justify-content-arround p-3  mb-2">
          <i className="bi bi-linkedin fs-35" style={{ color: "blue" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Linkedin URL"
            sx={{ width: "100%" }}
            id="linkdin"
            name="website"
            value={OnboardingData?.profileData?.linkdin}
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  linkdin: e.target.value,
                }
              });
            }}
          />
        </div>
        <div className=" col d-flex align-items-center justify-content-arround p-3 mb-2 ">
          <i className="bi bi-twitter fs-35" style={{ color: "blue" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Twitter URL"
            sx={{ width: "100%" }}
            id="twitter"
            name="website"
            value={OnboardingData?.profileData?.twitter}
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  twitter: e.target.value,
                }
              });
            }}
          />
        </div>
      </div>
      <div className="row ">
        <div className=" col d-flex align-items-center justify-content-arround p-3 mb-2  ">
          <i className="bi bi-youtube fs-35" style={{ color: "red" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Youtube URL"
            sx={{ width: "100%" }}
            id="youtube"
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  youtube: e.target.value,
                }
              });
            }}
            name="website"
            value={OnboardingData?.profileData?.youtube}
          />
        </div>
        <div className=" col d-flex align-items-center justify-content-arround p-3 mb-2 ">
          <i className="bi bi-github fs-35" style={{ color: "" }}></i>
          &nbsp;&nbsp;&nbsp;
          <Input
            variant="soft"
            className="form-control form--control"
            placeholder="Enter Your Github URL"
            sx={{ width: "100%" }}
            id="github"
            name="website"
            value={OnboardingData?.profileData?.github}
            onChange={(e) => {
              formik.handleChange(e);
              setOnboardingData({
                ...OnboardingData,
                profileData: {
                  ...OnboardingData?.profileData,
                  github: e.target.value,
                }
              });
            }}
          />
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-2">
        <Button
          variant="outlined"
          color="danger"
          onClick={() => {
            setUserStep(5);
          }}
        >
          Back
        </Button>
        <Button
          type="submit"
          onClick={() => {
            // setUserStep(5);
            handleSubmit()
          }}
          // onClick={}
          variant="outlined"
          color="primary"
        >
          Finish
        </Button>
      </div>
    </>
  );
}

export default SocialInformation;

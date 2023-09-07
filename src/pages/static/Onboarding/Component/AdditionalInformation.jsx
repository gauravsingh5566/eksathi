import { Button, Input } from "@mui/joy";
import React, { useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import styled from "styled-components";
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useGlobalContext } from "global/context";
import { useState } from "react";
function AdditionalInformation({ onSubmit, setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData } = useGlobalContext();

  const [isFormValid, setIsFormValid] = useState(false);

  const validationSchema = Yup.object().shape({
    teachersCount: Yup.number()
      .typeError("Teachers count must be a number")
      .required("Teachers count is required"),
    studentsCount: Yup.number()
      .typeError("Students count must be a number")
      .required("Students count is required"),
    board: Yup.string().required("Board is required"),
    dayboardingHostel: Yup.string().required("Dayboarding/Hostel is required"),
    awards: Yup.string().required("Awards are required"),
    website: Yup.string()
      .url("Invalid website URL")
      .required("Website is required"),
  });
  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setUserStep(2); // Move to the next step after successful form submission
  };
  const formik = useFormik({
    initialValues: {
      teachersCount: OnboardingData.teachersCount || "",
      studentsCount: OnboardingData.studentsCount || "",
      board: OnboardingData.board || "",
      dayboardingHostel: OnboardingData.dayboardingHostel || "",
      awards: OnboardingData.awards || "",
     
    },
    validationSchema,
    onBlur: () => {
      setIsFormValid(formik.isValid);
    },
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    setTitle("Additional Information");
  }, [])

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="col mb-3">
          <div className="row mb-3">
            {/* <h5 className="mb-2 font-weight-bold ">
              Enter Your Teachers count
            </h5> */}
            <Input
            variant="soft"
              type="number"
              id="teachersCount"
              name="teachersCount"
              value={OnboardingData.teachersCount}
              onChange={(e) => {
                formik.handleChange(e);
                setOnboardingData({
                  ...OnboardingData,
                  teachersCount: e.target.value,
                });
              }}
              className="form-control form--control mb-3"
              placeholder="Enter Your Teachers count"
              sx={{ width: "100%" }}
              errorhandle="Pl. fill this field"
            />
            <span className="text-danger font-weight-bold">
              {formik.errors.teachersCount}
            </span>
          </div>
          <div className="row ">
            {/* <h5 className="mb-2 font-weight-bold ">
              Enter Your Students count
            </h5> */}
            <Input
             variant="soft"
              type="number"
              id="studentsCount"
              name="studentsCount"
              value={OnboardingData.studentsCount}
              onChange={(e) => {
                formik.handleChange(e);
                setOnboardingData({
                  ...OnboardingData,
                  studentsCount: e.target.value,
                })
              }}
              className="form-control form--control mb-3"
              placeholder="Enter Your Students count"
              sx={{ width: "100%" }}
              errorhandle="Pl. fill this field"
            />
            <span className="text-danger font-weight-bold">
              {formik.errors.studentsCount}
            </span>
          </div>
        </div>
        <div className="col mb-3">
          <div className="row mb-3">
            {/* <h5 className="mb-2 font-weight-bold ">Enter Your Board</h5> */}
            <Input
             variant="soft"
              type="text"
              id="board"
              name="board"
              value={OnboardingData.board}
              onChange={(e) => {
                formik.handleChange(e);
                setOnboardingData({
                  ...OnboardingData,
                  board: e.target.value
                })
              }}
              className="form-control form--control mb-3"
              placeholder="Enter Your Board"
              sx={{ width: "100%" }}
              errorhandle="Pl. fill this field"
            />
            <span className="text-danger font-weight-bold">
              {formik.errors.board}
            </span>
          </div>
          <div className="row ">
            {/* <h5 className="mb-2 font-weight-bold ">Enter Your Hostel</h5> */}
            <Input
             variant="soft"
              type="text"
              id="dayboardingHostel"
              name="dayboardingHostel"
              value={OnboardingData.dayboardingHostel}
              onChange={(e) => {
                formik.handleChange(e);
                setOnboardingData({
                  ...OnboardingData,
                  dayboardingHostel: e.target.value
                })
              }}
              className="form-control form--control mb-3"
              placeholder="Enter Your Hostel"
              sx={{ width: "100%" }}
              errorhandle="Pl. fill this field"
            />
            <span className="text-danger font-weight-bold">
              {formik.errors.dayboardingHostel}
            </span>
          </div>
        </div>
        <div className="row mb-3">
          {/* <div className="col mb-3 ">
            <Input
             variant="soft"
              type="text"
              id="awards"
              name="awards"
              value={OnboardingData.awards}
              onChange={(e) => {
                formik.handleChange(e);
                setOnboardingData({
                  ...OnboardingData,
                  awards: e.target.value
                })
              }}
              className="form-control form--control mb-3"
              placeholder="Enter Your Awards"
              sx={{ width: "100%" }}
              errorhandle="Pl. fill this field"
            />
            <span className="text-danger font-weight-bold">
              {formik.errors.awards}
            </span>
          </div> */}
        
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <Button
            variant="outlined"
            color="danger"
            onClick={() => {
              setUserStep(2);
            }}
          >
            Back
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => {
              setUserStep(4);
            }}

          >
            {/* {activeStep === stepsComponents.length - 1 ? "Finish" : "Next"} */}
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

export default AdditionalInformation;

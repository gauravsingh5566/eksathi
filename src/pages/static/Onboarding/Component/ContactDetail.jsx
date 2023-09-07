import React from "react";
import { Formik, Field, useFormik } from "formik";

import * as Yup from "yup";
import { Button, Input } from "@mui/joy";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { useGlobalContext } from "global/context";
import { useState } from "react";
import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  // phoneNumber: Yup.string()
  //   .required("Required")
  //   .max(11, "Must be 10 characters or less")
  //   .min(10, "Must be 10 characters or more"),
  mobile: Yup.string()
    .required("Required")
    .max(11, "Must be 10 characters or less")
    .min(10, "Must be 10 characters or more"),
  // address: Yup.string()
  //   .required("Address is required")
  //   .min(5, "Must be 5 characters or more"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

function ContactDetail({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData } = useGlobalContext();

  const [isFormValid, setIsFormValid] = useState(false); // Track form validity

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setOnboardingData({
      instituteData: {
        ...OnboardingData?.instituteData,
        mobile: values?.mobile,
      },
      profileData: {
        ...OnboardingData?.profileData,
        ...values,
      }
    });
    setUserStep(3); // Move to the next step after successful form submission
  };
  const formik = useFormik({
    initialValues: {
      phoneNumber: OnboardingData?.profileData?.phoneNumber,
      mobile: OnboardingData?.instituteData?.mobile,
      email: OnboardingData?.instituteData?.email,
    },
    validationSchema,
    onBlur: () => {
      setIsFormValid(formik.isValid);
    },
    onSubmit: handleFormSubmit,
  });
  useEffect(() => {
    setIsFormValid(
      formik.isValid &&
      Object.keys(formik.touched).every((field) => formik.touched[field])
    );
  }, [formik.values, formik.touched, formik.isValid]);

  useEffect(() => {
    setTitle("Contact Details");
  }, []);

  // console.log("form errors", formik.values);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="scroll-minibar  ">
          <div className="row mb-0">
            <div className="col mb-3 ">
              <Input
                disabled={OnboardingData?.instituteData?.email?.length}
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your Email "
                sx={{ width: "100%" }}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="soft"
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
             <span className="text-danger font-weight-bold fs-13">
                {formik.touched.email && formik.errors.email}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="mobile"
                name="mobile"
                onBlur={formik.handleBlur}
                placeholder="Enter Your Mobile Number"
                sx={{ width: "100%" }}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
             <span className="text-danger font-weight-bold fs-13">
                {formik.touched.Mobile && formik.errors.mobile}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Input
                type="text"
                variant="soft"
                id="phoneNumber"
                name="phoneNumber"
                onBlur={formik.handleBlur}
                placeholder="Enter Your Phone Number"
                sx={{ width: "100%" }}
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
             <span className="text-danger font-weight-bold fs-13">
                {formik.touched.phoneNumber && formik.errors.phoneNumber}
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <Button
              variant="outlined"
              color="danger"
              onClick={() => {
                setUserStep(1);
              }}
            >
              Back
            </Button>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              disabled={!formik.isValid}

            >
              Next
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactDetail;

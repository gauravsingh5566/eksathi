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
  address: Yup.string()
    .required("Street Address is required")
    .min(5, "Must be 5 characters or more"),
  city: Yup.string()
    .required("City is required")
    .min(5, "Must be 5 characters or more"),
  state: Yup.string()
    .required("State is required")
    .min(5, "Must be 5 characters or more"),
  country: Yup.string()
    .required("Country is required")
    .min(5, "Must be 5 characters or more"),
  landmark: Yup.string()
    .required("Landmark is required")
    .min(5, "Must be 5 characters or more"),
  postal_code: Yup.string()
    .required("PinCode is required")
    .matches(/^[0-9]+$/, "PinCode must contain only digits")
    .min(5, "Must be 5 digits"),
});

function InstituteAddress({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData } = useGlobalContext();

  const [isFormValid, setIsFormValid] = useState(false); // Track form validity

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setOnboardingData({
      ...OnboardingData,
      profileData: {
        ...OnboardingData?.profileData,
        ...values,
      }
    });
    setUserStep(4); // Move to the next step after successful form submission
  };
  const formik = useFormik({
    initialValues: {
      address: OnboardingData?.profileData?.address,
      city: OnboardingData?.profileData?.city,
      state: OnboardingData?.profileData?.state,
      country: OnboardingData?.profileData?.country,
      postal_code: OnboardingData?.profileData?.postal_code,
      landmark: OnboardingData?.profileData?.landmark,
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
    setTitle("Address");
  }, []);

  // console.log("form errors", formik.values);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="scroll-minibar  ">
          <div className="row mb-0">
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="address"
                name="address"
                placeholder="Enter Your Street Address "
                sx={{ width: "100%" }}
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.address && formik.errors.address}
              </span>
            </div>
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="city"
                name="city"
                placeholder="Enter Your City "
                sx={{ width: "100%" }}
                value={formik.values.city}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.city && formik.errors.city}
              </span>
            </div>
          </div>
          <div className="row ">
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="state"
                name="state"
                placeholder="Enter Your State "
                sx={{ width: "100%" }}
                value={formik.values.state}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.state && formik.errors.state}
              </span>
            </div>
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="country"
                name="country"
                placeholder="Enter Your Country "
                sx={{ width: "100%" }}
                value={formik.values.country}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.country && formik.errors.country}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="postal_code"
                name="postal_code"
                placeholder="Enter Your Zip/Code "
                sx={{ width: "100%" }}
                value={formik.values.postal_code}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.postal_code && formik.errors.postal_code}
              </span>
            </div>
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="landmark"
                name="landmark"
                placeholder="Enter Your Landmark "
                sx={{ width: "100%" }}
                value={formik.values.landmark}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold ml-1 fs-13">
                {formik.touched.landmark && formik.errors.landmark}
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-3">
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
            // disabled={!formik.isValid}

            >
              Next
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default InstituteAddress;

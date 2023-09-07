import { Button, Input, Textarea } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useGlobalContext } from "global/context";
import { FlashOff } from "@mui/icons-material";

function PointOfContact({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData } = useGlobalContext();
  const [isFormValid, setIsFormValid] = useState(false);

  const validationSchema = Yup.object().shape({
    pocname: Yup.string()
      .required("Required")
      .max(20, "Must be 20 characters or less")
      .min(5, "Must be 5 characters or more"),
    pocemail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    pocphone: Yup.string()
      .required("Required")
      .max(11, "Must be 10 characters or less")
      .min(10, "Must be 10 characters or more"),
    pocdesignation: Yup.string()
      .required("POC Designation is required")
      .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
      .max(50, "Maximum 50 characters allowed"),
  });

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setOnboardingData({
      ...OnboardingData,
      profileData: {
        ...OnboardingData.profileData,
      ...values
      }
    });
    setUserStep(6); // Move to the next step after successful form submission
  };

  const formik = useFormik({
    initialValues: {
      pocname: OnboardingData?.profileData?.pocname,
      pocemail: OnboardingData?.profileData?.pocemail,
      pocphone: OnboardingData?.profileData?.pocphone,
      pocdesignation: OnboardingData?.profileData?.pocdesignation,
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    setTitle("Point Of Contact (POC)");
  }, []);
 
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="scroll-minibar  ">
          <div className="row mb-0">
            <div className="col mb-3 ">
              <Input
                type="text"
                id="pocname"
                name="pocname"
                placeholder="Enter Your POC Name "
                sx={{ width: "100%" }}
                value={formik.values.pocname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="soft"
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
             <span className="text-danger font-weight-bold fs-13">
                {formik.touched.pocname && formik.errors.pocname}
              </span>
            </div>
            <div className="col mb-3 ">
              <Input
                type="text"
                id="pocemail"
                name="pocemail"
                placeholder="Enter Your POC Email "
                sx={{ width: "100%" }}
                value={formik.values.pocemail}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                variant="soft"
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
             <span className="text-danger font-weight-bold fs-13">
                {formik.touched.pocemail && formik.errors.pocemail}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col ">
              <Input
                type="text"
                variant="soft"
                id="pocphone"
                name="pocphone"
                onBlur={formik.handleBlur}
                placeholder="Enter Your POC Phone Number"
                sx={{ width: "100%" }}
                value={formik.values.pocphone}
               
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold fs-13">
                {formik.touched.pocphone && formik.errors.pocphone}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Input
                type="text"
                variant="soft"
                id="pocdesignation"
                name="pocdesignation"
                onBlur={formik.handleBlur}
                placeholder="Enter Your POC Designation"
                sx={{ width: "100%" }}
               value={formik.values.pocdesignation}
                onChange={formik.handleChange}
                className="form-control form--control"
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold fs-13">
                { formik.touched.pocdesignation && formik.errors.pocdesignation}
              </span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-3">
            <Button
              variant="outlined"
              color="danger"
              onClick={() => {
                setUserStep(4);
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

export default PointOfContact;

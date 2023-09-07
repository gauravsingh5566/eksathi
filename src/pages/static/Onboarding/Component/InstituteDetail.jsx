import React from "react";
import { Formik, Field, useFormik } from "formik";

import * as Yup from "yup";
import { useGlobalContext } from "global/context";
import { useState } from "react";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { Avatar } from "@mui/joy";
const filter = createFilterOptions();
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .max(100, "Must be 100 characters or less")
    .min(5, "Must be 5 characters or more"),
    ownername: Yup.string()
    .required("Required")
    .max(100, "Must be 100 characters or less")
    .min(5, "Must be 5 characters or more"),

  // instituteBoard: Yup.string()
  //   .required("instituteBoard is required")
  //   .min(5, "Must be 5 characters or more"),

  instituteRegistrationNumber: Yup.string()
    .required("Institute registration number is required")
    .test(
      "is-all-digits",
      "Institute registration number must contain only Alphabetical",
      function (value) {
        // Test if the value contains only digits (0-9)
        return /^[a-zA-Z0-9]+$/.test(value);
      }
    ),
  establishmentDate: Yup.date().required("Establishment Date is required"),
});

function InstituteDetail({ setTitle }) {
  const { setUserStep, setOnboardingData, OnboardingData, api } =
    useGlobalContext();

  const [isFormValid, setIsFormValid] = useState(false); // Track form validity
  const [universities, setUniversities] = useState([]);
  const [instituteBoard, setInstituteBoard] = useState(null);
  const [open, toggleOpen] = React.useState(false);

  const getUniversities = async () => {
    try {
      const res = await api.get("/app/universities");
      if (res?.status === 200) {
        console.log("Universities Data: ", res?.data);
        setUniversities(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Combo Box Component methods start
  const handleClose = () => {
    setDialogValue({
      name: "",
      establishedYear: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
    establishedYear: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUniversityTitle = dialogValue.name;

    // Assuming 'setUniversities' is a state setter function and 'postUniversities' is the universities state

    api
      .post(`/app/universities`, { name: newUniversityTitle })
      .then((res) => {
        console.log(res);
        setUniversities((prevData) => {
          return [...prevData, { id: res?.data?.id, name: newUniversityTitle }];
        });
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose();
  };
  //Combo Box Component methods end

  const handleFormSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
    setOnboardingData({
      instituteData: {
        ...OnboardingData?.instituteData,
        name: values?.name
      },
      profileData: {
        ...OnboardingData?.profileData,
        ...values,
        affiliate_id: instituteBoard?.id || null,
        affiliate_type: 'university',
      },
    });

    setUserStep(2); // Move to the next step after successful form submission
  };

  const formik = useFormik({
    initialValues: {
      name: OnboardingData?.profileData?.name,
      website: OnboardingData?.profileData?.website || "",
      ownername: OnboardingData?.profileData?.ownername ,
      instituteRegistrationNumber: OnboardingData?.profileData?.instituteRegistrationNumber,
      instituteBoard: OnboardingData?.profileData?.instituteBoard,
      establishmentDate: OnboardingData?.profileData?.establishmentDate || null,
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
    setTitle("Institute Details");
    getUniversities();
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="scroll-minibar  ">
          <div className="row mb-0">
            <div className="col mb-3">
              {/* <h5 className="mb-2 font-weight-bold">Enter Your Name</h5> */}
              <Input
                variant="soft"
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                placeholder="Enter Your Institute Name"
                sx={{ width: "100%" }}
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold fs-13">
                {formik.touched.name && formik.errors.name}
              </span>
            </div>

            <div className="col mb-3">
              {/* <h5 className="mb-2 font-weight-bold  ">Enter Your Name</h5> */}
              <FormControl id="free-solo-dialog-demo">
                <Autocomplete
                  slotProps={{
                    listbox: {
                      sx: (theme) => ({
                        zIndex: theme.vars.zIndex.modal,
                      }),
                    },
                  }}
                  variant="soft"
                  placeholder="Recognized/Affiliated"
                  size="lg"
                  id="instituteBoard"
                  name="instituteBoard"
                  fullWidth
                  value={instituteBoard}
                  onChange={(event, newValue) => {
                    if (typeof newValue === "string") {
                      // timeout to avoid instant validation of the dialog's form.
                      setTimeout(() => {
                        toggleOpen(true);
                        setDialogValue({
                          name: newValue,
                          establishedYear: "",
                        });
                      });
                    } else if (newValue && newValue.inputValue) {
                      toggleOpen(true);
                      setDialogValue({
                        name: newValue.inputValue,
                        establishedYear: "",
                      });
                    } else {
                      setInstituteBoard(newValue);
                      formik.setFieldValue("instituteBoard", newValue);
                    }
                  }}
                  onBlur={formik.handleBlur}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== "") {
                      filtered.push({
                        inputValue: params.inputValue,
                        name: `Add "${params.inputValue}"`,
                      });
                    }

                    return filtered;
                  }}
                  options={universities}
                  getOptionLabel={(option) => {
                    if (typeof option === "string") {
                      return option;
                    }
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    return option.name; // Assuming the field name is "name" in your universities array
                  }}
                  freeSolo
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  renderOption={(props, option) => (
                    <AutocompleteOption
                      slotProps={{
                        listbox: {
                          sx: (theme) => ({
                            zIndex: theme.vars.zIndex.modal,
                          }),
                        },
                      }}
                      {...props}
                    >
                      <Avatar
                        src={option?.logo}
                        alt={option.name}
                        size="sm"
                        sx={{
                          marginRight: '10px'
                        }}
                      /> {option.name}
                    </AutocompleteOption>
                  )}
                />
              </FormControl>
              <Modal open={open} onClose={handleClose}>
                <ModalDialog>
                  <form onSubmit={handleSubmit}>
                    <Typography
                      id="basic-modal-dialog-title"
                      component="h2"
                      level="inherit"
                      fontSize="1.25em"
                      mb="0.25em"
                    >
                      Add a new University
                    </Typography>

                    <Stack spacing={2}>
                      <FormControl id="name">
                        <FormLabel>Name</FormLabel>
                        <Input
                          autoFocus
                          type="text"
                          value={dialogValue.name}
                          onChange={(event) =>
                            setDialogValue({
                              ...dialogValue,
                              name: event.target.value,
                            })
                          }
                        />
                      </FormControl>

                      <Stack
                        direction="row"
                        justifyContent="flex-end"
                        spacing={2}
                      >
                        <Button
                          variant="plain"
                          color="neutral"
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">Add</Button>
                      </Stack>
                    </Stack>
                  </form>
                </ModalDialog>
              </Modal>
              {/* <Input
                variant="soft"
                type="text"
                id="instituteBoard"
                name="instituteBoard"
                value={OnboardingData.instituteBoard}
                onChange={(e) => {
                  formik.handleChange(e); // Handle Formik's state
                  setOnboardingData({
                    ...OnboardingData,
                    instituteBoard: e.target.value,
                  }); // Update the OnboardingData state directly
                }}
                onBlur={formik.handleBlur} // Handle the onBlur event for Formik's touched state
                className="form-control form--control"
                placeholder="Enter Your Board/University Name"
                sx={{ width: "100%" }}
                errorhandle="Pl. fill this field"
              /> */}
              <span className="text-danger font-weight-bold">
                {/* {formik.touched.instituteBoard && formik.errors.instituteBoard} */}
              </span>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col mb-3"> 
            <Input
                variant="soft"
                type="text"
                id="ownername"
                name="ownername"
                value={formik.values.ownername}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                placeholder="Enter Your  Name"
                sx={{ width: "100%" }}
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold fs-13">
                {formik.touched.ownername && formik.errors.ownername}
              </span>
            </div>
            <div className="col">

              {/* <h5 className="mb-2 font-weight-bold">Institute Registration Number</h5> */}
              <Input
                variant="soft"
                name="instituteRegistrationNumber"
                id="instituteRegistrationNumber"
                type="text"
                className="form-control form--control"
                errorhandle="Pl. fill this field"
                onBlur={formik.handleBlur}
                placeholder="Institute Registration Number"
                sx={{ width: "100%" }}
                value={formik.values.instituteRegistrationNumber}
                onChange={formik.handleChange}
              />
              <span className="text-danger font-weight-bold fs-13">
                {formik.touched.instituteRegistrationNumber &&
                  formik.errors.instituteRegistrationNumber}
              </span>
            </div>
          </div>

          <div className="row ">
            <div className="col mb-2 ">
              {/* <h5 className="mb-2 font-weight-bold ">Enter Your Website</h5> */}
              <Input
                variant="soft"
                type="text"
                id="website"
                name="website"
                value={formik.values.website}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="form-control form--control"
                placeholder="Enter Your Website"
                sx={{ width: "100%" }}
                errorhandle="Pl. fill this field"
              />
              <span className="text-danger font-weight-bold fs-13">
                {formik.touched.website && formik.errors.website}
              </span>
            </div>
          </div>
          <div className=" mb-3">
            <h6 className="font-weight-bold  mb-2">Date of Establishment</h6>
            <Input
              placeholder="Date of Establishment "
              variant="soft"
              sx={{ width: "100%" }}
              size="lg"
              type="date"
              className="mb-3"
              id="establishmentDate"
              name="establishmentDate"
              value={formik.values.establishmentDate}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />

            <span className="text-danger font-weight-bold fs-13">
              {formik.touched.establishmentDate &&
                formik.errors.establishmentDate}
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-end">
            <Button
              variant="outlined"
              fullWidth
              color="primary"
              type="submit"
              disabled={!formik.isValid}
            // onClick={() => {
            //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
            //   handleParentSubmit();
            // }}
            >
              {/* {activeStep === stepsComponents.length - 1 ? "Finish" : "Next"} */}
              Next
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default InstituteDetail;

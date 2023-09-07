import {
  Box,
  Checkbox,
  Chip,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
} from "@mui/joy";
import React from "react";

import Autocomplete, { createFilterOptions } from "@mui/joy/Autocomplete";
import AutocompleteOption from "@mui/joy/AutocompleteOption";
import FormControl from "@mui/joy/FormControl";
import CheckIcon from "@mui/icons-material/Check";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Button from "@mui/joy/Button";

import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { useState } from "react";
import { useEffect } from "react";
const filter = createFilterOptions();
const top100Jobs = [
  { title: "Web Developer" },
  { title: "Full Stack Developer" },
  { title: "Front End Developer" },
  { title: "Back End Developer" },
  { title: "Software Engineer" },
  { title: "UI/UX Designer" },
  { title: "Data Scientist" },
  { title: "Product Manager" },
  { title: "DevOps Engineer" },
  { title: "Mobile App Developer" },
  { title: "Machine Learning Engineer" },
  { title: "Quality Assurance Analyst" },
  { title: "Cloud Solutions Architect" },
  { title: "Cybersecurity Analyst" },
  { title: "Database Administrator" },
  { title: "Network Engineer" },
  { title: "Business Analyst" },
  { title: "Digital Marketing Specialist" },
  { title: "IT Support Specialist" },
  { title: "Systems Analyst" },
  { title: "Game Developer" },
  { title: "Project Manager" },
  { title: "Technical Writer" },
  { title: "IT Consultant" },
  { title: "User Researcher" },
  { title: "Automation Engineer" },
  { title: "Data Analyst" },
  { title: "Artificial Intelligence Engineer" },
  { title: "Blockchain Developer" },
  { title: "Embedded Systems Engineer" },
  { title: "Graphic Designer" },
  { title: "Video Editor" },
  { title: "SEO Specialist" },
  { title: "UX/UI Researcher" },
  { title: "Network Administrator" },
  { title: "Software Architect" },
  { title: "Web Designer" },
  { title: "Product Designer" },
  { title: "E-commerce Specialist" },
  { title: "UI Designer" },
  { title: "Interaction Designer" },
  { title: "Information Security Analyst" },
  { title: "Data Engineer" },
  { title: "Content Strategist" },
  { title: "Scrum Master" },
  { title: "AI Ethics Specialist" },
  { title: "AR/VR Developer" },
  { title: "IT Manager" },
  { title: "Network Security Engineer" },
  { title: "System Administrator" },
  { title: "Chatbot Developer" },
  { title: "Digital Analyst" },
  { title: "Software Developer" },
  { title: "Mobile Application Designer" },
  { title: "Data Privacy Officer" },
  { title: "IT Trainer" },
  { title: "Quantum Computing Engineer" },
  { title: "Cloud Engineer" },
  { title: "Automation Specialist" },
  { title: "IT Auditor" },
  { title: "Virtual Reality Developer" },
  { title: "Usability Analyst" },
  { title: "Firmware Engineer" },
  { title: "Technical Illustrator" },
  { title: "IT Coordinator" },
  { title: "Content Manager" },
  { title: "Digital Content Creator" },
  { title: "Software Tester" },
  { title: "Mobile Application Tester" },
  { title: "IT Analyst" },
  { title: "Network Analyst" },
  { title: "AI Trainer" },
  { title: "Cloud Solutions Engineer" },
  { title: "Blockchain Specialist" },
  { title: "User Interface Designer" },
  { title: "Network Technician" },
  { title: "User Experience Researcher" },
  { title: "Cybersecurity Consultant" },
  { title: "Software Development Manager" },
  { title: "Web Application Developer" },
  { title: "Data Visualization Specialist" },
  { title: "Game Designer" },
  { title: "Product Owner" },
  { title: "Software Quality Assurance Engineer" },
  { title: "IT Security Manager" },
  { title: "App Developer" },
  { title: "Network Manager" },
  { title: "Machine Learning Specialist" },
  { title: "Digital Transformation Consultant" },
];

function CompanyName() {
  // For Job Title
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: "",
      year: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: "",
    year: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };
  const [inputStyles, setInputStyles] = useState({
    width: "100%",
    boxSizing: "border-box",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setInputStyles({
          ...inputStyles,
          maxWidth: "100%",
        });
      } else {
        setInputStyles({
          ...inputStyles,
          maxWidth: "50%",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <div className="mb-4">
          <FormLabel className="font-weight-bold mb-1">
            Company you're hiring for{" "}
            <strong className="text-danger fs-18"> *</strong>
          </FormLabel>
          <Input
            fullWidth
            variant="outlined"
            placeholder="Enter Your Company Name"
          ></Input>
        </div>
        <div className="mb-4">
          <FormLabel className="font-weight-bold mb-1">
            Job title / Job role{" "}
            <strong className="text-danger fs-18"> *</strong>
          </FormLabel>
          <FormControl id="free-solo-dialog-demo">
            <Autocomplete
              placeholder="Enter Your Job Role Name"
              sx={{ width: "50%" }}
              variant="outlined"
              value={value}
              style={inputStyles}
              onChange={(event, newValue) => {
                if (typeof newValue === "string") {
                  // timeout to avoid instant validation of the dialog's form.
                  setTimeout(() => {
                    toggleOpen(true);
                    setDialogValue({
                      title: newValue,
                      year: "",
                    });
                  });
                } else if (newValue && newValue.inputValue) {
                  toggleOpen(true);
                  setDialogValue({
                    title: newValue.inputValue,
                    year: "",
                  });
                } else {
                  setValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== "") {
                  filtered.push({
                    inputValue: params.inputValue,
                    title: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              options={top100Jobs}
              getOptionLabel={(option) => {
                // e.g value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.title;
              }}
              freeSolo
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderOption={(props, option) => (
                <AutocompleteOption {...props}>
                  {option.title}
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
                  Add a new film
                </Typography>
                <Typography
                  id="basic-modal-dialog-description"
                  mt={0.5}
                  mb={2}
                  textColor="text.tertiary"
                >
                  Did you miss any film in our list? Please, add it!
                </Typography>
                <Stack spacing={2}>
                  <FormControl id="name">
                    <FormLabel>Title</FormLabel>
                    <Input
                      autoFocus
                      fullWidth
                      variant="outlined"
                      type="text"
                      value={dialogValue.title}
                      onChange={(event) =>
                        setDialogValue({
                          ...dialogValue,
                          title: event.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <FormControl id="year">
                    <FormLabel>year</FormLabel>
                    <Input
                      type="number"
                      fullWidth
                      variant="outlined"
                      value={dialogValue.year}
                      onChange={(event) =>
                        setDialogValue({
                          ...dialogValue,
                          year: event.target.value,
                        })
                      }
                    />
                  </FormControl>
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
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
        </div>
      </div>
    </>
  );
}
function TypeOfJob() {
  const [selected, setSelected] = React.useState("");
  return (
    <>
      <div>
        <FormLabel className="font-weight-bold mb-2">
          Type of Job <strong className="text-danger fs-18"> *</strong>
        </FormLabel>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <Box>
            <RadioGroup
              name="best-movie"
              aria-labelledby="best-movie"
              orientation="horizontal"
              sx={{ flexWrap: "wrap", gap: 1 }}
            >
              {["Part Time", "Full Time", "Both(Part Time And Full Time)"].map(
                (name) => {
                  const checked = selected === name;
                  return (
                    <Chip
                      key={name}
                      variant="plain"
                      color={checked ? "primary" : "neutral"}
                      startDecorator={
                        checked && (
                          <CheckIcon
                            sx={{ zIndex: 1, pointerEvents: "none" }}
                          />
                        )
                      }
                    >
                      <Radio
                        variant="outlined"
                        color={checked ? "primary" : "neutral"}
                        disableIcon
                        overlay
                        label={name}
                        value={name}
                        checked={checked}
                        onChange={(event) => {
                          if (event.target.checked) {
                            setSelected(name);
                          }
                        }}
                      />
                    </Chip>
                  );
                }
              )}
            </RadioGroup>
          </Box>
        </Box>
        <Checkbox label="This is a night shift job" color="neutral" />
      </div>
    </>
  );
}

function Location() {
  const [Locationselected, setLocationSelected] = React.useState("");
  return (
    <>
      <div className="mb-4">
        <h4 className="font-weight-bold">Location</h4>
        <p className="text-dark">
          Let candidates know where they will be working from.
        </p>
      </div>
      <FormLabel className="font-weight-bold mb-2">
        Work location type<strong className="text-danger fs-18"> *</strong>
      </FormLabel>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <Box>
          <RadioGroup
            name="best-movie"
            aria-labelledby="best-movie"
            orientation="horizontal"
            sx={{ flexWrap: "wrap", gap: 1 }}
          >
            {["Work From Office", "Work From Home", "Field Job"].map((name) => {
              const checked = Locationselected === name;
              return (
                <Chip
                  key={name}
                  variant="plain"
                  color={checked ? "info" : "neutral"}
                >
                  <Radio
                    variant="outlined"
                    color={checked ? "primary" : "neutral"}
                    disableIcon
                    overlay
                    label={name}
                    value={name}
                    checked={checked}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setLocationSelected(name);
                      }
                    }}
                  />
                </Chip>
              );
            })}
          </RadioGroup>
        </Box>
      </Box>
      <Checkbox
        label="This is a night shift job "
        className="mb-3"
        color="neutral"
      />
      <div className="mb-3">
        <FormLabel className="font-weight-bold mb-2">
          Office address / landmark{" "}
          <strong className="text-danger fs-18"> *</strong>
        </FormLabel>
        <Input
          fullWidth
          variant="outlined"
          placeholder="Enter Office Address"
        ></Input>
      </div>
    </>
  );
}
function Compensation() {
  const [perkselected, setperkSelected] = React.useState([]);
  const [payselected, setpaySelected] = React.useState("");
  const [inputStyles, setInputStyles] = useState({
    width: "100%",
    boxSizing: "border-box",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setInputStyles({
          ...inputStyles,
          maxWidth: "100%",
        });
      } else {
        setInputStyles({
          ...inputStyles,
          maxWidth: "50%",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <div className="mb-4">
          <h4 className="font-weight-bold">Compensation</h4>
          <p>
            Job postings with right salary & incentives will help you find the
            right candidates.
          </p>
        </div>
        <div className="mb-3">
          <FormLabel className="font-weight-bold mb-2">
            What is the pay type?{" "}
            <strong className="text-danger fs-18"> *</strong>
          </FormLabel>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Box>
              <RadioGroup
                name="best-movie"
                aria-labelledby="best-movie"
                orientation="horizontal"
                sx={{ flexWrap: "wrap", gap: 1 }}
              >
                {["Fixed Only", "Fixed + Incetive", "Incetive Only"].map(
                  (name) => {
                    const checked = payselected === name;
                    return (
                      <Chip
                        key={name}
                        variant="plain"
                        color={checked ? "info" : "neutral"}
                      >
                        <Radio
                          variant="outlined"
                          color={checked ? "primary" : "neutral"}
                          disableIcon
                          overlay
                          label={name}
                          value={name}
                          checked={checked}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setpaySelected(name);
                            }
                          }}
                        />
                      </Chip>
                    );
                  }
                )}
              </RadioGroup>
            </Box>
          </Box>
        </div>
        <div className="mb-3">
          <FormLabel className="font-weight-bold mb-2">
            Fixed salary / month{" "}
            <strong className="text-danger fs-18"> *</strong>
          </FormLabel>
          <Input
            sx={{ width: "50%" }}
            variant="outlined"
            style={inputStyles}
            placeholder="Enter Office Salary"
            type="number"
          ></Input>
        </div>
        <div className="mb-3">
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box>
              <FormLabel className="font-weight-bold mb-2">
                Do you offer any additional perks ?
              </FormLabel>
              <Box
                role="group"
                aria-labelledby="fav-movie"
                sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                {[
                  "Weekly Payout",
                  "Overtime Pay",
                  "Joining Bonus",
                  "Annual Bonus",
                  "PF",
                  "Travel Allowance (TA)",
                  "Petrol Allowance",
                  "Mobile Allowance",
                  "Internet Allowance",
                  "Laptop",
                  "Health Insurance",
                ].map((name) => {
                  const checked = perkselected.includes(name);
                  return (
                    <Chip
                      key={name}
                      variant="plain"
                      color={checked ? "primary" : "neutral"}
                      startDecorator={
                        checked && (
                          <CheckIcon
                            sx={{ zIndex: 1, pointerEvents: "none" }}
                          />
                        )
                      }
                    >
                      <Checkbox
                        variant="outlined"
                        color={checked ? "primary" : "neutral"}
                        disableIcon
                        overlay
                        label={name}
                        checked={checked}
                        onChange={(event) => {
                          setperkSelected((names) =>
                            !event.target.checked
                              ? names.filter((n) => n !== name)
                              : [...names, name]
                          );
                        }}
                      />
                    </Chip>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

function Additional() {
  const [joiningSelect, setjoiningSelected] = React.useState([]);
  const [inputStyles, setInputStyles] = useState({
    width: "100%",
    boxSizing: "border-box",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setInputStyles({
          ...inputStyles,
          maxWidth: "100%",
        });
      } else {
        setInputStyles({
          ...inputStyles,
          maxWidth: "50%",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>
        <div className="mb-4">
          <div>
            <FormLabel className="font-weight-bold mb-2">
              Is there any joining fee or deposit required from the candidate?{" "}
              <strong className="text-danger fs-18"> *</strong>
            </FormLabel>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Box>
                <RadioGroup
                  name="best-movie"
                  aria-labelledby="best-movie"
                  orientation="horizontal"
                  sx={{ flexWrap: "wrap", gap: 1 }}
                >
                  {["Yes", "No"].map((name) => {
                    const checked = joiningSelect === name;
                    return (
                      <Chip
                        key={name}
                        variant="plain"
                        color={checked ? "info" : "neutral"}
                      >
                        <Radio
                          variant="outlined"
                          color={checked ? "primary" : "neutral"}
                          disableIcon
                          overlay
                          label={name}
                          value={name}
                          checked={checked}
                          onChange={(event) => {
                            if (event.target.checked) {
                              setjoiningSelected(name);
                            }
                          }}
                        />
                      </Chip>
                    );
                  })}
                </RadioGroup>
              </Box>
            </Box>
            <div>
              <FormLabel className="font-weight-bold mb-2">
                Fee amount <strong className="text-danger fs-18"> *</strong>
              </FormLabel>
              <Input
                style={inputStyles}
                sx={{ width: "50%" }}
                variant="outlined"
                placeholder="₹ 1000"
                type="number"
              ></Input>

              <FormLabel className="font-weight-bold mb-2 mt-3">
                What is this fee for?{" "}
                <strong className="text-danger fs-18"> *</strong>
              </FormLabel>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <Box>
                  <RadioGroup
                    name="best-movie"
                    aria-labelledby="best-movie"
                    orientation="horizontal"
                    sx={{ flexWrap: "wrap", gap: 1 }}
                  >
                    {[
                      "Asset/Inventory Charge",
                      "Security Deposit(Refundable)",
                      "Registeration/Training Fees",
                      "Commission",
                      "IRDA Exam",
                      "Other Reason",
                    ].map((name) => {
                      const checked = joiningSelect === name;
                      return (
                        <Chip
                          key={name}
                          variant="plain"
                          color={checked ? "info" : "neutral"}
                        >
                          <Radio
                            variant="outlined"
                            color={checked ? "primary" : "neutral"}
                            disableIcon
                            overlay
                            label={name}
                            value={name}
                            checked={checked}
                            onChange={(event) => {
                              if (event.target.checked) {
                                setjoiningSelected(name);
                              }
                            }}
                          />
                        </Chip>
                      );
                    })}
                  </RadioGroup>
                </Box>
              </Box>
              <FormLabel className="font-weight-bold mb-2">
                When should the fee be paid?{" "}
                <strong className="text-danger fs-18"> *</strong>
              </FormLabel>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <Box>
                  <RadioGroup
                    name="best-movie"
                    aria-labelledby="best-movie"
                    orientation="horizontal"
                    sx={{ flexWrap: "wrap", gap: 1 }}
                  >
                    {[
                      "Before The Interview",
                      "After Job Confirmation",
                      "Deducted from Salary",
                    ].map((name) => {
                      const checked = joiningSelect === name;
                      return (
                        <Chip
                          key={name}
                          variant="plain"
                          color={checked ? "info" : "neutral"}
                        >
                          <Radio
                            variant="outlined"
                            color={checked ? "primary" : "neutral"}
                            disableIcon
                            overlay
                            label={name}
                            value={name}
                            checked={checked}
                            onChange={(event) => {
                              if (event.target.checked) {
                                setjoiningSelected(name);
                              }
                            }}
                          />
                        </Chip>
                      );
                    })}
                  </RadioGroup>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function JobDetail() {
  return (
    <div className="p-1 ml-3">
      <div>
        <div className="shadow-sm p-3 bg-light mb-3">
          <div className="text-start mb-2 " style={{ lineHeight: "17px" }}>
            <h4 className="font-weight-bold ">Job Detail</h4>
            <p className="fs-13 text-black font-weight-bold">
              We use this information to find the best candidates for the job.
            </p>
            <p className="text-danger fs-15 mb-4 font-weight-bold">
              <strong className="text-danger fs-20"> *</strong>Marked fields are
              mandatory
            </p>
            <CompanyName />
            <TypeOfJob />
          </div>
        </div>
        <div className="mb-3 shadow-sm p-3 bg-light">
          <div>
            <Location />
          </div>
        </div>
        <div className="mb-3 shadow-sm p-3 bg-light">
          <div>
            <Compensation />
          </div>
        </div>
        <div className="mb-3 shadow-sm p-3 bg-light">
          <div>
            <Additional />
          </div>
        </div>

        <div className="p-3 d-flex align-content-center justify-content-center">
          <Button sx={{ width: "200px", backgroundColor: "#0faab7" }}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;

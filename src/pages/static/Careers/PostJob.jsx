import React, { useEffect, useState } from "react";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/joy/Checkbox";
import PaymentsIcon from "@mui/icons-material/Payments";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import RadioGroup from "@mui/joy/RadioGroup";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Apartment from "@mui/icons-material/Apartment";
import Radio from "@mui/joy/Radio";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/joy/Box";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { selectClasses } from "@mui/joy/Select";
import { Autocomplete, AutocompleteOption, FormControl, FormLabel, Modal, ModalDialog, Typography, createFilterOptions } from "@mui/joy";
import ReactQuill from "react-quill";
import "./components/Css/Careers.css";
import { useFormik } from "formik";
import { useGlobalContext } from 'global/context';
import { Link, useNavigate } from "react-router-dom";
import { CloseRounded } from "@mui/icons-material";
import { toast } from "react-hot-toast";


const StartTime = dayjs().set('hour', 10).startOf('hour');

const endTime = dayjs().set('hour', 10).startOf('hour');
const nineAM = dayjs().set('hour', 9).startOf('hour');


const isWeekend = (time) => {
  // Custom logic to check if the given time is a weekend
  // Replace this with your own implementation
  return time.day() === 6 || time.day() === 0; // Saturday or Sunday
};

function PostJob() {
  const { api, userData } = useGlobalContext();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [textQ, setTextQ] = useState("");
  const [chips, setChips] = useState([]);

  const [qualifications, setQualifications] = useState({
    degree: "",
    subject: "",
    year: ""
  });



  const [employmentType, setEmploymentType] = useState([]);

  const [jobDescription, setJobDescription] = useState();

  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [jobCategory, setJobCategory] = useState(null);

  const [open, toggleOpen] = React.useState(false);
  const filter = createFilterOptions();

  const getcategories = async () => {
    try {
      const res = await api.get('/app/jobs/categories');
      if (res?.status === 200) {
        console.log("Job Categories:", res?.data);
        setCategories(res?.data);
      }
    } catch (err) {
      console.log("Job Categories:", err);
    }
  }

   //Autocomplete Box Component methods start
   const handleClose = () => {
    setDialogValue({
      name: "",
      description: "",
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
    description: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategoryName = dialogValue.name;


    api
      .post(`/app/jobs/category`, { name: newCategoryName, description: dialogValue?.description })
      .then((res) => {
        console.log(res);
        // setCategories((prevData) => {
        //   return [...prevData, { id: res?.data?.id, name: newCategoryName }];
        // });
        getcategories();
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose();
  };
  //Autocomplete Box Component methods end

  useEffect(() => {
    getcategories();
    console.log("Job Categories:", categories);
  }, []);

  const handleClickQ = () => {
    if (textQ.trim() !== "") {
      setQualifications((prevQualifications) => [...prevQualifications, textQ]);
      setTextQ("");
    }
  };

  const handleDeleteQ = (qualificationToDelete) => {
    setQualifications((prevQualifications) =>
      prevQualifications.filter(
        (qualification) => qualification !== qualificationToDelete
      )
    );
  };

  const handleClick = () => {
    if (text.trim() !== "") {
      setChips((prevChips) => [...prevChips, text]);
      setText("");
    }
  };

  const handleDelete = (chipToDelete) => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };

  const inputRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: null,
      job_title: "",
      job_description: "",
      employment_type: employmentType,
      work_schedule: "",
      start_time: "",
      end_time: "",
      salary_range: "",
      is_negotiable: true,
      subjects: [],
      minimum_qualification: qualifications,
      experience: "0-2 Years",
      job_location: "",
      designation: "Teacher",
      vacancies: 1,
      special_note: ""
    },
    onSubmit: async (values) => {
      values = {
        ...values,
        work_schedule: { start_time: values.start_time, end_time: values.end_time },
        minimum_qualification: qualifications,
        subjects: chips,
        employment_type: employmentType,
        job_description: jobDescription,
        institute_id: userData?.id,
        category_id: jobCategory?.id || null,
      }
      console.log("Emp Type: ", employmentType);
      console.log("Post Job Submitted with values: ", values);

      try {
        const res = await api.post(`/app/jobs/post`, values);
        if (res?.status === 200) {
          console.log("Success: ", res);
          navigate('/institute/jobs');
          toast.success("Job Posted Successfully");
        }
      } catch (err) {
        console.log(err);
        toast.error("Error while posting job");
      }

    }
  });

  const [value, setValue] = React.useState('dog');
  const action = React.useRef(null);

  return (
    <>
      <div>
        <div className="container mt-lg-2 mb-5 p-5 position-relative bg-light shadow rounded rounded-sm-0 "
          style={{ backgroundImage: "linear-gradient(45deg, #472fcb, #00a4a5)" }}
        >
          <h1 className="fs-60 fw-bold mb-3 text-center text-white">
            {" "}
            Post a new job{" "}
          </h1>
          <h5 className="fs-25 font-weight-bold text-bold mb-3 text-center text-white">
            Please fill out the following fields below <br />  to create a new job and submit it.

          </h5>
          <div className="d-flex align-items-end justify-content-center">

            <div className="text-right me-4 top-0 m-2 ">
              <Link
                to="/institute/dashboard"
                className="btn border-2  theme-btn bg-light text-dark rounded border me-4 font-weight-bold "
              >
                Go to Dashboard
              </Link>
            </div>
          </div>

        </div>
        <div className="d-flex flex-column align-items-center justify-content-between flex-wrap mb-5">
          <div className="d-flex align-items-center">
            <h1 className=" fw-bold text-info mb-3">Choose a Category</h1>
          </div>
          {/* <div className="d-flex align-items-center">
            <Select
              fullWidth
              action={action}
              size="lg"
              value={value}
              color="info"
              placeholder="Select cat…"
              onChange={(e, newValue) => {
                setValue(newValue);
                setCategoryId(e?.target?.id);
              }}
              {...(value && {
                // display the button and remove select indicator
                // when user has selected a value
                endDecorator: (
                  <IconButton
                    size="sm"
                    variant="plain"
                    color="info"
                    onMouseDown={(event) => {
                      // don't open the popup when clicking on this button
                      event.stopPropagation();
                    }}
                    onClick={() => {
                      setValue(null);
                      action.current?.focusVisible();
                    }}
                  >
                    <CloseRounded color="info" />
                  </IconButton>
                ),
                indicator: null,
              })}
              sx={{ minWidth: "300px", border: 'none', fontSize: "24px" }}
              className="shadow-lg"
            >
              {
                categories?.map(category => (
                  <Option value={category?.name} key={category?.id} id={category?.id}>{category?.name}</Option>
                ))
              }

            </Select>
          </div> */}
          <div className="d-flex align-items-center">
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
                placeholder="Select Category"
                size="lg"
                id="jobCategory"
                name="jobCategory"
                fullWidth
                value={jobCategory}
                onChange={(event, newValue) => {
                  if (typeof newValue === "string") {
                    // timeout to avoid instant validation of the dialog's form.
                    setTimeout(() => {
                      toggleOpen(true);
                      setDialogValue({
                        name: newValue,
                        description: "",
                      });
                    });
                  } else if (newValue && newValue.inputValue) {
                    toggleOpen(true);
                    setDialogValue({
                      name: newValue.inputValue,
                      description: "",
                    });
                  } else {
                    setJobCategory(newValue);
                    formik.setFieldValue("jobCategory", newValue);
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
                options={categories}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  return option.name; // Assuming the field name is "name" in your categories array
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
                   {option.name}
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
                    Add a new Job category
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
                    <FormControl id="description">
                      <FormLabel>Description</FormLabel>
                      <Input
                        
                        type="text"
                        value={dialogValue.description}
                        onChange={(event) =>
                          setDialogValue({
                            ...dialogValue,
                            description: event.target.value,
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
          </div>
        </div>
        <div className="container pt-5">

          <div className="row row-cols-1 row-cols-lg-2 ">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Job Title</h5>
              <p className="font-weight-bold">
                A job title must describe one position only
              </p>
            </div>
            <div className="col">
              <Input
                placeholder="e.g. 'Software Developer'"
                name="job_title"
                value={formik.values.job_title}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Job description</h5>
              <p className="font-weight-bold">
                Provide a short description about the job. Keep <br></br>it
                short and to the point.
              </p>
            </div>
            <div className="col">
              {/* <Textarea minRows={8} placeholder="Description" /> */}
              <ReactQuill className="rounded shadow"
                placeholder="Write description"
                name="job_description"
                value={jobDescription}
                onChange={setJobDescription}
              />
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Employment Type</h5>
            </div>
            <div className="col">
              <div
                className="shadow rounded"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Checkbox className="mt-1 " label="Part-Time"
                  name="employment_type"
                  value={formik.values.employment_type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEmploymentType([...employmentType, "Part Time"]);
                    } else {
                      setEmploymentType(employmentType.filter(e => e !== "Part Time"));
                    }
                  }}
                />
              </div>
              <div
                className="shadow rounded"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Checkbox className="mt-1 " label="Full-Time"
                  name="employment_type"
                  value={formik.values.employment_type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEmploymentType([...employmentType, "Full-Time"]);
                    } else {
                      setEmploymentType(employmentType.filter(e => e !== "Full-Time"));
                    }
                  }}
                />
              </div>
              <div
                className="shadow rounded"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Checkbox className="mt-1 " label="Guest Lecturer"
                  name="employment_type"
                  value={formik.values.employment_type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEmploymentType([...employmentType, "Guest Lecturer"]);
                    } else {
                      setEmploymentType(employmentType.filter(e => e !== "Guest Lecturer"));
                    }
                  }}
                />
              </div>
              <div
                className="shadow rounded"
                style={{
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Checkbox className="mt-1 " label="Online"
                  name="employment_type"
                  value={formik.values.employment_type}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setEmploymentType([...employmentType, "Online"]);
                    } else {
                      setEmploymentType(employmentType.filter(e => e !== "Online"));
                    }
                  }}
                />
              </div>
              {/* <div
                style={{
                  border: "1px solid #d6d6d6",
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              >
                <Checkbox className="mt-1 " label="Negotiable" />
              </div> */}
            </div>
          </div>
        </div>
        <hr></hr>
        {/* <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Job Requirment</h5>
              <p className="font-weight-bold">
                Provide a short description about the Requirment. Keep <br></br>
                it short and to the point.
              </p>
            </div>
            <div className="col">
              <Textarea minRows={8} placeholder="Description" />
            </div>
          </div>
        </div>
        <hr></hr> */}

        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Working Schedule</h5>
              <p className="font-weight-bold">
                You can pick Time For work schedule
              </p>
            </div>
            <div className="col">
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'DateTimePicker']}>
                  <div className="row m-2">
                    <div className="col ">

                      <DemoItem label="Time Start" >
                        <TimePicker defaultValue={endTime} minTime={nineAM} />
                      </DemoItem>  </div>
                    <div className="col">


                      <DemoItem label="Time End">
                        <TimePicker defaultValue={StartTime} minTime={nineAM} />
                      </DemoItem></div>
                  </div>
                </DemoContainer>
              </LocalizationProvider> */}
              <div className="row">
                <div className="col">
                  <FormControl>
                    <FormLabel >Start Time</FormLabel>
                    <Input type="time"
                      name="start_time"
                      value={formik.values.start_time}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </div>
                <div className="col">

                  <FormControl>
                    <FormLabel >End Time</FormLabel>
                    <Input type="time"
                      name="end_time"
                      value={formik.values.end_time}
                      onChange={formik.handleChange}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-4 mb-5 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Salary</h5>
              <p className="font-weight-bold">
                Choose How You Prefer to pay for this job
              </p>
            </div>
            <div className="col">

              <div className="row ">
                <div className="col mt-10px  mb-4">
                  <Input
                    placeholder="Amount Youn Want To Pay…"
                    name="salary_range"
                    value={formik.values.salary_range}
                    onChange={formik.handleChange}
                  />
                </div>
                {/* <div className="col mt-10px mb-4">
                  <Select placeholder="How You Want To Pay">
                    <Option value="dog">Yearly</Option>
                    <Option value="cat">Monthly</Option>
                    <Option value="fish">Weekly</Option>
                  </Select>
                </div> */}
              </div>
              <Checkbox
                label="Salery is Negotiable"
                variant="soft"
                defaultChecked
                name="is_negotiable"
                value={formik.values.is_negotiable}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <hr></hr>


        <div className="container mt-4 mb-5">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Add Subjects </h5>
              <p className="font-weight-bold ">
                Add all the subjects that your candidate should have expertised in
              </p>
            </div>
            <div className="col">
              <div>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",

                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Add Subject"
                    // inputProps={{ "aria-label": "search google maps" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    color="primary"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                    onClick={handleClick}
                  >
                    <AddIcon />
                  </IconButton>
                </Paper>
                <Stack direction="row" spacing={1} className="mt-3 w-50 ">
                  {chips.map((chip) => (
                    <Chip
                      key={chip}
                      label={chip}
                      variant="outlined"
                      onClick={() => console.log(`Clicked: ${chip}`)} // Add your custom click event handler
                      onDelete={() => handleDelete(chip)}
                    // sx={{ maxWidth: "100px" }} // Adjust the maximum width as per your requirements
                    />
                  ))}
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-4 mb-5 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold ">Minimum Qualification : </h5>
              <p className="font-weight-bold">
                This will be displayed on job page for candidates to see
              </p>
            </div>
            <div className="col ">
              <div className="row row-cols-3">
                <div className="col">
                  <Input placeholder="Degree"
                    value={qualifications?.degree}
                    onChange={(e) => setQualifications({ ...qualifications, degree: e.target.value })}
                  />
                </div>
                <div className="col">
                  <Input placeholder="Subject"
                    value={qualifications?.subject}
                    onChange={(e) => setQualifications({ ...qualifications, subject: e.target.value })}
                  />
                </div>
                <div className="col">
                  <Input placeholder="Year" type="month"
                    value={qualifications?.year}
                    onChange={(e) => setQualifications({ ...qualifications, year: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-4 ">
              <h5 className="font-weight-bold mb-3">Job Location</h5>
              {/* <p className="font-weight-bold">
                Provide a short description about the job. Keep <br></br>it
                short and to the point.
              </p> */}
            </div>
            <div className="col mb-3">
              <Input placeholder="Add Job Location"
                name="job_location"
                value={formik.values.job_location}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>

        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-4 ">
              <h5 className="font-weight-bold mb-3">Experience</h5>
              {/* <p className="font-weight-bold">
                Provide a short description about the job. Keep <br></br>it
                short and to the point.
              </p> */}
            </div>
            <div className="col mb-3">
              <Select
                placeholder="Select Years experience "
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
                name='experience'
                defaultValue={formik.values.experience}
                onChange={formik.handleChange}
              >
                <Option value="0-2 Years">0-2 years</Option>
                <Option value="2-5 Years">2-5 years</Option>
                <Option value="5+ Years">5+ years</Option>
              </Select>
            </div>
          </div>

        </div>
        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold mb-3">Designation</h5>
              {/* <p className="font-weight-bold">
                Provide a short description about the job. Keep <br></br>it
                short and to the point.
              </p> */}
            </div>

            <div className="col mb-3">
              <Select
                placeholder="Select a Designation"
                indicator={<KeyboardArrowDown />}
                sx={{
                  width: 240,
                  [`& .${selectClasses.indicator}`]: {
                    transition: "0.2s",
                    [`&.${selectClasses.expanded}`]: {
                      transform: "rotate(-180deg)",
                    },
                  },
                }}
                name='designation'
                defaultValue={formik.values.designation}
                onChange={formik.handleChange}
              >
                <Option value="Teacher">Teacher</Option>
                <Option value="Principal">Principal</Option>
                <Option value="Librarian">Librarian</Option>
                <Option value="School Counselor">School Counselor</Option>
              </Select>

            </div>
          </div>

        </div>
        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-4 ">
              <h5 className="font-weight-bold mb-3">No of Vacancies</h5>

            </div>
            <div className="col">
              <Stack spacing={1.5} >
                <Input
                  type="number"
                  placeholder="Add Vacancy"
                  defaultValue={1}
                  name="vacancies"
                  value={formik.values.vacancies}
                  onChange={formik.handleChange}
                />

              </Stack>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-4 ">
              <h5 className="font-weight-bold ">Contact Details</h5>
              <p className="font-weight-bold">
                Provide a contact details of the contact person for the position
              </p>
            </div>
            <div className="col">
              <Stack direction='row' spacing={1.5} >
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <Input
                  type="tel"
                  placeholder="Contact"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />

              </Stack>
            </div>
          </div>
        </div>
        <Divider />
        <div className="container mt-4 ">
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col mb-3 ">
              <h5 className="font-weight-bold">Spacial Note</h5>
              <p className="font-weight-bold">
                Provide a important note if applicable
              </p>
            </div>
            <div className="col">
              <Textarea
                minRows={4}
                placeholder="Note"
                name="special_note"
                value={formik.values.special_note}
                onChange={formik.handleChange}
              />

            </div>
          </div>
        </div>
        <hr></hr>
        <div></div>
        <div className="text-center  mt-5 mb-100px">
          {/* <Link></Link> */}
          <Button variant="soft" onClick={formik.handleSubmit}>
            Post a new job
          </Button>
        </div>
      </div>
    </>
  );
}

export default PostJob;

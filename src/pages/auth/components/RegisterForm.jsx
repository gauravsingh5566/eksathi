import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
// import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import Swal from "sweetalert2";
import * as yup from "yup";
import { Popup } from "../../../layout/Popup";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "global/context";
const RegisterForm = () => {
  const { api } = useGlobalContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [registeredId, setRegisteredId] = React.useState();
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getSkiils = async () => {
    try {
      let res = await api.get("/app/tags");
      if (res?.status === 200) {
        setSkills(res?.data?.tags);
        console.log("Skills: ", res?.data?.tags);
      } else {
        return [];
      }
    } catch (error) {
      console.log("Skills Error: ", error);
    }
  };

  useEffect(() => {
    getSkiils();
  }, []);

  //Formik
  const validationSchema = yup.object({
    first_name: yup.string().required("First name is required"),
    middle_name: yup.string(),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().required("Email address is required"),
    password: yup.string().required("Password is required"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Confirm password must match"),
  });
  const Formik = useFormik({
    initialValues: {
      profession: "",
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      education: "",
      contact: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      Popup("loading", "Submitting...");
      try {
        const res = await api.post("app/auth/signup", values);
        console.log(res);
        if (res.status == 200) {
          Popup("warning", res.data.message);
          setRegisteredId(res.data.userId);
        }
      } catch (error) {
        if (error.response.status === 409) {
          console.log(
            "data",
            error.response.data.message,
            error.response.data.desc
          );
          //   Popup(
          //     "warning",
          //     error.response.data.message,
          //     error.response.data.desc
          //   );

          Swal.fire({
            title: error.response.data.message,
            html: error.response.data.desc,
            showDenyButton: true,
            padding: "3em",
            showCancelButton: false,
            confirmButtonText: "Login",
            denyButtonText: `Reset Password`,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/auth/login");
            } else if (result.isDenied) {
              navigate("/auth/recover");
            }
          });
        } else {
          Popup("error", error.response.data.message);
        }
      }
    },
  });
  const OtpFormik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values, action) => {
      Popup("loading", "Submitting...");
      try {
        const res = await api.post(`/app/auth/verify-otp`, {
          ...values,
          userId: registeredId,
        });
        console.log(res);
        if (res.status == 200) {
          Popup("success", res.data.message);
          navigate("/profile");
        }
      } catch (error) {
        Popup("error", error.response.data.message);
      }
    },
  });
  const expertSubject = [
    { label: "Math", subject: "Math" },
    { label: "Bio", subject: "Bio" },
    { label: "English", subject: "English" },
    { label: "Physics", subject: "Physics" },
    { label: "Chemistry", subject: "Chemistry" },
    { label: "History", subject: "History" },
    { label: "Geography", subject: "Geography" },
    { label: "Economics", subject: "Economics" },
    { label: "Computer Science", subject: "Computer Science" },
    { label: "Art", subject: "Art" },
    { label: "Physical Education", subject: "Physical Education" },
    { label: "Social Studies", subject: "Social Studies" },
    { label: "Music", subject: "Music" },
    { label: "Foreign Languages", subject: "Foreign Languages" },
    { label: "Literature", subject: "Literature" },
    { label: "Business Studies", subject: "Business Studies" },
    { label: "Psychology", subject: "Psychology" },
    { label: "Sociology", subject: "Sociology" },
    { label: "Political Science", subject: "Political Science" },
    { label: "Environmental Science", subject: "Environmental Science" },
    // Aur aapke subjects aise hi jari rahenge...
  ];

  return (
    <>
      {!registeredId && (
        <form
          className="form-action-wrapper py-5 px-3 p-lg-5"
          onSubmit={Formik.handleSubmit}
        >
          <div className="form-group">
            <h3 className="fs-22 pb-3 fw-bold">Register to Eksathi</h3>
            <div className="divider">
              <span></span>
            </div>
          </div>
          <div>
            <div className="row row-cols-1">
              <div className="col d-flex align-items-center mb-3">
                {/* <>I am a {' '}</> */}
                <FormControl fullWidth>
                  <InputLabel id="i-am-a-label">I am a</InputLabel>
                  <Select
                    labelId="i-am-a-label"
                    id="profession"
                    name="profession"
                    value={Formik.values.profession}
                    label="I am a"
                    onChange={Formik.handleChange}
                  >
                    {/* <MenuItem value="">
                    <em>Choose any</em>
                  </MenuItem> */}
                    <MenuItem value={"student"}>Student</MenuItem>
                    <MenuItem value={"teacher"}>Teacher</MenuItem>
                    <MenuItem value={"professional"}>Professional</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className=" col mb-3 ">
                <Autocomplete
                  disablePortal
                  fullWidth
                  id="combo-box-demo"
                  options={expertSubject}
                  // sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Subject" />
                  )}
                />
              </div>

              {Formik.values.profession === "professional" ||
              Formik.values.profession === "teacher" ? (
                <div className="col d-flex align-items-center mb-3">
                  {/* <div>Expertise in {' '}</div> */}

                  <FormControl fullWidth>
                    <InputLabel id="expertise-in-label">
                      Expertise in
                    </InputLabel>
                    <Select
                      labelId="expertise-in-label"
                      id="skill"
                      name="skill"
                      value={Formik.values.skill}
                      label="Expertise in"
                      onChange={Formik.handleChange}
                    >
                      {skills?.map((expertise) => (
                        <MenuItem key={expertise?.id} value={expertise?.tag}>
                          {expertise?.tag}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              ) : (
                <div className="col d-flex align-items-center mb-3">
                  {/* <div>Highest Education {' '}</div> */}
                  <FormControl fullWidth>
                    <InputLabel id="highest-education-label">
                      Highest Education
                    </InputLabel>
                    <Select
                      labelId="highest-education-label"
                      id="education"
                      name="education"
                      value={Formik.values.education}
                      label="Highest Education"
                      onChange={Formik.handleChange}
                    >
                      <MenuItem value={"Below 8th Standard"}>
                        Below 8th Standard
                      </MenuItem>
                      <MenuItem value={"8th Standard"}>8th Standard</MenuItem>
                      <MenuItem value={"9th Standard"}>9th Standard</MenuItem>
                      <MenuItem value={"High School"}>High School</MenuItem>
                      <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                      <MenuItem value={"Diploma"}>Diploma</MenuItem>
                      <MenuItem value={"Polytechnic"}>Polytechnic</MenuItem>
                      <MenuItem value={"Graduation"}>Graduation</MenuItem>
                      <MenuItem value={"Post Graduation"}>
                        Post Graduation
                      </MenuItem>
                      <MenuItem value={"Doctorate"}>Doctorate</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
            {/* <label className="fs-14 text-black fw-medium lh-18">
              Full name
            </label> */}
            <Box
              component={"div"}
              className="row row-cols-1 row-cols-lg-3 g-2  mb-3"
            >
              <div className="col mb-2 mb-lg-0">
                <TextField
                  fullWidth
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  label="First Name"
                  value={Formik.values.first_name}
                  onChange={Formik.handleChange}
                  error={
                    Formik.touched.first_name &&
                    Boolean(Formik.errors.first_name)
                  }
                  helperText={
                    Formik.touched.first_name && Formik.errors.first_name
                  }
                />
              </div>
              <div className="col mb-2 mb-lg-0">
                <TextField
                  fullWidth
                  placeholder="Middle Name"
                  id="middle_name"
                  name="middle_name"
                  label="Middle Name"
                  value={Formik.values.middle_name}
                  onChange={Formik.handleChange}
                  error={
                    Formik.touched.middle_name &&
                    Boolean(Formik.errors.middle_name)
                  }
                  helperText={
                    Formik.touched.middle_name && Formik.errors.middle_name
                  }
                />
              </div>
              <div className="col mb-2 mb-lg-0">
                <TextField
                  placeholder="Last Name"
                  fullWidth
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  value={Formik.values.last_name}
                  onChange={Formik.handleChange}
                  error={
                    Formik.touched.last_name && Boolean(Formik.errors.last_name)
                  }
                  helperText={
                    Formik.touched.last_name && Formik.errors.last_name
                  }
                />
              </div>
            </Box>
          </div>
          {/* end form-group */}
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">Email</label> */}
            <TextField
              placeholder="Your Email Address"
              fullWidth
              label={"Email Address"}
              type={"email"}
              id="email"
              name="email"
              value={Formik.values.email}
              onChange={Formik.handleChange}
              error={Formik.touched.email && Boolean(Formik.errors.email)}
              helperText={Formik.touched.email && Formik.errors.email}
            />
          </div>
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">Contact Number</label> */}
            <TextField
              placeholder="Your Contact"
              fullWidth
              label={"Contact Number"}
              type={"tel"}
              id="contact"
              name="contact"
              value={Formik.values.contact}
              onChange={Formik.handleChange}
              error={Formik.touched.contact && Boolean(Formik.errors.contact)}
              helperText={Formik.touched.contact && Formik.errors.contact}
            />
          </div>
          {/* end form-group */}
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">
             Enter Your Password
              </label> */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                id="password"
                name="password"
                label="password"
                value={Formik.values.password}
                onChange={Formik.handleChange}
                error={
                  Formik.touched.password && Boolean(Formik.errors.password)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                // label="Password"
              />
              {Formik.touched.password && (
                <FormHelperText sx={{ color: "red" }}>
                  {Formik.errors.password}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          {/* end form-group */}
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">
              Confirm Password
            </label> */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm password
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirm_password"
                name="confirm_password"
                label="Confim Password"
                value={Formik.values.confirm_password}
                onChange={Formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {Formik.touched.confirm_password && (
                <FormHelperText sx={{ color: "red" }}>
                  {Formik.errors.confirm_password}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          <Button
            fullWidth
            type="submit"
            size="large"
            sx={{ p: 2 }}
            color="primary"
            variant="contained"
          >
            Register
          </Button>
          {/* end form-group */}
          <p className=" mt-3 pb-3">
            By clicking “Register”, you agree to our{" "}
            <Link to="/terms-of-service" className="text-color hover-underline">
              terms of conditions
            </Link>
            ,{" "}
            <Link to="/privacy-policy" className="text-color hover-underline">
              privacy policy
            </Link>
          </p>
          <p className="text-center fw-bold">
            Are you a Institute?{" "}
            <span>
              <Link to="/auth/institute/signup">Click here</Link>
            </span>
          </p>
        </form>
      )}
      {registeredId && (
        <form
          className="form-action-wrapper py-5"
          onSubmit={OtpFormik.handleSubmit}
        >
          <div className="form-group">
            <h3 className="fs-22 pb-3 fw-bold">Verify Otp</h3>
            <div className="divider">
              <span></span>
            </div>
          </div>
          <div className="form-group">
            <label className="fs-14 text-black fw-medium lh-18">
              One Time Password
            </label>
            <TextField
              fullWidth
              label={"Enter your OTP"}
              id="code"
              name="code"
              value={OtpFormik.values.code}
              onChange={OtpFormik.handleChange}
              error={OtpFormik.touched.code && Boolean(OtpFormik.errors.code)}
              helperText={OtpFormik.touched.code && OtpFormik.errors.code}
            />
          </div>
          <Button
            fullWidth
            type="submit"
            size="large"
            sx={{ p: 2 }}
            color="primary"
            variant="contained"
          >
            Verify
          </Button>
        </form>
      )}
    </>
  );
};

export default RegisterForm;

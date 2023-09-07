import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import { Popup } from "layout/Popup";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const { setUser, setToken, token, api, apiAuth } = useGlobalContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [registeredId, setRegisteredId] = useState(false);
  const endpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [timeRemaining, setTimeRemaining] = useState();
  // const [expirationTime, setExpirationTime] = useState();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  console.log("Location: " , location);
  //   Login Formik
  const LoginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      setEmail(values.email);
      setPassword(values.password);
      try {
        const res = await api.post("app/auth/signin", values);
        console.log(res);
        if (res.status == 200) {
          setUser(res.data.user);
          setToken(res.data.jwt);
          setAuthToken(res.data.jwt);
          localStorage.setItem('isLogin', true);
          // Popup("success", res.data.message);
          setRegisteredId(res.data.userId);
          navigate("/profile");
          if (location?.state?.redirectTo != null) {
            if (location?.state?.model === 'ask-question') {
              navigate(location?.state?.redirectTo, {
                state: {
                  open: true
                }
              });
            } else {
              navigate(location?.state?.redirectTo);
            }
            
          }
          window.reload();
        }
      } catch (error) {
        if (error.response.status === 403) {
          console.log("data", error.response);
          // Popup(
          //   "warning",
          //   error.response.data.message,
          //   error.response.data.desc
          // );
          toast.error(error.response.data.message);
          // setExpirationTime(error.response.data.expirationTime);
          setTimeRemaining(error.response.data.expirationTime);
          startTimeCounter(error.response.data.expirationTime);
          setRegisteredId(error.response.data.userId);
        } else {
          toast.error(error.response.data.message);
        }
      }
    },
  });

  //   OTP Verification
  const OtpFormik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values, action) => {
      Popup("loading", "Submitting...");
      values = { ...values, userId: registeredId };
      try {
        const res = await api.post(
          `/app/auth/verify-otp`,
          values
        );
        console.log(res);
        if (res.status == 200) {
          Popup("success", res.data.message);
          navigate("/auth/login");
          window.location.reload();
        }
      } catch (error) {
        Popup("error", error.response.data.message);

      }
    },
  });

  const resendOTP = async () => {
    try {
      const res = await axios.post(endpoint + "app/auth/send-otp", {
        email,
        password
      });
      console.log(res);
      if (res.status == 200) {
        Popup("success", res.data.message);
        // setExpirationTime(res.data.expirationTime);
        // setTimeRemaining(res.data.expirationTime);
        startTimeCounter(res.data.expirationTime);
      }
    } catch (error) {
      console.log(error);
      Popup("error", error.response.data.message);
    }
  };

  const startTimeCounter = (expirationTime) => {
    const interval = setInterval(() => {
      // Calculate time remaining
      const now = new Date().getTime();
      const expiration = new Date(expirationTime).getTime();
      const timeDiff = expiration - now;
      const newTimeRemaining = Math.max(0, timeDiff);

      // Calculate remaining time in minutes and seconds
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Update state with new time remaining
      setTimeRemaining({ minutes, seconds });

      // Stop interval if time has expired
      if (newTimeRemaining === 0) {
        clearInterval(interval);
      }
      console.log("Time remaining: ", newTimeRemaining);
    }, 1000);

    return () => clearInterval(interval);
  }

  return (
    <>
      {!registeredId && (
        <form
          onSubmit={LoginFormik.handleSubmit}
          className="form-action-wrapper px-3 px-lg-5 py-5"
        >
          <div className="form-group">
            <h3 className="fs-22 pb-3 fw-bold">Log in to Eksathi</h3>
            <div className="divider">
              <span></span>
            </div>
            <p className="pt-3">
              Enter your email address and login to your account.
            </p>
          </div>
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">Email</label> */}
            <TextField
              fullWidth
              placeholder="Your Email Address"
              label={"Email"}
              id="email"
              name="email"
              type={"email"}
              value={LoginFormik.values.email}
              onChange={LoginFormik.handleChange}
              error={
                LoginFormik.touched.email &&
                Boolean(LoginFormik.errors.email)
              }
              helperText={
                LoginFormik.touched.email && LoginFormik.errors.email
              }
            />
          </div>
          {/* end form-group */}
          {/* end form-group */}
          <div className="form-group">
            {/* <label className="fs-14 text-black fw-medium lh-18">Password</label> */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                placeholder="Your Password"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={LoginFormik.values.password}
                onChange={LoginFormik.handleChange}
                error={
                  LoginFormik.touched.password &&
                  Boolean(LoginFormik.errors.password)
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
                label="Password"
              />
              {LoginFormik.touched.password && (
                <FormHelperText sx={{ color: "red" }}>
                  {LoginFormik.errors.password}
                </FormHelperText>
              )}
            </FormControl>
          </div>
          {/* end form-group */}
          <div className="form-group d-flex align-items-center justify-content-between">
            <div className="custom-control custom-checkbox fs-14">
              <input
                type="checkbox"
                className="custom-control-input"
                id="rememberMe"
              />
              <label
                className="custom-control-label custom--control-label"
                for="rememberMe"
              >
                Remember me!
              </label>
            </div>
            <Link
              to="/auth/recover"
              className="btn-text fs-14 hover-underline fw-regular"
            >
              Forgot Password?
            </Link>
          </div>
          {/* end form-group */}
          <div className="form-group">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ p: 2 }}
              className="text-capitalize"
            >
              Log in <i className="la la-arrow-right icon ml-1"></i>
            </Button>
          </div>
          {/* end form-group */}
          <p className="text-center fw-bold">Are you a Institute? <span><Link to="/auth/institute/login" >Click here</Link></span></p>
          
        </form>
      )}
      {registeredId && (
        <>
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
              {/* <label className="fs-14 text-black fw-medium lh-18">
              One Time Password
            </label> */}
              <TextField
                fullWidth
                label={"Enter your OTP"}
                id="code"
                name="code"
                placeholder="Your 6 digit Secure OTP, Recieved on registered email."
                value={OtpFormik.values.code}
                onChange={OtpFormik.handleChange}
                error={OtpFormik.touched.code && Boolean(OtpFormik.errors.code)}
                helperText={OtpFormik.touched.code && OtpFormik.errors.code}
              />
            </div>
            {/* <p>Time remaining: {Math.floor(timeRemaining / 1000)} seconds</p> */}
            {/* <p>Time remaining: <span className="text-danger">{`${timeRemaining?.minutes}:${timeRemaining?.seconds}`}</span></p> */}
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
          <div className="text-center">
          
            {
              timeRemaining?.seconds >= 0 ?
                <p><span className="text-danger">{`${timeRemaining?.minutes}:${timeRemaining?.seconds}`}</span> left</p>
                : <button disabled={timeRemaining?.seconds <= 0 ? false : true} type="button" className="btn btn-link" onClick={resendOTP}>Resend OTP</button>
            }
            {/* OTP not recieved?  */}

          </div>
        </>
      )}
    </>
  );
};

export default LoginForm;

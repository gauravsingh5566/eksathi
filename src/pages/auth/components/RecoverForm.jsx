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
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const navigate = useNavigate();
  const {api} = useGlobalContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [registeredId, setRegisteredId] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //   Login Formik
  const LoginFormik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: async (values, action) => {
      Popup("loading", "Submitting...");
      try {
        const res = await api.post("/auth/register?type=0", values);
        console.log(res);
        if (res.status == 200) {
          Popup("success", res.data.message);
          setRegisteredId(res.data.userId);
        }
      } catch (error) {
        if (error.response.status === 409) {
          console.log(
            "data",
            error.response.data.message,
            error.response.data.desc
          );
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
              // navigate("/auth/login");
            } else if (result.isDenied) {
              // navigate("/auth/recover");
            }
          });
        } else {
          Popup("error", error.response.data.message);
        }
      }
    },
  });

  //   OTP Verification
  const OtpFormik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (values, action) => {
      Popup("loading", "Submitting...");
      try {
        const res = await api.post(
          `/auth/verify?userId=${registeredId}`,
          values
        );
        console.log(res);
        if (res.status == 200) {
          Popup("success", res.data.message);
          navigate("/auth/login");
        }
      } catch (error) {
        Popup("error", error.response.data.message);
      }
    },
  });
  return (
    <>
      {!registeredId && (
        <form className="form-action-wrapper py-5">
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
            <label className="fs-14 text-black fw-medium lh-18">Email</label>
            <TextField
              fullWidth
              label={"Enter your email address"}
              id="email"
              name="email"
              value={LoginFormik.values.email}
              onChange={LoginFormik.handleChange}
              error={
                LoginFormik.touched.email && Boolean(LoginFormik.errors.email)
              }
              helperText={LoginFormik.touched.email && LoginFormik.errors.email}
            />
          </div>
          {/* end form-group */}
          {/* end form-group */}
          <div className="form-group">
            <label className="fs-14 text-black fw-medium lh-18">Password</label>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Enter your password
              </InputLabel>
              <OutlinedInput
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
            <Button type="submit" fullWidth variant="contained" sx={{p:2}} className="text-capitalize">
              Log in <i className="la la-arrow-right icon ml-1"></i>
            </Button>
          </div>
          {/* end form-group */}
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
              id="otp"
              name="otp"
              value={OtpFormik.values.otp}
              onChange={OtpFormik.handleChange}
              error={OtpFormik.touched.otp && Boolean(OtpFormik.errors.otp)}
              helperText={OtpFormik.touched.otp && OtpFormik.errors.otp}
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

export default LoginForm;

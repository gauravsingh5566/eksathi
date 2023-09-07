import { Button, Divider, FormLabel, Input } from "@mui/joy";
import React, { useState } from "react";
import { Link, redirect, useHref } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useGlobalContext } from "global/context";
import OtpInstitute from "./OtpInstitute";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-hot-toast";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});
function SignInstitute() {
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const { setUser, setToken, token, api, apiAuth } = useGlobalContext();
  const [registeredId, setRegisteredId] = React.useState();
  const [otp, setOTP] = useState([""]);
  const inputRefs = useRef([]);

  const [showPassword, setShowPassword] = useState(false);
  // const href = useHref();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form Data", values);
        const res = await api.post("/v1/signup", values);
        console.log(res);
        if (res.status == 200) {
         
          setRegisteredId(res.data.userId);
          setState(true);
          navigate(`/auth/institute/login`); 
          toast.success('Register Successfully')
        } 
      } catch (error) {
        console.error("An error occurred during form submission:", error);
        // alert("User Already Register")
        // Handle the error here, for example, by displaying an error message to the user
        toast.error("Already Registered")
      }
    },
  });
  const OtpFormik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: async (values, action) => {
      let newotp = "";
      for (var i = 0; i < otp?.length; i++) {
        newotp += otp[i];
      }
      console.log("New OTp: ", newotp);
      try {
        const res = await api.post(`/app/auth/verify-otp`, {
          ...values,
          userId: registeredId,
          code: newotp,
        });
        console.log(res);
        if (res.status == 200) {
          alert("success", res.data.message);
          navigate("/onboarding");
        }
      } catch (error) {
        alert("Wrong Otp", error.response.data.message);
      }
    },
  });

  //   For Otp Form

  const handleChange = (e, index) => {
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value !== "") {
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      } else {
        inputRefs.current[index].blur();
      }
    } else {
      if (index > 0) {
        inputRefs?.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      inputRefs?.current[index - 1]?.focus();
    }
  };

  const handleGoogleOAuth = async () => {
    // console.log("Href:", href);
    try {
      toast.loading('Authenticating Google...');
      // const res = await api.get('/oauth2');
      // if (res.status === 200) {
      //   console.log('Google', res?.data);
      //   toast.dismiss();
      // }
      // href(`http://localhost:5000/oauth2`);
      window.location.replace(`${process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/"}oauth2`);
    } catch (e) {
      console.log('Error authenticating Google: ', e);
      toast.dismiss();
    }
  }

  return (
    <div className="container  ">
      <div className="row" hidden={state}>
        <div className="col-12 col-lg-6">
          <div className=" " style={{ marginTop: "12%" }}>
            <div
              className="rounded w-75 w-lg-50  align-items-center m-auto p-1 my-3"
              style={{


              }}
            >
              <h3 className="text-start mb-2 font-weight-bold">
                Create account
              </h3>
              <p className="text-start mb-3 fs-13 text-dark font-weight-bold ">
                Start your 30-day free trial. Cancel anytime.
              </p>

            
              <div className="d-flex flex-column justify-content-center mb-3 ">
              <Button
                    variant="outlined"
                    startDecorator={
                      <img
                        className=""
                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                        alt=""
                        style={{ width: "25px", height: "25px" }}
                      />
                    }
                    onClick={handleGoogleOAuth}
                  >

                    Sign up with Google
                  </Button>
               
              </div>
           
           <Divider className="my-4">OR</Divider>
              <form onSubmit={formik.handleSubmit}>
                <FormLabel className="font-weight-bold">Email*</FormLabel>
                <Input
                  placeholder="Enter your email"
                  variant="outlined"
                  color="white"
                  className="border mb-2"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error text-danger font-weight-bold mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}

                <FormLabel className="font-weight-bold">Password*</FormLabel>
                <Input
                type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  variant="outlined"
                  color="white"
                  className="border"
                  {...formik.getFieldProps("password")}
                  endDecorator={<i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error text-danger font-weight-bold mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
                <p className="mb-3 fs-14 text-dark font-weight-bold">
                  Must be at least 8 characters.
                </p>
                <Button
                  type="submit"
                  className="text-white mb-3"
                  color="info"
                  fullWidth
                  
                >
                  Create Account
                </Button>
              </form>
              <p className="text-center text-dark ">
                Already have an account?{" "}
                <strong style={{ textDecoration: "underline" }}>
                  <Link to="/auth/institute/login">Log in</Link>
                </strong>
              </p>
              <p className="text-center">Not a Institute? <span><Link to="/auth/register" >Click here</Link></span></p>
            </div>
          </div>
        </div>
        <div className="col p-0">
          <div className=" w-100">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt="logo"
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SignInstitute;

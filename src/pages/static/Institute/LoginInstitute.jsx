import { Button, Divider, FormLabel, Input } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Popup } from "layout/Popup";
import { useState } from "react";
import { useGlobalContext } from "global/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("required*"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

function LoginInstitute() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const { api, setUser, setToken } = useGlobalContext();

  const onSubmit = async (values) => {
    try {
      const res = await api.post("/v1/signin", values);

      if (res.status === 200) {
        // Navigate to institute-dashboard and pass user.id as a parameter
        if (res?.data?.user?.status === "Active") {
          setUser(res?.data?.user);
          setToken(res?.data?.jwt);

          localStorage.setItem("isLogin", true);
          setLoggedIn(true);
          toast.success("Welcome");
          navigate(`/institute/profile`);
        } else if (res?.data?.user?.status === "Onboarding") {
          setUser(res?.data?.user);
          setToken(res?.data?.jwt);

          localStorage.setItem("isLogin", true);
          setLoggedIn(true);
          toast.success("Welcome");
          navigate(`/institute/onboarding`);
        } else if (res?.data?.user?.status === "Suspended") {
          navigate(`/institute/suspended`);
        }
      }
    } catch (error) {
      console.log("Error during login:", error);
      toast.error("Incorrect Credentials, Try again!")
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  const handleGoogleOAuth = async () => {
    // console.log("Href:", href);
    try {
      toast.loading("Authenticating Google...");
      // const res = await api.get('/oauth2');
      // if (res.status === 200) {
      //   console.log('Google', res?.data);
      //   toast.dismiss();
      // }
      // href(`http://localhost:5000/oauth2`);
      window.location.replace(
        `${
          process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/"
        }oauth2`
      );
    } catch (e) {
      console.log("Error authenticating Google: ", e);
      toast.dismiss();
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  // console.log("Form errors", formik.values);

  return (
    <div className="container  ">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className=" " style={{ marginTop: "12%" }}>
            <div className="  rounded w-75 w-lg-50 align-items-center m-auto   my-3">
              <h3 className="text-center mb-2 font-weight-bold">
                Welcome Back{" "}
              </h3>
              <p className="text-center mb-3 fs-13 text-dark font-weight-bold ">
                The faster you fill up, the faster you get a ticket
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
                  Sign in with Google
                </Button>
              </div>
              <Divider className="my-4">OR</Divider>
              <form onSubmit={formik.handleSubmit}>
                <FormLabel className="font-weight-bold">Email*</FormLabel>
                <Input
                  placeholder="Enter your email"
                  variant="outlined"
                  color="white"
                  className="border"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error text-danger font-weight-bold mt-1">
                    {formik.errors.email}
                  </div>
                ) : null}
                <div className="mb-3"></div>
                <FormLabel className="font-weight-bold">Password*</FormLabel>
                <div className="password-input-container">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    variant="outlined"
                    color="white"
                    className="border mb-4"
                    {...formik.getFieldProps("password")}
                    endDecorator={<i
                    className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>}
                  />
                  
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error text-danger font-weight-bold mt-1">
                    {formik.errors.password}
                  </div>
                ) : null}
                <div className="d-flex align-items-center justify-content-end mb-2 font-weight-bold" style={{ textDecoration: "underline" }}>
                <Link to="/auth/institute/recover" ><p className="text-dark">Forgot Password?</p></Link>
                </div>
                {/* <p className='mb-4 fs-14 text-dark font-weight-bold'>Must be at least 8 characters.</p> */}
                <Button
                  type="submit"
                  fullWidth
                  color="info"
                  variant="solid"
                  className="mb-3"
                >
                  Login
                </Button>
              </form>

              <p className="text-center text-dark ">
                Don't have an account?{" "}
                <strong style={{ textDecoration: "underline" }}>
                  {" "}
                  <Link to="/auth/institute/signup">Sign up</Link>
                </strong>
              </p>
              <p className="text-center ">
                Not a Institute?{" "}
                <span>
                  <Link to="/auth/login">
                    {" "}
                    <strong>Click here</strong>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col p-0">
          <div className=" w-100">
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt="logo"
              style={{ height: "650px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginInstitute;

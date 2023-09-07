import { Button, Divider, FormLabel, Input } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Popup } from "layout/Popup";
import { useState } from "react";
import { useGlobalContext } from "global/context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
const validationSchema = yup.object({
  email: yup.string().required("Registered Email address is required"),
});
function InstitutePasswordRecover() {
  const navigate = useNavigate();
  const { api } = useGlobalContext();
  const [type, setType] = useState(0);
  const Formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log("Formik Data: ", values);
      // const recaptchaValue = await captchaRef.current.executeAsync();
      try {
        // const checkCaptcha = await postVerifyCaptcha({ recaptchaValue });
        // if (checkCaptcha.data.status === "error") {
        //   Popup("error", checkCaptcha.data.message);
        // } else {
        Popup("loading", "Processing your request");
        // captchaRef.current.reset();
        const res = await api.post(``, {
          ...values,
          type: type,
        });
        console.log(res);
        if (res?.status == 200) {
          Popup("success", res.data.message);
          navigate("/auth/institute/login");
        }
        // }
      } catch (error) {
        console.log(error);
        Popup("error", error.response.data.message);
      }
    },
  });
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className=" " style={{ marginTop: "12%" }}>
            <form
              className=" login-form"
              onSubmit={Formik.handleSubmit}
            >
              <div className="  rounded w-75 w-lg-50 align-items-center m-auto   my-3">
                <h3 className="text-center mb-2 font-weight-bold">
                  Forgot Password?{" "}
                </h3>
                <p className="text-center mb-5 fs-13 text-dark font-weight-bold ">
                  No worries, we'll send you reset instructions.
                </p>

                <div className="mb-4">
                <Input
                        fullWidth
                        size="lg"
                        placeholder="Your Registered Email Address"
                        label={"Registered Email"}
                        id="email"
                        name="email"
                        type={"email"}
                        value={Formik.values.email}
                        onChange={Formik.handleChange}
                        error={
                          Formik.touched.email &&
                          Boolean(Formik.errors.email)
                        }
                        helperText={
                          Formik.touched.email && Formik.errors.email
                        }
                      />
                </div>
                <div className="mb-3">
                  <Button  id="send-message-btn" fullWidth variant="solid" type="submit">
                    Reset Password
                  </Button>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <Button
                    variant="plain"

                    onClick={() => navigate(`/auth/institute/login`)}
                  >
                    {" "}
                    <i class="bi bi-arrow-left fs-19"></i> &nbsp; Back To Login
                  </Button>
                </div>
              </div>
            </form>
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

export default InstitutePasswordRecover;

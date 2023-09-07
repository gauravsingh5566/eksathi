import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { Popup } from "layout/Popup";
import { useGlobalContext } from "global/context";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const {api} = useGlobalContext();
    const validationSchema = yup.object({
        newPassword: yup
            .string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });
    const Formik = useFormik({
        initialValues: {
            newPassword: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, action) => {
            console.log("Formik Data: ", values);
            console.log("Token Data: ", token);
            // const recaptchaValue = await captchaRef.current.executeAsync();
            try {
                // const checkCaptcha = await postVerifyCaptcha({ recaptchaValue });
                // if (checkCaptcha.data.status === "error") {
                //   Popup("error", checkCaptcha.data.message);
                // } else {
                Popup("loading", "Processing your request");
                // captchaRef.current.reset();
                const res = await api.post(`app/auth/update-password`, {
                    password: Formik.values.newPassword,
                    token: token,
                });
                console.log(res);
                if (res?.status == 200) {
                    Popup("success", res.data.message);
                    navigate('/auth/login');
                }
                // }
            } catch (error) {
                console.log(error);
                Popup("error", error.response.data.message);
            }
        }
    });
    return (
        <div>
            <div>
                {/*======================================
    START RECOVERY AREA
  ======================================*/}
                <section className="recovery-area py-5 position-relative">
                    <div className="container">
                        <form className="card card-item login-form" onSubmit={Formik.handleSubmit}>
                            <div className="card-body row p-0">
                                <div className="col-lg-6">
                                    <div className="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
                                        <img
                                            src="/images/undraw-forgot-password.svg"
                                            alt="Image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                                {/* end col-lg-6 */}
                                <div className="col-lg-5 mx-auto">
                                    <div className="form-action-wrapper py-5">
                                        <div className="form-group">
                                            <h3 className="fs-22 pb-3 fw-bold">
                                                Reset Password - EkSathi
                                            </h3>
                                            <div className="divider">
                                                <span />
                                            </div>
                                            <p className="pt-3">
                                                Welcome to EkSathi's password reset page. Please enter your new password below to reset your password and gain access to your account.
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            {/* <label className="fs-14 text-black fw-medium lh-18">Email</label> */}
                                            <TextField
                                                fullWidth
                                                placeholder="Your New Password"
                                                label={"New Password"}
                                                id="newPassword"
                                                name="newPassword"
                                                type={"password"}
                                                value={Formik.values.newPassword}
                                                onChange={Formik.handleChange}
                                                error={
                                                    Formik.touched.newPassword &&
                                                    Boolean(Formik.errors.newPassword)
                                                }
                                                helperText={
                                                    Formik.touched.newPassword && Formik.errors.newPassword
                                                }
                                            />
                                        </div>
                                        {/* end form-group */}
                                        <div className="form-group">
                                            {/* <label className="fs-14 text-black fw-medium lh-18">Email</label> */}
                                            <TextField
                                                fullWidth
                                                placeholder="Your Confirm Password"
                                                label={"Confirm Password"}
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={"password"}
                                                value={Formik.values.confirmPassword}
                                                onChange={Formik.handleChange}
                                                error={
                                                    Formik.touched.confirmPassword &&
                                                    Boolean(Formik.errors.confirmPassword)
                                                }
                                                helperText={
                                                    Formik.touched.confirmPassword && Formik.errors.confirmPassword
                                                }
                                            />
                                        </div>
                                        {/* end form-group */}
                                        <div className="form-group">
                                            <button
                                                id="send-message-btn"
                                                className="btn theme-btn w-100"
                                                type="submit"
                                            >
                                                Update Password{" "}
                                                <i className="la la-arrow-right icon ml-1" />
                                            </button>
                                        </div>
                                        {/* end form-group */}
                                    </div>
                                    {/* end form-action-wrapper */}
                                </div>
                                {/* end col-lg-5 */}
                            </div>
                            {/* end row */}
                        </form>
                        <p className="text-center">
                            <Link to="/auth/login" className="text-color hover-underline">
                                Return to log in
                            </Link>
                        </p>
                    </div>
                    {/* end container */}
                    <div className="position-absolute bottom-0 left-0 w-100 h-100 z-index-n1">
                        <svg
                            className="w-100 h-100"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill="#2d86eb"
                                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                                opacity=".07"
                            />
                            <path
                                fill="#2d86eb"
                                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                                opacity=".06"
                            />
                            <path
                                fill="#2d86eb"
                                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                                opacity=".04"
                            />
                        </svg>
                    </div>
                </section>
                {/*======================================
    END RECOVERY AREA
  ======================================*/}
            </div>
        </div>
    );
};

export default ResetPassword;

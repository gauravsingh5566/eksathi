import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Popup } from 'layout/Popup';
import { useGlobalContext } from 'global/context';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/joy';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const ChangePassword = () => {
    const { userData, api, apiAuth } = useGlobalContext();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            password: "",
            newpassword: "",
            confirmpassword: "",
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .required("Current Password is required"),
            newpassword: Yup.string()
                .required("New Password is required")
                .min(6, "Password must be at least 6 characters"),
            confirmpassword: Yup.string()
                .required("Confirm Password is required")
                .oneOf([Yup.ref("newpassword"), null], "Passwords must match"),
        }),

        onSubmit: async (values, action) => {
            Popup('loading', 'Updating Your Password');
            console.log("UserData::::", userData)
            values = { ...values, email: userData?.email, userId: userData?.id };
            try {
                const res = await api.put(`app/auth/change-password`, values);
                if (res.status == 200) {
                    Popup('success', res.data.message);
                    navigate('/profile');
                }
                console.log("Change Password: ", values);
            } catch (error) {
                if (error.response.data.message) {
                    Popup('error', error.response.data.message);
                } else {
                    Popup('error', error.request.statusText);
                }
                console.log(error);
            }

        },
    });
    // console.log(formik.errors);

    return (
        <>
            <div className="user-panel-main-bar px-4">
                <div className="user-panel">
                    <div className="bg-gray p-3 rounded-rounded">
                        <h3 className="fs-17">Change password</h3>
                    </div>
                    <form className="pt-20px" onSubmit={formik.handleSubmit}>
                        <div className="settings-item mb-30px">
                            <div className="form-group">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Current Password
                                </label>
                                <input
                                    className="form-control form--control password-field"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Current password"
                                    onChange={formik.handleChange}
                                    errorhandle={"fill form"}
                                    helperText={"fill it"}
                                />
                                <span className="text-danger">{formik.errors.password}</span>
                            </div>
                            <div className="form-group">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    New Password
                                </label>
                                <input
                                    className="form-control form--control password-field"
                                    type={showPassword ? "text" : "password"}
                                    name="newpassword"
                                    placeholder="New password"
                                    onChange={formik.handleChange}
                                    errorhandle={"fill form"}
                                />
                                <span className="text-danger">{formik.errors.newpassword}</span>
                            </div>
                            <div className="form-group">
                                <label className="fs-13 text-black lh-20 fw-medium">
                                    Confirm Password
                                </label>
                                <input
                                    className="form-control form--control password-field"
                                    type={showPassword ? "text" : "password"}
                                    name="confirmpassword"
                                    placeholder="Confirm password again"
                                    onChange={formik.handleChange}
                                    errorhandle={"fill form"}
                                />
                                <span className="text-danger">{formik.errors.confirmpassword}</span>
                                <p className="fs-14 lh-18 py-2">
                                    Passwords must contain at least eight
                                    characters, including at least 1 letter and 1
                                    number.
                                </p>
                                <IconButton
                                    variant='soft'
                                    color='neutral'
                                    onClick={() => {
                                        if (showPassword) {
                                            setShowPassword(false);
                                        } else {
                                            setShowPassword(true);
                                        }
                                    }}
                                >
                                    {
                                        !showPassword ?
                                            <Visibility /> : <VisibilityOff />
                                    }
                                </IconButton>

                            </div>
                            <div className="submit-btn-box pt-3">
                                <button className="btn theme-btn" type="submit">
                                    Change Password
                                </button>
                            </div>
                        </div>
                        {/* end settings-item */}
                        {/* <div className="border border-gray p-4">
                            <h4 className="fs-18 mb-2">Forgot your password</h4>
                            <p className="pb-3">
                                Don't worry it's happen with everyone. We'll help
                                you to get back your password
                            </p>
                            <a
                                href="recover-password.html"
                                className="btn theme-btn theme-btn-sm theme-btn-white"
                            >
                                Recover Password{" "}
                                <i className="la la-arrow-right ml-1" />
                            </a>
                        </div> */}
                    </form>
                </div>
                {/* end user-panel */}
            </div>
        </>
    )
}

export default ChangePassword;
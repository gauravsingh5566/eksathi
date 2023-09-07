import React, { useEffect, useState } from "react";
import {  NavLink, Outlet, useNavigate } from "react-router-dom";


import SuggestedExperts from "../widgets/SuggestedExperts";
import TrendingQuestions from "../widgets/TrendingQuestions";
import { useGlobalContext } from "global/context";
import { Button } from "@mui/joy";


const Setting = () => {
  const { userData, api } = useGlobalContext();
  const navigate = useNavigate();
  const [profession, setProfession] = useState();

  const getUserProfession = async () => {
    try {
      const res = await api.get(`/app/user/profession?userId=${userData?.id}`);
      if (res?.status === 200) {
        console.log("User Profession: ", res?.data);
        setProfession(res?.data?.profession);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const formik = useFormik({
  //   initialValues: {
  //     currentpassword: "",
  //     newpassword: "",
  //     newpassword2: "",
  //   },
  //   validationSchema: Yup.object({
  //     currentpassword: Yup.string()
  //       .required("Current Password is required"),
  //     newpassword: Yup.string()
  //       .required("New Password is required")
  //       .min(6, "Password must be at least 6 characters"),
  //     newpassword2: Yup.string()
  //       .required("Confirm Password is required")
  //       .oneOf([Yup.ref("newpassword"), null], "Passwords must match"),
  //   }),

  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  // console.log(formik.errors);

  useEffect(() => {
    console.log("User Data (settings): ", userData);
    getUserProfession();
  }, []);
  return (
    <div className="py-3 container">
      <div className="row g-2">
        <div className="col-12 col-lg-9 p-2">
          <div className="rounded bg-white shadow-lg">
            {/*START HERO AREA*/}
            <section className="hero-area rounded shadow-sm pt-3">
              <div className="container px-5 pt-4">
                <div className="d-flex justify-content-between">
                  <div className="">
                    <div className="hero-content d-flex align-items-center">
                      <div className="icon-element shadow-sm flex-shrink-0 mr-3 border border-gray lh-55">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="32px"
                          viewBox="0 0 24 24"
                          width="32px"
                          fill="#2d86eb"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                        </svg>
                      </div>
                      <h2 className="section-title fs-30">Account Settings</h2>
                    </div>
                    {/* end hero-content */}
                  </div>
                  {/* end col-lg-8 */}
                  <div className="">
                    <div className="hero-btn-box text-right py-3 d-flex">
                      <Button variant="soft" color="neutral" className="mr-3"
                        onClick={() => navigate('/profile')}

                      >
                        <i className="la la-id-card mr-1" /> View Profile
                      </Button>
                      <Button variant="soft" color="neutral"
                        onClick={() => navigate('/setting/profile')}

                      >
                        <i className="la la-gear mr-1" /> Profile Settings
                      </Button>
                    </div>
                  </div>
                  {/* end col-lg-4 */}
                </div>
                {/* end row */}
                <ul
                  className="nav nav-tabs generic-tabs generic--tabs generic--tabs-2 mt-4 nav-pills"
                  id="pills-tab"
                  role="tablist"
                >

                  <li className="nav-item">
                    <NavLink
                      className="nav-link btn btn-link"
                      to={"/setting/account/password"}
                    >
                      Change Password
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link btn btn-link"
                      to={"/setting/account/email"}
                    >
                      Email Settings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link btn btn-link"
                      to={"/setting/account/privacy"}
                    >
                      Privacy
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link btn btn-link"
                      to={"/setting/account/delete"}
                    >
                      Delete Account
                    </NavLink>
                  </li>

                </ul>
              </div>
              {/* end container */}
            </section>
            {/*END HERO AREA*/}
            {/*START USER DETAILS AREA */}
            <section className="user-details-area pt-40px pb-40px">
              <div className="container">
                <div className="tab-content mb-50px" id="pills-tabContent">
                  <Outlet context={[setProfession, profession]} />
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end user-details-area */}
            {/* END USER DETAILS AREA*/}
          </div>
        </div>
        <div className="col-lg-3 p-2">
          <SuggestedExperts />
          <hr />
          <TrendingQuestions />
        </div>
      </div>
    </div>
  );
};

export default Setting;

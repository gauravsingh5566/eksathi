import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
  return (
    <section className="sign-up-area py-3 py-lg-5 position-relative">
      <div className="container">
        <div className="card card-item">
          <div className="card-body row p-0">
            <div className="col-lg-6">
              <div className="form-content p-5 h-100 d-flex align-items-center justify-content-center flex-column bg-diagonal-gradient-primary-2 radius-top-left-8 radius-bottom-left-8 text-left">
                <h3 className="fs-35 pb-4 fw-bold text-white w-100">
                  Join the Eksathi Community
                </h3>
                <div className="hero-list w-100">
                  <div className="d-flex align-items-center pb-30px">
                    <svg width="26" height="26" className="mr-2">
                      <path
                        fill="#ffffff"
                        opacity=".5"
                        d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                      ></path>
                    </svg>
                    <p className="fs-15 text-white lh-20 fw-medium">
                      Get unstuck — ask a question
                    </p>
                  </div>
                  <div className="d-flex align-items-center pb-30px">
                    <svg width="26" height="26" className="mr-2">
                      <path
                        fill="#ffffff"
                        d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                      ></path>
                      <path
                        fill="#ffffff"
                        opacity=".5"
                        d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                      ></path>
                    </svg>
                    <p className="fs-15 text-white lh-20 fw-medium">
                      Unlock new privileges like voting and commenting
                    </p>
                  </div>
                  <div className="d-flex align-items-center pb-30px">
                    <svg width="26" height="26" className="mr-2">
                      <path
                        fill="#ffffff"
                        d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                      ></path>
                      <path
                        fill="#ffffff"
                        opacity=".5"
                        d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                      ></path>
                    </svg>
                    <p className="fs-15 text-white lh-20 fw-medium">
                      Save your favorite tags, filters, and jobs
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg width="26" height="26" className="mr-2">
                      <path
                        fill="#ffffff"
                        d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                      ></path>
                    </svg>
                    <p className="fs-15 text-white lh-20 fw-medium">
                      Earn reputation and badges
                    </p>
                  </div>
                </div>
                <div className="w-100">
                  <p className="text-white pt-60px pb-3">
                    Already have an account?
                  </p>
                  <Link
                    to="/auth/login"
                    className="btn theme-btn theme-btn-white px-5 lh-24 py-3"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
            {/* end col-lg-6 */}
            <div className="col-lg-5 mx-auto">
              <RegisterForm />
              {/* end form-action-wrapper */}
            </div>
            {/* end col-lg-5 */}
          </div>
          {/* end row */}
        </div>
      </div>
      {/* end container */}
      <div className="position-absolute top-0 left-0 w-100 h-100 z-index-n1">
        <svg
          className="w-100 h-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#2d86eb"
            opacity="0.06"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Register;

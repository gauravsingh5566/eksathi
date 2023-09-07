import React from "react";
import LoginForm from "./components/LoginForm";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  return (
    <div>
      <section className="login-area py-3 py-lg-5 position-relative ">
        <div className="shape-bg position-absolute top-0 left-0 w-100 h-100 opacity-2 z-index-n1"></div>
        <div className="container">
          <div className="card card-item login-form">
            <div className="card-body row p-0">
              <div className="col-lg-6">
                <div className="form-content p-4 h-100 d-flex align-items-center justify-content-center flex-column bg-diagonal-gradient-primary radius-top-left-8 radius-bottom-left-8 text-center">
                  <h3 className="fs-35 pb-3 fw-bold text-white">
                    Good to see you again
                  </h3>
                  <p className="text-white fs-18">
                    Log in with your information that you entered
                    <br /> during your registration.
                  </p>
                  <h4 className="text-white text-center pt-4 pb-3">
                    Don't have an account?
                  </h4>
                  <Link
                    to="/auth/register"
                    className="btn theme-btn theme-btn-white px-5 py-3 lh-24"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
              {/* end col-lg-6 */}
              <div className="col-lg-5 mx-auto">
                <LoginForm />
                {/* end form-action-wrapper */}
              </div>
              {/* end col-lg-5 */}
            </div>
            {/* end row */}
          </div>
        </div>
        {/* end container */}
      </section>
    </div>
  );
}

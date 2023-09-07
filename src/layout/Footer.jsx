
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-area pt-80px bg-gray position-relative">
      <span className="vertical-bar-shape vertical-bar-shape-1"></span>
      <span className="vertical-bar-shape vertical-bar-shape-2"></span>
      <span className="vertical-bar-shape vertical-bar-shape-3"></span>
      <span className="vertical-bar-shape vertical-bar-shape-4"></span>
     
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-6">
            <div className="footer-item">
              <h3 className="fs-18 fw-bold pb-2 ">Company</h3>
              <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-dark">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </div>
            {/* end footer-item */}
          </div>
          {/* end col-lg-3 */}
          <div className="col-lg-3 col-6">
            <div className="footer-item">
              <h3 className="fs-18 fw-bold pb-2 text-dark">Legal Stuff</h3>
              <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-dark">
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
                {/* <li>
                  <a href="/cookie-policy">Cookie Policy</a>
                </li> */}
              </ul>
            </div>
            {/* end footer-item */}
          </div>
          {/* end col-lg-3 */}
          <div className="col-lg-3 col-6">
            <div className="footer-item">
              <h3 className="fs-18 fw-bold pb-2 text-dark">Help</h3>
              <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-dark">
                <li>
                  <Link to="/faq">Knowledge Base</Link>
                </li>
                <li>
                  <Link to="/contact">Support</Link>
                </li>
              </ul>
            </div>
            {/* end footer-item */}
          </div>
          {/* end col-lg-3 */}
          <div className="col-lg-3 col-6">
            <div className="footer-item">
              <h3 className="fs-18 fw-bold pb-2 text-dark">Connect with us</h3>
              <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-dark">
                <li>
                  <a target="_blank" href="https://www.facebook.com/ek.sathi.71/">
                    <i className="la la-facebook mr-1"></i> Facebook
                  </a>
                </li>
                <li>
                  <a target="_blank" href={"https://twitter.com/eksathi1"}>
                    <i className="la la-twitter mr-1"></i> Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href={"https://www.instagram.com/eksathi21/"}>
                    <i className="la la-instagram mr-1"></i> Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/eksathi/">
                    <i className="la la-linkedin mr-1"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            {/* end footer-item */}
          </div>
          {/* end col-lg-3 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <hr className="border-top-gray" />
      <div className="container">
        <div className="row align-items-center pb-4 copyright-wrap">
          <div className="col-lg-6">
            <Link to="/" className="d-inline-block">
              <img
                src="/images/logo-gradiant.png"
                alt="footer logo"
                className="footer-logo"
                style={{ maxWidth: "177px" }}
              />
            </Link>
          </div>
          {/* end col-lg-6 */}
          <div className="col-lg-6">
            <p className="copyright-desc text-right fs-14 text-dark">
              Copyright &copy; 2023 <a href="https://www.eksathi.com/" className="text-primary">Eksathi</a>
            </p>
          </div>
          {/* end col-lg-6 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Footer;

import "react-tabs/style/react-tabs.css";
import { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";


function Team() {
  // const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  return (
    <>
      <div className="bg-dark py-4">
        <div className="container">
          <h4 className="font-family-serif fw-bold text-center text-white">
            Meet Our Experienced And Professional Team
          </h4>
        </div>
      </div>
      <div className="container py-4">
        <div className="row row-cols-lg-4 mb-3 justify-content-center">
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/sakshi.webp"
                  alt="Logo"
                  style={{
                    width: "100%",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold">Sakshi Verma</h5>
                <p className="card-text text-center fs-15 ">Operations Head</p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/saurabh.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">
                  Saurabh Sharma
                </h5>
                <p className="card-text text-center fs-15">
                  Software Developer
                </p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.linkedin.com/in/saurabh-sharma-3526aa20a/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://github.com/saurabhcoded"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/santosh.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body  mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">
                  Santosh Kushwaha
                </h5>
                <p className="card-text text-center fs-15">
                  Software Developer
                </p>
                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.linkedin.com/in/santoshskt9/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://github.com/santoshskt9"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/garg.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">Mr. Garg</h5>
                <p className="card-text text-center fs-15">DevOps Engineer</p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://github.com/discovermohit"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="/images/Shivam.jpg"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body  mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">
                 Shivam Tiwari
                </h5>
                <p className="card-text text-center fs-15">Web Developer</p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.linkedin.com/in/shivam-tiwari-389bab255/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://github.com/MR-Shivam-Tiwari"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/rohit.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body  mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">
                  Rohit Dabaas
                </h5>
                <p className="card-text text-center fs-15">Graphic Design</p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/ayush.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body  mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">
                  Ayush Antiwal
                </h5>
                <p className="card-text text-center fs-15">Web Developer</p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.linkedin.com/in/ayush-antiwal-00686612a/"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://github.com/AyushAntwal"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          <div className="col p-2">
            <div className="card rounded rounded-4 shadow bg-white border-0">
              <div className="d-flex justify-content-center ">
                <img
                  className="team-img rounded-2 w-100 "
                  src="https://glcloud.in/images/static/team/Prakhar-Varshney.webp"
                  alt="Logo"
                  style={{
                    width: "240px",
                    height: "270px",
                    margin: "15px",
                    marginBottom: "0px",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="card-body  mt-0">
                <h5 className="card-title text-center m-0 font-weight-bold ">Prakhar</h5>
                <p className="card-text text-center fs-15">
                  State Coordinator and PR
                </p>
                <div className="d-flex justify-content-center">
                   <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.facebook.com/"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="https://www.instagram.com/"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    className="btn btn-lg btn-floating rounded-4 m-2"
                    style={{ backgroundColor: "#ebf2ec", color: "black" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Second Row */}


      </div>
      <br></br>

      <hr></hr>

      <div className="container mb-5">
        <h2 className="mt-5 mb-5 font-playfair-display fw-bold text-center">
          Leadership Team
        </h2>

        <div className="card rounded-4 p-3 p-lg-4 border-0 shadow bg-light mb-3">
          <div className="row">
            <div className="col-md-6 order-2 order-lg-1">
              <div className="">
                <h3 className="mb-1">Nitin Agarwal</h3>
                <h4 className="mb-2">Director</h4>
                <p className="text-justify lh-2">
                  Nitin is the Convenor of National Association of School
                  Professionals, an NGO working towards bringing a fresh
                  impact-based approach to Learning Beyond Curriculum in India.
                  National Association of School Professionals owns and operates
                  the Yuvamanthan Platform. He is also CEO of Govardhan Learning
                  Cloud (GLC), an organization focused on solving societal
                  issues through learning-based intervention among students. GLC
                  is working with the government on issues such as Women
                  Empowerment, Child Safety, Financial Literacy, Environment
                  Protection, etc. He is also a Director at Pahle India
                  Foundation (PIF). PIF undertakes analytical research and
                  disseminates its findings both to policymakers and in the
                  public domain. The driving vision in all that we do is
                  “Putting India First to make India First.”
                </p>
                <div className="d-flex justify-content-between col-md-9 mt-3 align-items-center bg-light p-3">
                  <IconButton>
                    <i
                      className="bi bi-instagram text-black"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </IconButton>
                  <IconButton>
                    <i
                      className="bi bi-linkedin text-black"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </IconButton>
                  <i
                    className="bi bi-facebook text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="bi bi-twitter text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-1 order-lg-2">
              <img
                className="w-100 rounded"
                src="https://glcloud.in/images/static/team/nitin.webp"
                alt="logo"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* <div className="card rounded-4 p-3 p-lg-4 border-0 shadow bg-light mt-4">
          <div className="row">
            <div className="col-md-6">
              
              <img
                className="w-100 rounded-4"
                src="https://glcloud.in/images/static/team/danish.webp"
                alt="logo"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </div>

            <div className="col-md-6">
              <div className="">
                <h3>Danish Kamal</h3>
                <h5>
                  Director - Strategy and Communications
                </h5>
                <p className="text-start">
                  Danish brings with him a vast experience in digital marketing
                  and communications strategy. Having worked with big brands
                  like Apple, Dentsu, WPP etc. and for multiple startups, he is
                  responsible for strategy, communications and development of
                  YMG20 platform. He has also been previously associated with
                  Energy, Aviation, Security and Defense think tanks and was
                  responsible for events, expositions, digital development and
                  branding efforts. He has two entrepreneural stints as founder
                  of digital agencies. His experience extends beyond building
                  brands to public policy and driving social narratives for
                  government initiatives. He holds an MBA in International
                  Business and loves to explore Indian and international
                  cuisine. Lorem, dolor sit amet consectetur adipisicing elit.
                  Voluptas sint aut culpa aspernatur ea eveniet asperiores
                  veritatis a corporis voluptatem dolorum vero magni blanditiis,
                  hic natus odit architecto labore. Recusandae?
                </p>
                <div className="d-flex justify-content-between col-md-9 align-items-center">
                  <i
                    className="bi bi-instagram text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="bi bi-linkedin text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="bi bi-facebook text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                  <i
                    className="bi bi-twitter text-black"
                    style={{ fontSize: "1.5rem" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="container" >
        <div className="p-lg-5 p-3 border text-center rounded-4 my-1 mb-5 shadow" style={{ backgroundColor: "#292e96" }}>
          <h1 className=" mb-3 text-white">Join Our Team</h1>
         
          <h5 className="w-100 text-white " style={{ lineHeight: "1.5" }}>
            Are you ready to make a difference?<br></br>
            Join our team and be a part of a dynamic community that is dedicated{" "}
            <br></br>to transforming education and empowering learners
            worldwide. <br></br> Explore our open positions and apply today
          </h5>
          <div className="d-flex align-items-center justify-content-center" >
            <Link to="/careers" className=" mt-4  bg-light py-2 pl-3 pr-2 border-0 font-weight-bold text-dark shadow rounded-2 d-flex align-items-center justify-content-center">
              View Openings
              <i
                className=" bi bi-arrow-up-right-square font-weight-bold my-auto fs-6 mx-2"
              // style={{ fontSize: "1.7rem" }}
              ></i>
            </Link>

          </div>
        </div>
      </div>

      <section
        className="get-started-area px-5 shadow py-5 bg-dark position-relative z-index-1 container border rounded rounded-3 mb-4 shadow"
        style={{ transform: "translate(0px,30px)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 py-4">
              <h2 className="section-title fs-35 lh-40 text-white">
                Build a private community to share technical or non-technical
                knowledge
              </h2>
            </div>
            <div className="col-lg-5 text-right">
              <Link
                to="/contact"
                className="btn theme-btn bg-light text-dark rounded me-4 font-weight-bold"
              >
                Contact Us{" "}
                <i className="la text-dark la-arrow-right icon ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team;

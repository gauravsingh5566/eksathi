import React from 'react'
import AboutSection from '../Home/components/AboutSection';
import CallToAction from '../Home/components/CallToAction';
import CallToAction2 from '../Home/components/CallToAction2';

const About = () => {
  return (
    <>
      <AboutSection />
      <CallToAction />
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 mt-5 mb-5">
          <div className="col">
            <div className="p-relative">
              <img src="/images/graphics/students.jpg" alt="" className="ml-auto w-100 p-relative" style={{ height: "450px", objectFit: "contain" }} />
              <img src="/images/graphics/formimg.png" alt="" className="me-auto shadow-lg border rounded-4 sm-none" style={{ position: "absolute", height: "350px", objectFit: "contain", top: "-50px", right: "0px", maxWidth: "100vw" }} />
            </div>
          </div>
          <div className="col ">
            <div className="px-4">
              <h1 className="fw-bold text-dark">For Students: Focus on learning</h1>
              <p className="text-secondary mb-3 fw-bold">We value time of a student and we also understand basic human nature to get his queries solved instantaly. Eksathi automated system defined Gyani’s, and other members get notified for the question asked in their subject matter. </p>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/badge.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Expert's Answers</h5>
                  <p>Get answers for your queries from Experts Only</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/united.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Wide Community</h5>
                  <p>Interact with Worlwide Students & Teachers communities</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/research.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Research</h5>
                  <p>Get references for your research</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/delegate.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Trend</h5>
                  <p>Check study trends, get assignments</p>
                </div>
              </div>
              {/* <li className="text-dark fw-semibold">Interact with Worlwide Students & Teachers communities</li>
              <li className="text-dark fw-semibold"> Get references for your research</li>
              <li className="text-dark fw-semibold"> Check study trends, get assignments</li> */}
              {/* <Button className="text-capitalize rounded-3 mt-3" variant="outlined" color="success">Explore Now</Button> */}
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col order-1 order-lg-2">
            <div className="p-relative">
              <img src="/images/eksathi-home.png" alt="" className="w-100" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="col order-2 order-lg-1">
            <div className="ms-auto">
              <h1 className="fw-bold text-dark">For Teachers : Share Your Knowledge</h1>
              <p className="text-secondary mb-3 fw-bold">Sharing is caring, Knowledge sharing is biggest gift to the universe. Every time you share correct answer, your Eksathi ratings get increased. Higher the Eksathi ratings higher the chances of getting job, and Eksathi recommendations to employers.</p>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/star.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Get Highlighted</h5>
                  <p>Answer to the questions asked, Earn Eksathi ratings</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/hired.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Get Hired</h5>
                  <p>Higher the Eksathi rating, higher the chances of getting hired</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/special.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Become Special</h5>
                  <p>Become subject matter consultant and offer for guest lecturer</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/brainstorming.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Share Research</h5>
                  <p>Share your research with World wide researchers Community</p>
                </div>
              </div>
             
              {/* <Button className="text-capitalize rounded-3 mt-3" variant="outlined" color="success">Explore Now</Button> */}
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col">
            <div className="p-relative">
              <img src="/images/graphics/eksathi-mobile.png" alt="" className="w-100 mr-auto mt-5" style={{ objectFit: "contain" }} />
              <img src="/images/graphics/suggested.png" alt="" className="me-auto shadow-lg border border-2 rounded-4 p-2 p-lg-3 bg-white sm-none " style={{ position: "absolute", height: "242px", objectFit: "contain", top: "240px", right: "336px" }} />
            </div>
          </div>
          <div className="col">
            <div className="ms-auto my-5">
              <h1 className="fw-bold text-dark">For Professionals : Start your Second Innings</h1>
              <p className="text-secondary mb-3 fw-bold">Eksathi feels Teaching is a passion, sharing knowledge is a gift to mankind, Eksathi is such platform for professionals to start their second innings by answering questions, getting involved as researcher and getting hired as guest lecturer.</p>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/certified.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Get Certified</h5>
                  <p>Share your knowledge, get certified, earn Eksathi Ratings.</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/research-2.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Research</h5>
                  <p>Get Associated with research project.</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/engagement.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Engage</h5>
                  <p>Use your skills, engage with students to solve their problems.</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/declaration.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Become Guest Lecturer</h5>
                  <p>Become Guest lecturer and earn for your skills</p>
                </div>
              </div>
              {/* <Button className="text-capitalize rounded-3 mt-3" variant="outlined" color="success">Explore Now</Button> */}
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col order-1 order-lg-2">
            <div className="p-relative">
              <img src="/images/eksathi-jobs.png" alt="" className="w-100" style={{ objectFit: "contain" }} />
            </div>
          </div>
          <div className="col order-2 order-lg-1">
            <div className="ms-auto">
              <h1 className="fw-bold text-dark">For Institutes : The Temple of Knowledge</h1>
              <p className="text-secondary mb-3 fw-bold">Connect, Hire, Share, and Advertise. Enhance your institute's education journey with Eksathi's comprehensive platform.</p>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/leader.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Hire Expert Teachers</h5>
                  <p>Check Eksathi ratings, Hire expert teachers in your area</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/doings.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Free Job Listing</h5>
                  <p>Absolutely Free and easy job listing</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/conversation.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Information Sharing and Discussions</h5>
                  <p>Use Eksathi for insttitutes, For private information sharing and discussions</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div>
                  <img src="/images/icons/marketing.png" alt="icon" style={{maxWidth: 45}}/>
                </div>
                <div className='ml-3'>
                  <h5 className="text-dark fw-semibold">Institution Advertising and Trend Updates</h5>
                  <p>Advertise your Institution, get updated for latest trends in teachings</p>
                </div>
              </div>
             
              {/* <Button className="text-capitalize rounded-3 mt-3" variant="outlined" color="success">Explore Now</Button> */}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default About;
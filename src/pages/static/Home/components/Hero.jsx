import { Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import GetStarted from "./GetStarted";
import { useState } from "react";
import { useNavigate } from "react-router";


const Hero = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('question');
  const [keyword, setKeyword] = useState('');
  const [colorText, setColorText] = useState('Students & Teachers');

  const handleSearch = () => {
    if (keyword && searchType === 'user') {
      navigate(`/user`, { state: { keyword } });
    } else if (keyword && searchType === 'question') {
      navigate(`/questions`, { state: { keyword } });
    }
  }


  return (
    <section className="hero-area overflow-hidden bg-light py-5" 
    // style={{
    //   backgroundImage: "url(https://img.freepik.com/free-vector/science-doodle-pattern_23-2147492328.jpg?1&w=826&t=st=1686820031~exp=1686820631~hmac=fc9b7676fa577ce7c94ea2f54201e23e80aaf833aaed72dfa0f6c55c423e7e05)",
    //   opacity: '0.4'
    // }}
    >
      <span className="icon-shape icon-shape-1 is-scale" />
      <span className="icon-shape icon-shape-2 is-bounce" />
      <span className="icon-shape icon-shape-3 is-swing" />
      <span className="icon-shape icon-shape-4 is-spin" />
      <span className="icon-shape icon-shape-5 is-spin" />
      <span className="icon-shape icon-shape-6 is-bounce" />
      <span className="icon-shape icon-shape-7 is-tilt" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="hero-content text-center py-lg-5">
              <h2 className="section-title fs-50 pb-0 text-black lh-65">
                Join World's First Job Portal for
              </h2>
              <h2 className="section-title fs-50 pb-3 text-black lh-65 linear-wipe">{colorText}!</h2>
              <h5 className="lh-26 text-secondary mx-auto font-weight-bold text-dark" style={{ maxWidth: 600 }}>
                Biggest Community for Educators to help find answers to their queries and show case their skills
              </h5>
              <div className="mt-3 d-flex justify-content-center mt-5">
                <div className="input-group bg-white p-2 rounded-pill shadow" style={{ maxWidth: 700 }}>
                  <input type="text" className="form-control border-0 shadow-0 py-4"
                    placeholder="Write Your Question"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <select name="" id="" className="form-control mb-0 h-100 mr-3 border-top-0 border-bottom-0"
                    style={{ maxWidth: "120px" }}
                    onClick={(e) => setSearchType(e.target.value)}
                  >
                    <option value="question">Question</option>
                    <option value="user">User</option>
                  </select>
                  <button
                    className="text-capitalize btn btn-success rounded-pill px-3"
                    onClick={handleSearch}
                  >
                    <Search style={{ fontSize: 18 }} /> Search
                  </button>
                </div>
              </div>
            </div>
            {/* end hero-content */}
          </div>
          {/* end col-lg-6 */}
        </div>
        {/* end row */}
      </div>
      <GetStarted />
    </section>
  );
};

export default Hero;

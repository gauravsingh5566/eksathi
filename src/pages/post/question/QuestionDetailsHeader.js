import React from "react";

const QuestionDetailsHeader = () => {
  return (
    <div>
      {" "}
      <section className="d-none hero-area bg-white shadow-sm overflow-hidden pt-40px pb-40px">
        <span className="stroke-shape stroke-shape-1" />
        <span className="stroke-shape stroke-shape-2" />
        <span className="stroke-shape stroke-shape-3" />
        <span className="stroke-shape stroke-shape-4" />
        <span className="stroke-shape stroke-shape-5" />
        <span className="stroke-shape stroke-shape-6" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="hero-content">
                <h2 className="section-title pb-2 fs-24 lh-34">
                  Find the best answer to your technical question, <br />
                  help others answer theirs
                </h2>
                <p className="lh-26">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there
                  <br /> isn't anything embarrassing hidden in the middle of
                  text.
                </p>
                {/* <ul className="generic-list-item pt-3">
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    fill="#6c727c"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                  </svg>
                </span>{" "}
                Anybody can ask a question
              </li>
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    fill="#6c727c"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{" "}
                Anybody can answer
              </li>
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 320 512"
                    width="20px"
                  >
                    <path
                      fill="#6c727c"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                    />
                  </svg>
                </span>{" "}
                The best answers are voted up and rise to the top
              </li>
            </ul> */}
              </div>
              {/* end hero-content */}
              {/* {TextEditor()} */}
            </div>
            {/* end col-lg-9 */}
            <div className="col-lg-3">
              <div className="hero-btn-box text-right py-3">
                <a href="ask-question.html" className="btn theme-btn">
                  Ask a Question
                </a>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </div>
  );
};

export default QuestionDetailsHeader;

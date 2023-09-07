import React from "react";

const Info = () => {
  return (
    <section className="info-area section--padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title lh-50 pb-35px">
            Capture your company’s knowledge and context in a
            <br /> discoverable format to unblock your team
          </h2>
          <a href="free-demo.html" className="btn theme-btn">
            Create a free organisation
          </a>
        </div>
        <div className="row pt-60px">
          <div className="col-lg-4 responsive-column-half">
            <div className="info-box px-2 text-center">
              <div className="icon-element mb-4 shadow-sm mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 0 24 24"
                  width="28px"
                  fill="#48a868"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </div>
              <div className="info-body">
                <h3 className="fs-18 pb-3 fw-bold">Increase productivity</h3>
                <p>
                  This is just a simple text made for this unique and awesome
                  template, you can replace it with any text.
                </p>
              </div>
            </div>
          </div>
          {/* end col-lg-4 */}
          <div className="col-lg-4 responsive-column-half">
            <div className="info-box px-2 text-center">
              <div className="icon-element mb-4 shadow-sm mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 0 24 24"
                  width="28px"
                  fill="#48a868"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </div>
              <div className="info-body">
                <h3 className="fs-18 pb-3 fw-bold">
                  Accelerate time to market
                </h3>
                <p>
                  This is just a simple text made for this unique and awesome
                  template, you can replace it with any text.
                </p>
              </div>
            </div>
          </div>
          {/* end col-lg-4 */}
          <div className="col-lg-4 responsive-column-half">
            <div className="info-box px-2 text-center">
              <div className="icon-element mb-4 shadow-sm mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28px"
                  viewBox="0 0 24 24"
                  width="28px"
                  fill="#48a868"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
              </div>
              <div className="info-body">
                <h3 className="fs-18 pb-3 fw-bold">
                  Protect institutional knowledge
                </h3>
                <p>
                  This is just a simple text made for this unique and awesome
                  template, you can replace it with any text.
                </p>
              </div>
            </div>
          </div>
          {/* end col-lg-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Info;

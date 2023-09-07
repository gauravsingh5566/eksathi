import React from "react";

const Funfact = () => {
  return (
    <section className="funfact-area">
      <div className="container">
        <div className="counter-box bg-white shadow-md rounded-rounded px-4">
          <div className="row">
            <div className="col responsive-column-half border-right border-right-gray">
              <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                <div className="media-body">
                  <h5 className="fw-semi-bold pb-2">80+ million</h5>
                  <p className="lh-20">Monthly visitors to our network</p>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col responsive-column-half border-right border-right-gray">
              <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                <div className="media-body">
                  <h5 className="fw-semi-bold pb-2">25+ Million</h5>
                  <p className="lh-20">Questions asked to-date</p>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col responsive-column-half border-right border-right-gray">
              <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                <div className="media-body">
                  <h5 className="fw-semi-bold pb-2">14.7 seconds</h5>
                  <p className="lh-20">Average time between new questions</p>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col responsive-column-half border-right border-right-gray">
              <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                <div className="media-body">
                  <h5 className="fw-semi-bold pb-2">40+ Billion</h5>
                  <p className="lh-20">Times a developer got help</p>
                </div>
              </div>
            </div>
            {/* end col */}
            <div className="col responsive-column-half">
              <div className="media media-card text-center px-0 py-4 shadow-none rounded-0 bg-transparent counter-item mb-0">
                <div className="media-body">
                  <h5 className="fw-semi-bold pb-2">10,000+</h5>
                  <p className="lh-20">Customer companies for all products</p>
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end counter-box */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Funfact;

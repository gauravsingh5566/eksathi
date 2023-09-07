import AskQuestion from "pages/Forum/components/Questions/AskQuestion";
import React from "react";
import { useState } from "react";

const CallToAction5 = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <section className="get-started-area py-5 bg-dark position-relative z-index-1 container border rounded shadow" style={{ transform: "translate(0px,30px)" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 py-4">
            <h2 className="section-title fs-35 lh-40 text-white">
              Build a private community to share technical or non-technical
              knowledge
            </h2>
          </div>
          <div className="col-lg-5 text-right">
            <span onClick={() => setOpen(true)} className="btn theme-btn rounded">
              Ask a Question <i className="la la-arrow-right icon ml-1" />
            </span>
          </div>
        </div>
      </div>
      <AskQuestion open={open} handleClose={handleClose}/>
      {/* end container */}
    </section>
  );
};

export default CallToAction5;

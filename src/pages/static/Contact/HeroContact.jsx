import React from "react";

const HeroContact = () => {
  return (
    <section className="hero-area bg-white shadow-sm pt-80px pb-80px">
      <span className="icon-shape icon-shape-1" />
      <span className="icon-shape icon-shape-2" />
      <span className="icon-shape icon-shape-3" />
      <span className="icon-shape icon-shape-4" />
      <span className="icon-shape icon-shape-5" />
      <span className="icon-shape icon-shape-6" />
      <span className="icon-shape icon-shape-7" />
      <div className="container">
        <div className="hero-content text-center">
          <h2 className="section-title pb-3">We'd love to here from you</h2>
          <p className="section-desc">
            Your thoughtful suggestions and sincere feedback is important to us.
            <br /> Please, feel free to let us know anything you have in your
            mind.
          </p>
        </div>
        {/* end hero-content */}
      </div>
      {/* end container */}
    </section>
  );
};

export default HeroContact;

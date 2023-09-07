import React from 'react'

const AboutSection = () => {
    return (
        <section className="hero-area section-padding bg-gray">
            <span className="icon-shape icon-shape-1 is-scale" />
            <span className="icon-shape icon-shape-2 is-bounce" />
            <span className="icon-shape icon-shape-3 is-swing" />
            <span className="icon-shape icon-shape-4 is-spin" />
            <span className="icon-shape icon-shape-5 is-spin" />
            <span className="icon-shape icon-shape-6 is-bounce" />
            <span className="icon-shape icon-shape-7 is-tilt" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="/images/graphics/about.png" className='w-100' alt="" style={{ maxHeight: "450px", objectFit: "contain" }} />
                    </div>
                    {/* end col-lg-6 */}
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h3 className="fs-16 fw-medium pb-3" style={{ fontStyle: "stroke" }}>Who we are</h3>
                            <h2 className="section-title fs-40 pb-3 lh-55">
                                Empowering the world to build network of Students and Teachers through collectively sharing knowledge.
                            </h2>
                            <p className="lh-26 pb-3">
                                Our public platform aims to serve{" "}
                                <strong className="fw-medium text-black">
                                    Students and Teachers Fraternity
                                </strong>
                                , making it one of the most popular websites in the
                                world.
                            </p>
                            <p className="lh-26">
                                Our asynchronous knowledge management and collaboration
                                offering{" "}
                                <strong className="fw-medium text-black">
                                    EkSathi for Institutions
                                </strong>
                                ,  is transforming how people learn by sharing knowledge.
                            </p>
                        </div>
                        {/* end hero-content */}
                    </div>
                    {/* end col-lg-6 */}
                </div>
                {/* end row */}
            </div>
            {/* end container */}
        </section>
    )
}

export default AboutSection
import React from 'react'

const ExperienceCard = () => {
    return (
        <div className="mb-3 p-2 p-lg-3 rounded shadow-sm mt-2">
            <div className="d-flex g-0">
                <div>
                    <img src="https://mui.com/static/images/cards/basement-beside-myself.jpeg" className="border rounded-3" alt="..." style={{ width: "80px", height: "80px" }} />
                </div>
                <div className="card-body p-0 pl-3">
                    <h5 >Full-stack Developer (MERN)
                    </h5>
                    <h6> {/* Place  */}
                        <small className='d-block fs-6 text-secondary'>Govardhan Learning Cloud · Full-time</small>
                        {/* Time Frame  */}
                        <small className='d-block fs-6 text-secondary'>Jul 2022 - Present · 11 mos</small>
                        {/* Place  */}
                        <small className='d-block fs-6 text-secondary'> Indirapuram · On-site</small>
                    </h6>
                    {/* <div className='mt-3'>
                        <p className="card-text ">
                            Design and develop full-stack web applications using React, Node.js, and MySQL with Sequelize ORM to facilitate online learning and education services for students across India...
                        </p>
                    </div> */}
                    {/* <p className="card-text">
                        <small className="text-body-secondary">
                            <span className='fw-bold'>Skills:</span>
                            node · Ubuntu · JSON · Functional Requirements · Front-End Development · Back-End Web Development
                        </small>
                    </p> */}
                </div>
            </div>
        </div>

    )
}

export default ExperienceCard
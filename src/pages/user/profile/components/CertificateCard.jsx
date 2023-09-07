import React from 'react'

const CertificateCard = () => {
    return (
        <div className=" mb-3 p-2 p-lg-3 rounded shadow-sm mt-2">
            <div className="d-flex g-0">
                <div>
                    <img src="https://media.licdn.com/dms/image/C4D0BAQHYemd2p7TxeQ/company-logo_100_100/0/1673333565608?e=1691625600&v=beta&t=kiD9sJehkSmrvgkKjYRA9dJ5k4aw7S6j68SU45YmtqM" className="border " alt="..." style={{ width: "80px", height: "80px" }} />
                </div>
                <div className="card-body p-0 pl-2">
                    <h5>Javascript (Intermediate) Certification
                    </h5>
                    <h6> {/* Place  */}
                        <small className='d-block fs-6 text-secondary'>Bachelor's Degree, Science</small>
                        {/* Time Frame  */}
                        <small className='d-block fs-6 text-secondary'>Jul 2022 - Present</small>
                    </h6>
                </div>
            </div>
        </div>

    )
}

export default CertificateCard;
import React from 'react'

const EducationCard = () => {
    return (
        <div className=" mb-3 p-2 p-lg-3 rounded shadow-sm mt-2">
            <div className="d-flex g-0">
                <div>
                    <img src="https://mui.com/static/images/cards/basement-beside-myself.jpeg" className="border " alt="..." style={{ width: "80px", height: "80px" }} />
                </div>
                <div className="card-body p-0 pl-2">
                    <h5>Indira Gandhi National Open University 
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

export default EducationCard;
import React from 'react'

const AchivementWidget = () => {
    return (
        <div className="card card-item">
            <div className="card-body">
                <h3 className="fs-17 pb-3">Number Achievement</h3>
                <div className="divider">
                    <span />
                </div>
                <div className="row no-gutters text-center">
                    <div className="col-lg-6 responsive-column-half">
                        <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color">980k</span>
                            <p className="fs-14">Questions</p>
                        </div>
                        {/* end icon-box */}
                    </div>
                    {/* end col-lg-6 */}
                    <div className="col-lg-6 responsive-column-half">
                        <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-2">
                                610k
                            </span>
                            <p className="fs-14">Answers</p>
                        </div>
                        {/* end icon-box */}
                    </div>
                    {/* end col-lg-6 */}
                    <div className="col-lg-6 responsive-column-half">
                        <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-3">
                                650k
                            </span>
                            <p className="fs-14">Answer accepted</p>
                        </div>
                        {/* end icon-box */}
                    </div>
                    {/* end col-lg-6 */}
                    <div className="col-lg-6 responsive-column-half">
                        <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-4">
                                320k
                            </span>
                            <p className="fs-14">Users</p>
                        </div>
                        {/* end icon-box */}
                    </div>
                    {/* end col-lg-6 */}
                    <div className="col-lg-12 pt-3">
                        <p className="fs-14">
                            To get answer of question{" "}
                            <a
                                href="signup.html"
                                className="text-color hover-underline"
                            >
                                Join
                                <i className="la la-arrow-right ml-1" />
                            </a>
                        </p>
                    </div>
                </div>
                {/* end row */}
            </div>
        </div>
    )
}

export default AchivementWidget
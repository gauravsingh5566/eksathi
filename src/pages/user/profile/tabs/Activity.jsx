import moment from 'moment';
import React from 'react';

const Activity = () => {

    return (
        <>
            <div className="user-panel-main-bar">
                {/* Answers */}
                <div className="user-panel mb-40px">
                    <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                        <h3 className="fs-17">
                            Answers <span>(50)</span>
                        </h3>
                        <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                            <label className="fs-14 fw-medium mr-2 mb-0">
                                Sort
                            </label>
                            <div className="w-100px">
                                <select className="select-container" defaultValue="Votes">
                                    <option value="Votes">
                                        Votes
                                    </option>
                                    <option value="Activity">Activity</option>
                                    <option value="Newest">Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="summary-panel">
                        <div className="vertical-list">
                            <div className="item post p-0">
                                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                    <div className="votes answered-accepted">
                                        <div className="vote-block lh-1 py-2" title="Votes">
                                            <small className="">Votes</small> <br />
                                            <span className="vote-counts">5</span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="fs-15">
                                            <a href="question-details.html" className='d-block'>
                                                How to make Git “forget” about a file that
                                                was tracked but is now in .gitignore?
                                            </a>
                                            <div className="tags mt-1">
                                                <a href="#" className="tag-link">
                                                    python
                                                </a>
                                                <a href="#" className="tag-link">
                                                    algorithm
                                                </a>
                                                <a href="#" className="tag-link">
                                                    graph
                                                </a>
                                            </div>
                                            <small>{moment(new Date()).calendar()}</small>
                                        </h5>
                                    </div>
                                </div>
                                {/* end media */}
                            </div>
                            {/* end item */}
                            <div className="pager pt-30px">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination generic-pagination generic--pagination">
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Previous"
                                            >
                                                <span aria-hidden="true">
                                                    <i className="la la-arrow-left" />
                                                </span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Next"
                                            >
                                                <span aria-hidden="true">
                                                    <i className="la la-arrow-right" />
                                                </span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="fs-13 pt-2">
                                    Showing 1-5 of (1,979) results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Answers */}
                {/* Questions */}
                <div className="user-panel mb-40px">
                    <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                        <h3 className="fs-17">
                            Questions <span>(50)</span>
                        </h3>
                        <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                            <label className="fs-14 fw-medium mr-2 mb-0">
                                Sort
                            </label>
                            <div className="w-100px">
                                <select className="select-container" defaultValue="Votes">
                                    <option value="Votes">
                                        Votes
                                    </option>
                                    <option value="Activity">Activity</option>
                                    <option value="Newest">Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="summary-panel">
                        <div className="vertical-list">
                            <div className="item post p-0">
                                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                    <div className="votes answered-accepted">
                                        <div className="vote-block lh-1 py-2" title="Votes">
                                            <small className="">Votes</small> <br />
                                            <span className="vote-counts">5</span>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <h5 className="fs-15">
                                            <a href="question-details.html" className='d-block'>
                                                How to make Git “forget” about a file that
                                                was tracked but is now in .gitignore?
                                            </a>
                                            <div className="tags mt-1">
                                                <a href="#" className="tag-link">
                                                    python
                                                </a>
                                                <a href="#" className="tag-link">
                                                    algorithm
                                                </a>
                                                <a href="#" className="tag-link">
                                                    graph
                                                </a>
                                            </div>
                                            <small>{moment(new Date()).calendar()}</small>
                                        </h5>
                                    </div>
                                </div>
                                {/* end media */}
                            </div>
                            {/* end item */}
                            <div className="pager pt-30px">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination generic-pagination generic--pagination">
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Previous"
                                            >
                                                <span aria-hidden="true">
                                                    <i className="la la-arrow-left" />
                                                </span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                4
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Next"
                                            >
                                                <span aria-hidden="true">
                                                    <i className="la la-arrow-right" />
                                                </span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="fs-13 pt-2">
                                    Showing 1-5 of (1,979) results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end Questions */}
            </div>
        </>
    );
};

export default Activity;
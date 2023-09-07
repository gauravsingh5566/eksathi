import React from "react";

const AllUsers = () => {
  return (
    <div>
      {/* ================================
   START QUESTION AREA
================================= */}
      <section className="question-area pt-40px pb-40px">
        <div className="container">
          <div className="filters pb-3">
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
              <h3 className="fs-22 fw-medium">Users</h3>
              <a
                href="ask-question.html"
                className="btn theme-btn theme-btn-sm"
              >
                Ask Question
              </a>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <form method="post" className="mr-3 w-25">
                <div className="form-group">
                  <input
                    className="form-control form--control form-control-sm h-auto lh-34"
                    type="text"
                    name="search"
                    placeholder="Filter by user"
                  />
                  <button className="form-btn" type="button">
                    <i className="la la-search" />
                  </button>
                </div>
              </form>
              <div
                className="btn-group btn--group mb-3"
                role="group"
                aria-label="Filter button group"
              >
                <a href="#" className="btn active">
                  Reputation
                </a>
                <a href="#" className="btn">
                  New users
                </a>
                <a href="#" className="btn">
                  Votes
                </a>
                <a href="#" className="btn">
                  Editors
                </a>
                <a href="#" className="btn">
                  Moderators
                </a>
              </div>
            </div>
          </div>
          {/* end filters */}
          <div className="row">
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Sector labs</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Barmar</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">CertainPerformance</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">mck</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo3.jpg" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">LoicTheAztec</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo4.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Günter Zöchbauer</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Suragch</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Martijn Pieters</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo3.jpg" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Frank van Puffelen</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo4.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Igor Goyda</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Sector labs</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Barmar</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">CertainPerformance</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">mck</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo3.jpg" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">LoicTheAztec</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo4.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Günter Zöchbauer</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Suragch</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo2.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Martijn Pieters</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo3.jpg" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Frank van Puffelen</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3 responsive-column-half">
              <div className="media media-card p-3">
                <a
                  href="user-profile.html"
                  className="media-img d-inline-block flex-shrink-0"
                >
                  <img src="images/company-logo4.png" alt="company logo" />
                </a>
                <div className="media-body">
                  <h5 className="fs-16 fw-medium">
                    <a href="user-profile.html">Igor Goyda</a>
                  </h5>
                  <small className="meta d-block lh-24 pb-1">
                    <span>New York, United States</span>
                  </small>
                  <p className="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                </div>
                {/* end media-body */}
              </div>
              {/* end media */}
            </div>
            {/* end col-lg-3 */}
          </div>
          {/* end row */}
          <div className="pager pt-20px">
            <nav aria-label="Page navigation example">
              <ul className="pagination generic-pagination pr-1">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="la la-arrow-left" />
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
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
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="la la-arrow-right" />
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <p className="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
          </div>
        </div>
        {/* end container */}
      </section>
      {/* end question-area */}
      {/* ================================
   END QUESTION AREA
================================= */}
    </div>
  );
};

export default AllUsers;

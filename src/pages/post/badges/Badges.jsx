import React from "react";

const Badges = () => {
  return (
    <div>
      {/* ================================
   START QUESTION AREA
================================= */}
      <section className="question-area pt-40px pb-40px">
        <div className="container">
          <div className="filters pb-3">
            <div className="d-flex flex-wrap align-items-center justify-content-between pb-4">
              <div className="pr-3">
                <h3 className="fs-22 fw-medium">Badges</h3>
                <p className="fs-15 lh-22 my-2">
                  Besides gaining reputation with your questions and answers,
                  you receive badges for being especially helpful.
                  <br /> Badges appears on your profile page, questions &amp;
                  answers.
                </p>
              </div>
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
                    placeholder="Filter by badge name"
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
                  All
                </a>
                <a href="#" className="btn">
                  Bronze
                </a>
                <a href="#" className="btn">
                  Silver
                </a>
                <a href="#" className="btn">
                  Gold
                </a>
              </div>
            </div>
          </div>
          {/* end filters */}
          <div className="row">
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Altruist
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      First bounty you manually award on another person's
                      question
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Analytical
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>43587</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Visited every section of the FAQ
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Announcer
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>227641</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Share a link to a post later visited by 25 unique IP
                      addresses
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Archaeologist
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>2514</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Edit 100 posts that were inactive for 6 months
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Autobiographer
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>1367031</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Complete "About Me" section of user profile
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Benefactor
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>48793</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      First bounty you manually award on your own question
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Beta
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Voted 10 times, added 3 posts score &gt; 0, and visited
                      the site on 3 separate days during the private beta
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Booster
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Share a link to a post later visited by 300 unique IP
                      addresses
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Census
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Completed the annual EkSathi survey; your responses are
                      anonymous
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Citizen Patrol
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      First flagged post
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Civic Duty
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Vote 300 or more times
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Cleanup
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      First rollback
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Commentator
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Leave 10 comments
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-3" /> Constable
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>0</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Served as a pro-tem moderator for at least 1 year or
                      through site graduation
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-3" /> Copy Editor
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Edit 500 posts (excluding own or deleted posts and tag
                      edits)
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Critic
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      First down vote
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Curious
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Ask a well-received question on 5 separate days, and
                      maintain a positive question record
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Deputy
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Raise 80 helpful flags
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball" /> Disciplined
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Delete own post with score of 3 or higher
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
            {/* end col-lg-3 */}
            <div className="col-lg-3">
              <div className="card card-item border border-gray">
                <div className="card-body p-3">
                  <div className="badge-item">
                    <a
                      href="#"
                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                    >
                      <span className="ball bg-gray" /> Documentation Beta
                    </a>
                    <span className="item-multiplier fs-13 fw-medium">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                    <p className="fs-13 lh-18 pt-2 text-black-50">
                      Contributed 3+ substantive pieces of documentation during
                      the private beta
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
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

export default Badges;

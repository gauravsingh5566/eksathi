import React from 'react'

const UserActivityTab = () => {
    return (
        <div className="user-panel-main-bar">
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Reputation</h3>
                </div>
                <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                    <div className="media-body">
                        <h5 className="fw-medium">224,110</h5>
                        <p className="fs-15">top 0.01% overall</p>
                    </div>
                </div>
                <div className="user-stats d-flex flex-wrap align-items-center">
                    <div className="stat flex-grow-1 my-1">
                        <h4 className="fs-15 text-gray pb-2">
                            Next tag badge:
                        </h4>
                        <span className="badge badge-md badge-gray">
                            <span className="ball" /> function-pointers
                        </span>
                    </div>
                    <div className="stat text-center mr-3 my-1">
                        <small className="d-block lh-15 pb-1">
                            149/100 score
                        </small>
                        <div className="progress progress-slim bg-gray-2">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                        </div>
                    </div>
                    <div className="stat text-center ml-0 my-1">
                        <small className="d-block lh-15 pb-1">
                            19/20 answers
                        </small>
                        <div className="progress progress-slim bg-gray-2">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Badges</h3>
                </div>
                <div className="badge-stats d-flex align-items-center mb-4 text-center">
                    <div className="stat flex-grow-1">
                        <span
                            className="badge d-block mr-2 badge-md badge-gold"
                            title="Gold"
                        >
                            <span className="ball gold" /> 91
                        </span>
                    </div>
                    <div className="stat flex-grow-1">
                        <span
                            className="badge d-block mr-2 badge-md badge-gray"
                            title="Silver"
                        >
                            <span className="ball silver" /> 560
                        </span>
                    </div>
                    <div className="stat flex-grow-1">
                        <span
                            className="badge d-block badge-md badge-bronze"
                            title="Bronze"
                        >
                            <span className="ball" /> 632
                        </span>
                    </div>
                </div>
                {/* end badge-stats */}
                <div className="user-stats d-flex align-items-center">
                    <div className="stat flex-grow-1">
                        <h4 className="fs-15 text-gray pb-2">Newest</h4>
                        <a href="#" className="badge badge-md badge-dark">
                            <span className="ball silver" /> Good Answer
                        </a>
                    </div>
                    <div className="stat flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between pb-2">
                            <h4 className="fs-15 text-gray">Next badge</h4>
                            <span className="count fs-14">72/80</span>
                        </div>
                        <div className="progress progress-fat">
                            <div
                                className="progress-bar bg-gray-2"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <span className="text-black">Deputy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-10px">
                <div className="bg-gray p-3 rounded-rounded mb-3">
                    <h3 className="fs-17">Impact</h3>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                            <div className="media-body">
                                <h5 className="fw-medium">~46.3m</h5>
                                <p className="fs-15">people reached</p>
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                        <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                            <div className="media-body">
                                <h5 className="fw-medium">122</h5>
                                <p className="fs-15">posts edited</p>
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                        <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                            <div className="media-body">
                                <h5 className="fw-medium">72</h5>
                                <p className="fs-15">helpful flags</p>
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-3 */}
                    <div className="col-lg-3">
                        <div className="media media-card align-items-center shadow-none border border-gray p-3 text-center">
                            <div className="media-body">
                                <h5 className="fw-medium">1,351</h5>
                                <p className="fs-15">votes cast</p>
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-3 */}
                </div>
                {/* end row */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded">
                    <div className="filter-option-box w-20">
                        <select className="select-container">
                            <option value="summary" selected>
                                Summary
                            </option>
                            <option value="answers">Answers</option>
                            <option value="questions">Questions</option>
                            <option value="tags">Tags</option>
                            <option value="badges">Badges</option>
                            <option value="bookmarks">Bookmarks</option>
                            <option value="bounties">Bounties</option>
                            <option value="reputation">Reputation</option>
                            <option value="activity">All actions</option>
                        </select>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="border-bottom border-bottom-gray p-3 d-flex align-items-center justify-content-between">
                        <h4 className="fs-15 fw-regular">
                            Answers <span>(1,979)</span>
                        </h4>
                        <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                            <label className="fs-14 fw-medium mr-2 mb-0">
                                Sort
                            </label>
                            <div className="w-100px">
                                <select className="select-container">
                                    <option selected="selected" value="Votes">
                                        Votes
                                    </option>
                                    <option value="Activity">Activity</option>
                                    <option value="Newest">Newest</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-list">
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">999k</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            How to make Git “forget” about a file that
                                            was tracked but is now in .gitignore?
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">4714</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Undoing a git rebase
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">4448</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Difference between “git add -A” and “git add
                                            .”
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">3275</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            How to find and restore a deleted file in a
                                            Git repository
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">2822</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Branch from a previous commit using Git
                                        </a>
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
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
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
                            <select className="select-container">
                                <option selected="selected" value="Votes">
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
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">2653</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            What are the correct version numbers for C#?
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">563</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Curious null-coalescing operator custom
                                            implicit conversion behaviour
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">363</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            What's your most controversial programming
                                            opinion?
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">336</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Performance surprise with “as” and nullable
                                            types
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">322</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            What's the strangest corner case you've seen
                                            in C# or .NET? [closed]
                                        </a>
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
                                Showing 1-5 of (50) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded">
                    <h3 className="fs-17">
                        Tags <span>(4,654)</span>
                    </h3>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item tags d-flex align-items-center">
                            <span className="tag-stat mr-2 fs-14">244k</span>
                            <div className="flex-grow-1">
                                <a
                                    href="#"
                                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                                >
                                    c#
                                </a>
                            </div>
                            <span className="item-multiplier fs-14">
                                <span>×</span>
                                <span>19616</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item tags d-flex align-items-center">
                            <span className="tag-stat mr-2 fs-14">146k</span>
                            <div className="flex-grow-1">
                                <a
                                    href="#"
                                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                                >
                                    java
                                </a>
                            </div>
                            <span className="item-multiplier fs-14">
                                <span>×</span>
                                <span>10512</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item tags d-flex align-items-center">
                            <span className="tag-stat mr-2 fs-14">89k</span>
                            <div className="flex-grow-1">
                                <a
                                    href="#"
                                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                                >
                                    .net
                                </a>
                            </div>
                            <span className="item-multiplier fs-14">
                                <span>×</span>
                                <span>5569</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item tags d-flex align-items-center">
                            <span className="tag-stat mr-2 fs-14">34k</span>
                            <div className="flex-grow-1">
                                <a
                                    href="#"
                                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                                >
                                    linq
                                </a>
                            </div>
                            <span className="item-multiplier fs-14">
                                <span>×</span>
                                <span>2982</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item tags d-flex align-items-center">
                            <span className="tag-stat mr-2 fs-14">23k</span>
                            <div className="flex-grow-1">
                                <a
                                    href="#"
                                    className="tag-link tag-link-md tag-link-blue mb-0 lh-20"
                                >
                                    string
                                </a>
                            </div>
                            <span className="item-multiplier fs-14">
                                <span>×</span>
                                <span>999</span>
                            </span>
                        </div>
                        {/* item */}
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
                                Showing 1-5 of (4,654) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                        Badges <span>(765)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                            Sort
                        </label>
                        <div className="w-100px">
                            <select className="select-container">
                                <option selected="selected" value="Recent">
                                    Recent
                                </option>
                                <option value="Class">Class</option>
                                <option value="Name">Name</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item">
                            <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                            >
                                <span className="ball silver" /> Good Answer
                            </a>
                            <span className="item-multiplier fs-14 fw-medium">
                                <span>×</span>
                                <span>4142</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item">
                            <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                            >
                                <span className="ball" /> Nice Answer
                            </a>
                            <span className="item-multiplier fs-14 fw-medium">
                                <span>×</span>
                                <span>586</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item">
                            <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                            >
                                <span className="ball gold" /> Great Answer
                            </a>
                            <span className="item-multiplier fs-14 fw-medium">
                                <span>×</span>
                                <span>1310</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item">
                            <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                            >
                                <span className="ball silver" /> Enlightened
                            </a>
                            <span className="item-multiplier fs-14 fw-medium">
                                <span>×</span>
                                <span>2863</span>
                            </span>
                        </div>
                        {/* item */}
                        <div className="item">
                            <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center mr-1"
                            >
                                <span className="ball silver" /> Guru
                            </a>
                            <span className="item-multiplier fs-14 fw-medium">
                                <span>×</span>
                                <span>131</span>
                            </span>
                        </div>
                        {/* item */}
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
                                Showing 1-5 of (765) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                        Followed posts <span>(20)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                            Sort
                        </label>
                        <div className="w-100px">
                            <select className="select-container">
                                <option value="Votes">Votes</option>
                                <option selected="selected" value="Activity">
                                    Activity
                                </option>
                                <option value="Newest">Newest</option>
                                <option value="Views">Views</option>
                                <option value="Added">Added</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <svg
                                    aria-hidden="true"
                                    className="svg-icon ml-3 icon-question"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#7d848c"
                                        d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm7.75-3.97c.32-.37.55-.75.7-1.15.18-.51.28-1.11.28-1.79 0-1.29-.35-2.29-1.03-3a3.66 3.66 0 00-2.78-1.07 3.7 3.7 0 00-2.8 1.07c-.73.82-1.1 1.9-1.03 3 0 1.29.35 2.29 1.03 3a3.76 3.76 0 002.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 01-1.28-.66zm-1.27-.9a5.4 5.4 0 00-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.4-.46-.6-1.15-.6-2.07 0-.9.2-1.58.6-2.04a2 2 0 011.57-.67 2 2 0 011.58.67c.4.45.6 1.13.6 2.04 0 .44-.05.83-.16 1.17-.1.34-.25.63-.45.87z"
                                    />
                                </svg>
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">1203</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            git: undo all working dir changes including
                                            new files
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <svg
                                    aria-hidden="true"
                                    className="svg-icon ml-3 icon-answer"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#7d848c"
                                        d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                                    />
                                </svg>
                                <div className="votes">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">1117</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            How to revert uncommitted changes including
                                            files and folders?
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <svg
                                    aria-hidden="true"
                                    className="svg-icon ml-3 icon-answer"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#7d848c"
                                        d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                                    />
                                </svg>
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">76</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Detected package downgrade warning (dotnet
                                            core, vs 2017)
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <svg
                                    aria-hidden="true"
                                    className="svg-icon ml-3 icon-answer"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#7d848c"
                                        d="M14 14H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2h12a2 2 0 012 2v14l-3-3zm-1.02-3L9.82 3H8.14l-3.06 8h1.68l.65-1.79h3.15l.69 1.79h1.73zm-2.93-3.12H7.9l1.06-2.92 1.09 2.92z"
                                    />
                                </svg>
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">73</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            What is the difference between a variable,
                                            object, and reference? [duplicate]
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <svg
                                    aria-hidden="true"
                                    className="svg-icon ml-3 icon-question"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        fill="#7d848c"
                                        d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm7.75-3.97c.32-.37.55-.75.7-1.15.18-.51.28-1.11.28-1.79 0-1.29-.35-2.29-1.03-3a3.66 3.66 0 00-2.78-1.07 3.7 3.7 0 00-2.8 1.07c-.73.82-1.1 1.9-1.03 3 0 1.29.35 2.29 1.03 3a3.76 3.76 0 002.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.2 5.2 0 01-1.28-.66zm-1.27-.9a5.4 5.4 0 00-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.4-.46-.6-1.15-.6-2.07 0-.9.2-1.58.6-2.04a2 2 0 011.57-.67 2 2 0 011.58.67c.4.45.6 1.13.6 2.04 0 .44-.05.83-.16 1.17-.1.34-.25.63-.45.87z"
                                    />
                                </svg>
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">24</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            I've found a bug in the JIT/CLR - now how do
                                            I debug or reproduce it?
                                        </a>
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
                                Showing 1-5 of (20) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                        Bookmarks <span>(12)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                            Sort
                        </label>
                        <div className="w-100px">
                            <select className="select-container">
                                <option value="Votes">Votes</option>
                                <option selected="selected" value="Activity">
                                    Activity
                                </option>
                                <option value="Newest">Newest</option>
                                <option value="Views">Views</option>
                                <option value="Added">Added</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">1203</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            git: undo all working dir changes including
                                            new files
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">1117</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            How to revert uncommitted changes including
                                            files and folders?
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">76</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            Detected package downgrade warning (dotnet
                                            core, vs 2017)
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">73</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            What is the difference between a variable,
                                            object, and reference? [duplicate]
                                        </a>
                                    </h5>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item post p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div className="vote-block" title="Votes">
                                        <span className="vote-counts">24</span>
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5 className="fs-15">
                                        <a href="question-details.html">
                                            I've found a bug in the JIT/CLR - now how do
                                            I debug or reproduce it?
                                        </a>
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
                                Showing 1-5 of (12) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                        Active bounties <span>(20)</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                            Sort
                        </label>
                        <div className="w-100px">
                            <select className="select-container">
                                <option selected="selected" value="Active">
                                    Active
                                </option>
                                <option value="Offered">Offered</option>
                                <option value="Earned">Earned</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes">
                                    <div
                                        className="vote-block d-flex align-items-center justify-content-between"
                                        title="Votes"
                                    >
                                        <span className="vote-counts">6475</span>
                                        <span className="vote-icon" />
                                    </div>
                                    <div
                                        className="answer-block d-flex align-items-center justify-content-between"
                                        title="Answers"
                                    >
                                        <span className="vote-counts">22</span>
                                        <span className="answer-icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5>
                                        <a
                                            href="question-details.html"
                                            className="d-flex align-items-center"
                                        >
                                            <span className="badge bg-12 mr-2 text-white">
                                                +100
                                            </span>{" "}
                                            How to make Git “forget” about a file that
                                            was tracked but is now in .gitignore?
                                        </a>
                                    </h5>
                                    <small className="meta">
                                        <span className="pr-1">yesterday</span>
                                        <a href="#" className="author">
                                            edublog
                                        </a>
                                    </small>
                                    <div className="tags">
                                        <a href="#" className="tag-link">
                                            git
                                        </a>
                                        <a href="#" className="tag-link">
                                            gitignore
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div
                                        className="vote-block d-flex align-items-center justify-content-between"
                                        title="Votes"
                                    >
                                        <span className="vote-counts">4711</span>
                                        <span className="vote-icon" />
                                    </div>
                                    <div
                                        className="answer-block d-flex align-items-center justify-content-between"
                                        title="Answers"
                                    >
                                        <span className="vote-counts">-2</span>
                                        <span className="answer-icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5>
                                        <a
                                            href="question-details.html"
                                            className="d-flex align-items-center"
                                        >
                                            <span className="badge bg-12 mr-2 text-white">
                                                +500
                                            </span>{" "}
                                            Catching errors being thrown within module
                                        </a>
                                    </h5>
                                    <small className="meta">
                                        <span className="pr-1">1 hour ago</span>
                                        <a href="#" className="author">
                                            edublog
                                        </a>
                                    </small>
                                    <div className="tags">
                                        <a href="#" className="tag-link">
                                            python
                                        </a>
                                        <a href="#" className="tag-link">
                                            error-handling
                                        </a>
                                        <a href="#" className="tag-link">
                                            gevent
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes answered-accepted">
                                    <div
                                        className="vote-block d-flex align-items-center justify-content-between"
                                        title="Votes"
                                    >
                                        <span className="vote-counts">4448</span>
                                        <span className="vote-icon" />
                                    </div>
                                    <div
                                        className="answer-block d-flex align-items-center justify-content-between"
                                        title="Answers"
                                    >
                                        <span className="vote-counts">11</span>
                                        <span className="answer-icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5>
                                        <a
                                            href="question-details.html"
                                            className="d-flex align-items-center"
                                        >
                                            <span className="badge bg-12 mr-2 text-white">
                                                +200
                                            </span>{" "}
                                            Alien Dictionary Python
                                        </a>
                                    </h5>
                                    <small className="meta">
                                        <span className="pr-1">2 days ago</span>
                                        <a href="#" className="author">
                                            edublog
                                        </a>
                                    </small>
                                    <div className="tags">
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
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes">
                                    <div
                                        className="vote-block d-flex align-items-center justify-content-between"
                                        title="Votes"
                                    >
                                        <span className="vote-counts">3274</span>
                                        <span className="vote-icon" />
                                    </div>
                                    <div
                                        className="answer-block d-flex align-items-center justify-content-between"
                                        title="Answers"
                                    >
                                        <span className="vote-counts">33</span>
                                        <span className="answer-icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5>
                                        <a
                                            href="question-details.html"
                                            className="d-flex align-items-center"
                                        >
                                            <span className="badge bg-12 mr-2 text-white">
                                                +50
                                            </span>{" "}
                                            How to parse JS code into
                                            one-operation-per-line with fewest temp
                                            variables?
                                        </a>
                                    </h5>
                                    <small className="meta">
                                        <span className="pr-1">May 12 '20</span>
                                        <a href="#" className="author">
                                            edublog
                                        </a>
                                    </small>
                                    <div className="tags">
                                        <a href="#" className="tag-link">
                                            javascript
                                        </a>
                                        <a href="#" className="tag-link">
                                            compilation
                                        </a>
                                        <a href="#" className="tag-link">
                                            register-allocation
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* end media */}
                        </div>
                        {/* end item */}
                        <div className="item p-0">
                            <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                                <div className="votes">
                                    <div
                                        className="vote-block d-flex align-items-center justify-content-between"
                                        title="Votes"
                                    >
                                        <span className="vote-counts">2822</span>
                                        <span className="vote-icon" />
                                    </div>
                                    <div
                                        className="answer-block d-flex align-items-center justify-content-between"
                                        title="Answers"
                                    >
                                        <span className="vote-counts">11</span>
                                        <span className="answer-icon" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <h5>
                                        <a
                                            href="question-details.html"
                                            className="d-flex align-items-center"
                                        >
                                            <span className="badge bg-12 mr-2 text-white">
                                                +50
                                            </span>{" "}
                                            vue 3 Server Side Rendering with Vuex and
                                            Router
                                        </a>
                                    </h5>
                                    <small className="meta">
                                        <span className="pr-1">May 12 '20</span>
                                        <a href="#" className="author">
                                            edublog
                                        </a>
                                    </small>
                                    <div className="tags">
                                        <a href="#" className="tag-link">
                                            vue.js
                                        </a>
                                        <a href="#" className="tag-link">
                                            vuex
                                        </a>
                                        <a href="#" className="tag-link">
                                            vuejs3
                                        </a>
                                        <a href="#" className="tag-link">
                                            router
                                        </a>
                                    </div>
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
                                Showing 1-5 of (20) results
                            </p>
                        </div>
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
            <div className="user-panel mb-40px">
                <div className="bg-gray p-3 rounded-rounded">
                    <h3 className="fs-17">
                        Votes cast <span>(18,850)</span>
                    </h3>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        <div className="item">
                            <p className="fs-14">
                                Of the votes cast,{" "}
                                <span className="text-black">18,808</span> were
                                upvotes and <span className="text-black">42</span>{" "}
                                were downvotes.{" "}
                                <span className="text-black">Arden Smith</span>{" "}
                                voted on questions{" "}
                                <span className="text-black">7,553</span> times
                                and <span className="text-black">11,297</span>{" "}
                                times on answers.
                            </p>
                        </div>
                        {/* end item */}
                        <div className="item">
                            <p className="fs-14">
                                <span className="text-black">50</span> votes in
                                the last month
                            </p>
                        </div>
                        {/* end item */}
                        <div className="item">
                            <p className="fs-14">
                                <span className="text-black">62</span> votes in
                                the last week
                            </p>
                        </div>
                        {/* end item */}
                        <div className="item">
                            <p className="fs-14">
                                <span className="text-black">1</span> vote in the
                                last day
                            </p>
                        </div>
                        {/* end item */}
                    </div>
                </div>
                {/* end summary-panel */}
            </div>
            {/* end user-panel */}
        </div>
    )
}

export default UserActivityTab
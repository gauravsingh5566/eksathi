import React from 'react'

const TopPosts = () => {
  return (
    <>
    <div className="user-panel mb-30px">
                <div className="bg-gray p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-17">
                        Top posts <span>(865)</span>
                    </h3>
                    <div className="filter-option-box w-100px lh-1">
                        <select className="select-container" defaultValue="Votes">
                            <option value="Votes">
                                Votes
                            </option>
                            <option value="Newest">Newest</option>
                        </select>
                    </div>
                </div>
                <div className="vertical-list">
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
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
                                    <a href="question-details.html">
                                        How to make Git “forget” about a file that was
                                        tracked but is now in .gitignore?
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
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
                                    <a href="question-details.html">
                                        Undoing a git rebase
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
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
                                    <a href="question-details.html">
                                        Difference between “git add -A” and “git add
                                        .”
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
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
                                    <a href="question-details.html">
                                        How to find and restore a deleted file in a
                                        Git repository
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
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
                                    <a href="question-details.html">
                                        How to undo “git commit --amend” done instead
                                        of “git commit”
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="item p-0">
                        <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                            <div className="votes py-2 answered-accepted">
                                <div
                                    className="vote-block d-flex align-items-center justify-content-between"
                                    title="Votes"
                                >
                                    <span className="vote-counts">2741</span>
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
                                    <a href="question-details.html">
                                        Branch from a previous commit using Git
                                    </a>
                                </h5>
                                <small className="meta">
                                    <span>May 12 '20</span>
                                </small>
                            </div>
                        </div>
                        {/* end media */}
                    </div>
                    {/* end item */}
                    <div className="view-more pt-3 px-3">
                        <a href="#" className="btn-text fs-15">
                            View all questions and answers{" "}
                            <i className="la la-arrow-right icon ml-1" />
                        </a>
                    </div>
                </div>
                {/* end vertical-list */}
            </div>
    </>
  )
}

export default TopPosts;
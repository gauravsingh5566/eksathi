import React from 'react'

const CommentForm = () => {
    return (
        <>
            <div className="comment-form">
                <div className="comment-link-wrap text-center">
                    <a
                        className="collapse-btn comment-link"
                        role="button"
                        title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                    >
                        Add a comment
                    </a>
                </div>
                <div
                    className="border-top border-top-gray mt-2 pt-3"
                >
                    <form method="post" className="row pb-3">
                        <div className="col-lg-12">
                            <h4 className="fs-16 pb-2">
                                Leave a Comment
                            </h4>
                            <div className="divider mb-2">
                                <span />
                            </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-6">
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20">
                                    Name
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control form-control-sm fs-13"
                                        type="text"
                                        name="text"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6">
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20">
                                    Email (Address never made public)
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control form-control-sm fs-13"
                                        type="text"
                                        name="text"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12">
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20">
                                    Website
                                </label>
                                <div className="form-group">
                                    <input
                                        className="form-control form--control form-control-sm fs-13"
                                        type="text"
                                        name="text"
                                        placeholder="Website link"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                            <div className="input-box">
                                <label className="fs-13 text-black lh-20">
                                    Message
                                </label>
                                <div className="form-group">
                                    <textarea
                                        className="form-control form--control form-control-sm fs-13"
                                        name="message"
                                        rows={5}
                                        placeholder="Your comment here..."
                                        defaultValue={""}
                                    />
                                    <div className="d-flex flex-wrap align-items-center pt-2">
                                        <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                            [named hyperlinks]
                                            (https://example.com)
                                        </div>
                                        <div className="mr-3 fw-bold fs-13">
                                            **bold**
                                        </div>
                                        <div className="mr-3 font-italic fs-13">
                                            _italic_
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                            <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                                <div>
                                    <div className="custom-control custom-checkbox fs-13">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="getNewCommentsTwo"
                                        />
                                        <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="getNewCommentsTwo"
                                        >
                                            Notify me of new comments vai
                                            email.
                                        </label>
                                    </div>
                                    <div className="custom-control custom-checkbox fs-13">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="getNewPostsTwo"
                                        />
                                        <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="getNewPostsTwo"
                                        >
                                            Notify me of new posts vai email.
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                    type="submit"
                                >
                                    Post Comment
                                </button>
                            </div>
                        </div>
                        {/* end col-lg-12 */}
                    </form>
                </div>
                {/* end collapse */}
            </div>
        </>
    )
}

export default CommentForm;
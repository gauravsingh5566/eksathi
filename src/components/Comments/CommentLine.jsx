import React from 'react'

const CommentLine = () => {
    return (
        <>
            <div className="comments-wrap">
                <ul className="comments-list">
                    <li>
                        <div className="comment-actions">
                            <span className="comment-score">1</span>
                        </div>
                        <div className="comment-body">
                            <span className="comment-copy">
                                Ah excellent! Thank you!
                            </span>
                            <span className="comment-separated">-</span>
                            <a
                                href="user-profile.html"
                                className="comment-user owner"
                                title="224,110 reputation"
                            >
                                Arden Smith
                            </a>
                            <span className="comment-separated">-</span>
                            <a href="#" className="comment-date">
                                8 hours ago
                            </a>
                        </div>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default CommentLine;
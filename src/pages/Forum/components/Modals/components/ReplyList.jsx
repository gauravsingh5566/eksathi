import { Link, Typography } from '@mui/joy';
import moment from 'moment';
import React from 'react'

const ReplyList = ({ reply }) => {
    return (
        <>
            {/* <Typography fontSize="sm">
                <Link
                    component="button"
                    color="neutral"
                    fontWeight="lg"
                    textColor="text.primary"
                >
                    {reply?.auther?.name}
                </Link>{' '}
                {reply?.reply}
            </Typography> */}
            <Typography fontSize="sm" id={"reply"+reply?.id}>
                <div className="comments-wrap">
                    <ul className="comments-list">
                        <li>
                            {/* <div className="comment-actions">
                                <span className="comment-score">1</span>
                            </div> */}
                            <div className="comment-body">
                                <span className="comment-copy">
                                    {reply?.reply}
                                </span>
                                <span className="comment-separated">-</span>
                                <a
                                    href={`/${reply?.auther?.username}`}
                                    className="comment-user owner"
                                    title="224,110 reputation"
                                >
                                    {reply?.auther?.name}
                                </a>
                                <span className="comment-separated">-</span>
                                <a href="#" className="comment-date">
                                    {moment(reply?.createdAt).fromNow()}
                                </a>
                            </div>
                        </li>
                    </ul>

                </div>
            </Typography>

        </>
    )
}

export default ReplyList;
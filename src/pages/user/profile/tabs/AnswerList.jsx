import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom';

const AnswerList = ({ answer }) => {
    return (
        <>
            <div className="item post p-0 hover-bg">
                <div className="media media-card media--card align-items-center shadow-none rounded-0 mb-0 bg-transparent">
                    <div className="votes answered-accepted">
                        <div className="vote-block lh-1 py-2" title="Votes">
                            <small className="">Votes</small> <br />
                            <span className="vote-counts">{answer?.votes?.totalCount}</span>
                        </div>
                    </div>
                    <div className="media-body">
                        <h5 className="fs-15">
                            <Link to={`/questions/${answer?.slug}`} className='d-block'>
                                {answer?.title}
                            </Link>
                            <div className="tags mt-1">
                                {
                                    answer?.tags?.map(tag => (
                                        <Link to={`/tags/${tag?.id}` } key={tag?.id} className="tag-link">
                                            {tag?.name}
                                        </Link>
                                    ))
                                }

                               
                            </div>
                            <small>{moment(answer?.createdAt).startOf().fromNow()}</small>
                        </h5>
                    </div>
                </div>
                {/* end media */}
            </div>
        </>
    )
}

export default AnswerList;
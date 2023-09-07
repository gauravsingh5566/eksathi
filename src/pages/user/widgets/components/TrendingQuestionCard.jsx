import moment from 'moment'
import React from 'react'
import { useEffect } from 'react'

const TrendingQuestionCard = ({question}) => {
    useEffect(()=> {

    }, [question]);
    return (
        <>
            <div className="media media-card media--card media--card-2">
                <div className="media-body">
                    <h5>
                        <a href="question-details.html">
                            {question?.title}
                        </a>
                    </h5>
                    <small className="meta">
                        <span className="pr-1">{moment(question?.createdAt).startOf().fromNow()}</span>
                        <span className="pr-1">. by</span>
                        <a href={"/user/" + question?.author?.id} className="author">
                            {question?.author?.first_name} {question?.author?.last_name}
                        </a>
                    </small>
                </div>
            </div>
        </>
    )
}

export default TrendingQuestionCard
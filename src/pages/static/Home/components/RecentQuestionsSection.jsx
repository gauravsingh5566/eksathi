import { Button, Card, CardContent, Typography } from '@mui/joy'
import { CardActions } from '@mui/material'
import { useGlobalContext } from 'global/context'
import moment from 'moment'
import QuestionCard from 'pages/Forum/components/Questions/QuestionCard'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RecentQuestionCard = ({ question }) => {
    return (
        <div className='col p-2'>
            <Card sx={{ minWidth: 275, minHeight: 200 }} className='shadow hover-shadow'>
                <CardContent>
                    <div className="media-body" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'

                    }}>
                        <div className="question ">
                            <h5 className='mb-1 truncate fw-bold'>
                                <a href={`/questions/${question?.slug}`}>
                                    {question?.title}

                                </a>
                            </h5>
                            <div className={'truncate fw-bold'}
                                dangerouslySetInnerHTML={{
                                    __html: question?.body,
                                }}
                            />
                        </div>
                        <small className="meta">
                            <span className="pr-1">
                                {moment(question?.createdAt).startOf().fromNow()}
                            </span>
                            <span className="pr-1">. by</span>
                            <a
                                // href={"/user/" + question?.author?.id} 
                                href='/user'
                                className="author linear-wipe">
                                {question?.author?.first_name} {question?.author?.last_name}

                            </a>
                        </small>
                    </div>

                </CardContent>

            </Card>
        </div>
    );
}

const RecentQuestionsSection = () => {
    const [questions, setQuestions] = useState([]);
    const { api } = useGlobalContext();

    const getQuestions = async () => {
        try {
            const res = await api.post(`/app/question/recent`);
            if (res?.status === 200) {
                console.log("Recent Questions: ", res?.data);
                setQuestions(res?.data?.results);
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <>
            <section className='container mb-5 py-5'>
                <div className='fw-bold mb-4 d-flex flex-wrap justify-content-between'>
                    <h3 className='fw-bold'>Recent Questions Asked</h3>
                    <Link to='/questions'>View All Questions</Link>
                </div>
                <div className="d-flex flex-wrap">
                    {
                        questions?.length ?
                            questions?.map((question) => (
                                <RecentQuestionCard question={question} />
                            )) : null
                    }
                </div>
            </section>
        </>
    )
}

export default RecentQuestionsSection
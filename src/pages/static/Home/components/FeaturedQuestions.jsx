import { CategoryRounded, Comment, CommentRounded, QuestionAnswer, QuestionAnswerRounded, ThumbUpAltRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Card, CardContent, IconButton, Stack, Tooltip, Typography } from '@mui/joy'
import { CardActions } from '@mui/material'
import { useGlobalContext } from 'global/context'
import moment from 'moment'
import QuestionCard from 'pages/Forum/components/Questions/QuestionCard'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FeaturedQuestionCard = ({ question }) => {
    return (
        <div className='col p-2'>
            <Card sx={{ minWidth: 275, minHeight: 250 }} className='shadow hover-shadow'>
                <CardContent>
                    <div className="media-body" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'

                    }}>
                        <div className="question mb-3 ">
                            <div className="d-flex justify-content-between align-items-center px-2">
                                <div>
                                    <Button
                                        variant='soft'
                                        color='warning'

                                        startDecorator={<CategoryRounded />}
                                    >{question?.category}</Button>
                                </div>
                                <div className='lh-1 d-flex flex-column align-items-center'>
                                    <p className='fs-18 fw-bold'>{question?.score}</p>
                                    <p className='fs-12'>Score</p>
                                </div>
                            </div>



                            {/* <div className={'truncate fw-bold'}
                                dangerouslySetInnerHTML={{
                                    __html: question?.body,
                                }}
                            /> */}
                        </div>
                        <h5 className='mb-1 truncate fw-bold fs-16 p-2' style={{ minHeight: 60 }}>
                            <a className='text-secondary' href={`/questions/${question?.slug}`}>
                                {question?.title}

                            </a>
                        </h5>
                        <Link to={`/${question?.author?.username}`} className='mb-4'>
                            <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto'}}>
                                <Avatar variant="soft" color="neutral"
                                    alt={question?.author?.first_name}
                                    src={question?.author?.profile_pic}
                                />
                                <div>
                                    <Typography level="body2">Asked by</Typography>
                                    <Typography fontWeight="lg" level="body2">
                                        {question?.author?.first_name} {question?.author?.last_name}
                                    </Typography>
                                </div>
                            </Box>
                        </Link>


                        <Stack direction='row' flexWrap='wrap' justifyContent='space-between' className="p-2 rounded" style={{ backgroundColor: 'rgb(250 237 255)' }}>

                            <Tooltip title="Votes">
                                <Button
                                    variant='plain'
                                    color='primary'

                                    startDecorator={<ThumbUpAltRounded />}
                                >{question?.question_vote_count + question?.answer_vote_count}</Button>
                            </Tooltip>
                            <Tooltip title="Answers">
                                <Button
                                    variant='plain'
                                    color='neutral'

                                    startDecorator={<QuestionAnswerRounded />}
                                >{question?.answer_count}</Button>
                            </Tooltip>
                            <Tooltip title="Conversation">
                                <Button
                                    variant='plain'
                                    color='info'

                                    startDecorator={<CommentRounded />}
                                >{question?.comment_count + question?.reply_count}</Button>
                            </Tooltip>
                        </Stack>
                        {/* <small className="meta px-2">
                            <span className="pr-1">
                                {moment(question?.createdAt).startOf().fromNow()}
                            </span>
                            <span className="pr-1">. by</span>
                            <a
                                // href={"/user/" + question?.author?.id} 
                                href='/user'
                                className="author linear-wipe">
                                {question?.author?.first_name} {question?.author?.last_name}
                                Santosh
                            </a>
                        </small> */}

                    </div>

                </CardContent>

            </Card>
        </div>
    );
}

const FeaturedQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const { api } = useGlobalContext();
    const [shortBy, setShortBy] = useState('popular'); // popular | trending | featured

    const getFeaturedQuestions = async () => {
        try {
            const res = await api.post(`/app/question/featured${shortBy ? `?shortBy=${shortBy}` : ""}`);
            if (res?.status === 200) {
                console.log("Featured Questions: ", res?.data);
                setQuestions(res?.data?.results);
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    useEffect(() => {
        getFeaturedQuestions();
    }, [shortBy]);

    return (
        <>
            <section className='container mb-5 py-5'>
                <div className='fw-bold mb-4 d-flex flex-wrap justify-content-between'>
                    <h3 className='fw-bold'>Featured Questions</h3>
                    <Link to='/questions'>View All Questions</Link>
                </div>
                <div className="d-flex flex-wrap">
                    {
                        questions?.length ?
                            questions?.map((question) => (
                                <FeaturedQuestionCard question={question} />
                            )) : null
                    }
                </div>
            </section>
        </>
    )
}

export default FeaturedQuestions
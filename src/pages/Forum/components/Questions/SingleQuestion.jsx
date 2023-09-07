import React, { useEffect, useState } from 'react';
import WriteAnswer from '../../components/Comments/WriteAnswer';
import Answers from '../../components/Answers/Answers';
import Questions from '../../components/Questions/Questions';
import { useGlobalContext } from 'global/context';

const SingleQuestion = ({ questionData, getQuestions }) => {
    const { api, apiAuth } = useGlobalContext();
    const [showAnswer, setShowAnswer] = useState(true);
    const [answers, setAnswers] = useState();
    const [question, setQuestion] = useState(questionData);
    const [showWriteAnswerBox, setShowWriteAnswerBox] = useState(true);
    const showAnswerBoxHandler = () => {
        if (showWriteAnswerBox) {
            setShowWriteAnswerBox(false);
        } else {
            setShowWriteAnswerBox(true);
        }
    }

    const showAnswerHandler = () => {
        if (showAnswer) {
            setShowAnswer(false);
        } else {
            setShowAnswer(true);
        }
    }

    const getAnswers = async () => {
        try {
            const res = await api.get(`app/answer?id=${question?.id}`);
            if (res.status === 200) {
                setAnswers(res?.data?.results);
                console.log("Answer Data: ", res);
            }
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        getAnswers();
        console.log("Single Question Component: ", question);
    }, []);

    return (
        <>
            <div className='rounded-4 mb-3 shadow-lg'>
                <Questions
                    showAnswerHandler={showAnswerHandler}
                    showAnswer={showAnswer}
                    questionData={question}
                    className='border rounded-4'
                    getQuestions={getQuestions}
                    isAnswered={answers?.length}
                    isSingle={true}
                />
                {
                    answers?.map((answer) => {
                        return <Answers showAnswer={showAnswer} answerData={answer} getQuestions={getQuestions} />
                    })
                }
                
                <WriteAnswer questionId={question?.id} showWriteAnswerBox={showWriteAnswerBox} setShowWriteAnswerBox={setShowWriteAnswerBox} showAnswerBoxHandler={showAnswerBoxHandler} getAnswers={getAnswers} />
            </div>
        </>
    )
}

export default SingleQuestion;
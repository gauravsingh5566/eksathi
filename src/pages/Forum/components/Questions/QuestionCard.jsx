import React, { useEffect, useState } from 'react';
import WriteAnswer from '../../components/Comments/WriteAnswer';
import Answers from '../../components/Answers/Answers';
import Questions from '../../components/Questions/Questions';
import { useGlobalContext } from 'global/context';

const QuestionCard = ({ question, getQuestions }) => {
    const {api} = useGlobalContext();
    const [showAnswer, setShowAnswer] = useState(false);
    const [answers, setAnswers] = useState([]);

    const showAnswerHandler = () => {
        if (showAnswer) {
            setShowAnswer(false);
        } else {
            setShowAnswer(true);
        }
    }

    const getAnswers = async () => {
        try {
            const res = await api.get(`/app/answer?id=${question?.id}`);
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
    }, []);

    return (
        <>
            <div className='rounded-4 mb-3 shadow-lg hover-shadow'>
                <Questions
                    showAnswerHandler={showAnswerHandler}
                    showAnswer={showAnswer}
                    questionData={question}
                    className='border rounded-4'
                    getQuestions={getQuestions}
                    isAnswered={answers?.length}
                />
                {/* {
                    answers?.map((answer) => {
                        return <Answers showAnswer={showAnswer} answer={answer} getQuestions={getQuestions}/>
                    })
                }
                <WriteAnswer questionId={question?.id} getQuestions={getQuestions}/> */}
            </div>
        </>
    )
}

export default QuestionCard;
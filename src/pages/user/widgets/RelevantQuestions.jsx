
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TrendingQuestionCard from './components/TrendingQuestionCard';
import { useGlobalContext } from 'global/context';

const RelevantQuestions = ({slug}) => {
    const {api, apiAuth} = useGlobalContext();
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        try {
            const res = await api.post(`/app/question/relevant?slug=${slug}`);
            if (res?.status === 200) {
                console.log('Relevant : ',res);
                setQuestions(res?.data?.relevantQuestions);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        getQuestions();
    }, [slug]);

    return (
        <div className="card card-item p-3 border">
            <div className="card-body p-0">
                <h3 className="fs-17 pb-3">Relevant Questions</h3>
                <div className="divider">
                    <span />
                </div>
                <div className="sidebar-questions pt-2">
              {  console.log(questions)}
                    {
                        
                        questions?.map((question) => (
                            <TrendingQuestionCard question={question}/>
                        ))
                    }
                    {/* end media */}
                    
                </div>
                {/* end sidebar-questions */}
            </div>
        </div>
    )
}

export default RelevantQuestions;
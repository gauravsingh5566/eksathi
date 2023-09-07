
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TrendingQuestionCard from './components/TrendingQuestionCard';
import { useGlobalContext } from 'global/context';

const TrendingQuestions = (props) => {
    const {api, apiAuth} = useGlobalContext();
    const [questions, setQuestions] = useState([]);

    const getQuestions = async () => {
        try {
            const res = await api.post(`/app/question/trending?type=${props?.type}`, {
                expertise: props?.expertise[0],
                // location: 'Indirapurum'
            });

            if (res?.status === 200) {
                console.log("Trending Question: ", res);
                setQuestions(res?.data?.results);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=> {
        getQuestions();
    }, []);

    return (
        <div className="card card-item p-3 shadow-lg">
            <div className="card-body p-0">
                <h3 className="fs-17 pb-3">Trending Questions</h3>
                <div className="divider">
                    <span />
                </div>
                <div className="sidebar-questions pt-2">
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

export default TrendingQuestions
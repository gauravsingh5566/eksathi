import React, { useState } from 'react'

import { useGlobalContext } from 'global/context'
import { Popup } from 'layout/Popup'
import { useEffect } from 'react'
import QuestionList from './QuestionList'
import { useOutletContext } from 'react-router-dom'

const QuestionsTab = ({ profile }) => {
    const { userData, api, apiAuth } = useGlobalContext();
    const [questions, setQuestions] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(3);
    const [offset, setOffset] = useState(0);
    const [sortBy, setSortBy] = useState('newest')

    const getQuestions = async () => {
        try {
            const res = await api.get(`/app/question/my?userId=${profile?.id ? profile?.id : userData?.id}&limit=${limit}`);
            if (res?.status === 200) {
                console.log('User Questions: ', res?.data);
                setQuestions(res?.data?.results);
            }
        } catch (err) {
            console.log('Error: ', err);
            Popup('error', err?.response?.data?.message);
        }
    }

    const handleSort = (value) => {
        setSortBy(value);
        getQuestions();
    }

    useEffect(() => {
        getQuestions();
    }, [userData, profile]);

    return (
        <div className="user-panel-main-bar">
            {/* Questions */}
            <div className="user-panel mb-40px">
                <div className=" p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-20 fw-bold">
                        {
                            profile?.id ?
                                `${profile?.first_name}'s Questions`
                                : "Questions"
                        }
                        <span> ({questions?.length})</span>
                    </h3>
                    {/* <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                        <label className="fs-14 fw-medium mr-2 mb-0">
                            Sort
                        </label>
                        <div className="w-100px">
                            <select className="select-container" defaultValue="Votes">
                                <option value="Votes">
                                    Votes
                                </option>
                                <option value="Activity">Activity</option>
                                <option value="Newest">Newest</option>
                            </select>
                        </div>
                    </div> */}
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        {
                            questions?.length ?
                                questions?.map((question) => (
                                    <QuestionList key={question?.id} question={question} />
                                )) : null
                        }
                        {/* end item */}
                        {/* <div className="pager pt-30px">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination generic-pagination generic--pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">
                                                <i className="la la-arrow-left" />
                                            </span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            4
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="#"
                                            aria-label="Next"
                                        >
                                            <span aria-hidden="true">
                                                <i className="la la-arrow-right" />
                                            </span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <p className="fs-13 pt-2">
                                Showing 1-5 of (1,979) results
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* end Questions */}
        </div>
    )
}

export default QuestionsTab
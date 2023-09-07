import React from 'react';
import AnswerList from './AnswerList';
import { useState } from 'react';
import { useGlobalContext } from 'global/context';
import { Popup } from 'layout/Popup';
import { useEffect } from 'react';
import { ArrowRightAltRounded, KeyboardArrowLeftRounded, KeyboardArrowRightRounded } from '@mui/icons-material';
import { Stack } from '@mui/joy';
import { useOutletContext } from 'react-router-dom';

const AnswersTab = ({profile}) => {
    const { userData, api, apiAuth } = useGlobalContext();
    const [answers, setAnswers] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(0);
    const [sortBy, setSortBy] = useState('newest')

    const getAnswers = async () => {
        try {
            const res = await api.get(`/app/user/answers/${profile?.id ? profile?.id : userData?.id}`);;
            if (res?.status === 200) {
                console.log('User Answered Questions: ', res?.data?.results);
                setAnswers(res?.data?.results);
            }
        } catch (err) {
            console.log('Error: ', err);
            // Popup('error', err?.response?.data?.message);
        }
    }

    const handleSort = (value) => {
        setSortBy(value);
        getAnswers();
    }

    useEffect(() => {
        getAnswers();
    }, [userData, profile]);
    return (
        <div className="user-panel-main-bar">
            {/* Answers */}
            <div className="user-panel mb-40px">
                <div className="p-3 rounded-rounded d-flex align-items-center justify-content-between">
                    <h3 className="fs-20 fw-bold">
                        Answers <span>({answers?.length})</span>
                    </h3>
                    <div className="filter-option-box flex-grow-1 d-flex align-items-center justify-content-end lh-1">
                       <Stack direction={"row"} spacing={3}>
                        <KeyboardArrowLeftRounded/>
                        <KeyboardArrowRightRounded/>
                       </Stack>
                    </div>
                </div>
                <div className="summary-panel">
                    <div className="vertical-list">
                        {
                            answers?.length ?
                            answers?.map((answer)=> {
                                return <AnswerList key={answer?.id} answer={answer}/>
                            })
                             : null
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
            {/* end Answers */}
        </div>
    )
}

export default AnswersTab
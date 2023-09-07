import { api } from 'api/api';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question';

const SearchResults = ({ title, data, keyword }) => {
    const [questionsData, setQuestionsData] = useState(data);
    const [limit, setLimit] = useState(10);
    const [afterId, setAfterId] = useState(0);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    const [totalQuestions, setTotalQuestions] = useState(0);

    // const getQuestions = async () => {
    //   try {
    //     const res = await api.get(
    //       `/post/question?limit=${limit}&after_id=${afterId}&tag=${tag}&category=${category}`
    //     );
    //     console.log("All Questions Res: ", res);
    //     if (res.status == 200) {
    //       setQuestionsData(res.data);
    //       console.log("Questions: ", questionsData);
    //       console.log("Length: ", questionsData);
    //       setPages(Math.round(res.data.length / limit));
    //       setTotalQuestions(res.data.length);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    const getOnlineUsers = () => {
        console.log("Get Online users")
    }

    const nextPage = () => {
        console.log("Next Page Clicked");
        if (page < pages) {
            // setPages(Math.round(pages));
            setPage(page + 1);
            setAfterId(afterId + limit);
            console.log("Page No: ", page);

        }
    }

    const prevPage = () => {
        console.log("Previous Page Clicked");
        if (page > 1) {
            setPage(page - 1);
            setAfterId(afterId - limit);
            console.log("Page No: ", page);
        }
    }

    const gotoPage = (num) => {
        if (afterId <= 0) {
            setAfterId(0);
            setPage(num);
        } else if (afterId > 0 && afterId < pages) {
            setAfterId(num * limit);
            setPage(num);
            console.log(`Page No - ${num} Clicked`);
        }
    }

    // useEffect(() => {
    //     console.log("Props Data : ",{
    //         questionsData,
    //         pages,
    //         totalQuestions
    //     });
    //     setQuestionsData(data);
    //     setPages(Math.round(data?.length / limit));
    //     setTotalQuestions(data?.length);
    // }, []);

    // useEffect(() => {
    //   getQuestions();
    // }, [limit, afterId, page]);
    return (
        <>
            <div className="col-lg-7 px-0">
                <div className="question-main-bar border-left border-left-gray pt-40px pb-40px">
                    <div className="filters pb-4 pl-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                            <h3 className="fs-22 fw-medium">{title} {data.length}</h3>
                            <Link
                                to="/requests/post"
                                className="btn theme-btn theme-btn-sm"
                            >
                                Ask Question
                            </Link>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            <p className="pt-1 fs-15 fw-medium lh-20">
                                {data.length} results found
                            </p>
                            <p className="">
                                Searched for - {keyword}
                            </p>
                            <div className="filter-option-box w-20">
                                <select className="custom-select">
                                    <option value="newest" selected="selected">
                                        Newest
                                    </option>
                                    <option value="featured">Bountied (390)</option>
                                    <option value="frequent">Frequent </option>
                                    <option value="votes">Votes </option>
                                    <option value="active">Active </option>
                                    <option value="unanswered">Unanswered </option>
                                </select>
                            </div>
                            {/* end filter-option-box */}
                        </div>
                    </div>
                    {/* end filters */}
                    <div className="questions-snippet border-top border-top-gray">
                        {
                           data.length ? data?.map((question) => (
                                <Question key={question.id} data={question} />
                            )) : 
                            <>
                                <h3 className='p-5'>No results found</h3>
                            </>
                        }
                        {/* end media */}
                    </div>
                    {/* end questions-snippet */}
                    <div className="pager pt-30px px-3">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination generic-pagination pr-1">
                                <li className="page-item">
                                    <button className="page-link" aria-label="Previous" onClick={prevPage}>
                                        <span aria-hidden="true">
                                            <i className="la la-arrow-left" />
                                        </span>
                                        <span
                                            className="sr-only"

                                            role="button"
                                        >
                                            Previous
                                        </span>
                                    </button>
                                </li>
                                {/* {
                        pages ? "Hello"
                      :<li className="page-item active">
                      <button className="page-link" value={1} onClick={(e) => gotoPage(e.target.value)}>
                        {1}
                      </button>
                    </li>
                      } */}
                                <li className="page-item active">
                                    <button
                                        className="page-link"
                                        value={page}
                                    // onClick={(e) => gotoPage(e.target.value)}
                                    >
                                        {page}
                                    </button>
                                </li>
                                {/* <li className="page-item">
                        <button className="page-link" value={2} onClick={(e) => gotoPage(e.target.value)}>
                          2
                        </button>
                      </li>
                      <li className="page-item">
                        <button className="page-link" value={3} onClick={(e) => gotoPage(e.target.value)}>
                          3
                        </button>
                      </li>
                      <li className="page-item">
                        <button className="page-link" value={4} onClick={(e) => gotoPage(e.target.value)}>
                          4
                        </button>
                      </li> */}
                                <li className="page-item pointer" >
                                    <button className="page-link pointer" aria-label="Next" onClick={nextPage}>
                                        <span aria-hidden="true">
                                            <i className="la la-arrow-right" />
                                        </span>
                                        <span
                                            className="sr-only"
                                            role="button"
                                        >
                                            Next
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        <p className="fs-13 pt-2">
                            {`Showing ${afterId + 1}-${afterId + questionsData?.result?.length} results of ${data.length} questions`}
                        </p>
                    </div>
                </div>
                {/* end question-main-bar */}
            </div>
        </>
    )
}

export default SearchResults;
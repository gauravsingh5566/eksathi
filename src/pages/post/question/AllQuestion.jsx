import { api } from "api/api";
import UserListCard from "components/user/Card/UserListCard";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";

import Questions from "./components/Questions";
import Sidebar from "./components/Sidebar";
import Question from "./Question";


const AllQuestion = () => {
  const [questionsData, setQuestionsData] = useState();
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();
  const [offset, setOffset] = useState();
  const [afterId, setAfterId] = useState(0);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);

  const getQuestions = async () => {
    try {
      const res = await api.get(
        // `/post/question?limit=${limit}&after_id=${afterId}`
        `/app/question?sort=${sort}&filter=${filter}&page=${page}&limit=${limit}&offset=${offset}`
      );
      console.log("All Questions Res: ", res);
      if (res.status == 200) {
        setQuestionsData(res?.data);
        console.log("Questions: ", questionsData);
        console.log("Length: ", questionsData);
        setPages(Math.round(res.data.length / limit));
      }
    } catch (err) {
      console.log(err);
    }
  };

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

  useEffect(() => {
    getQuestions();
  }, [limit, afterId, page]);


  return (
    <div>
      <section className="question-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 pr-0">
              <LeftSidebar/>
              {/* end sidebar */}
            </div>
            {/* end col-lg-2 */}
            <Questions
              title={'Top Questions'}
              data={questionsData}
            />
            {/* end col-lg-7 */}
            <div className="col-lg-3">
              <Sidebar/>
              {/* end sidebar */}
            </div>
            {/* end col-lg-3 */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </div>
  );
};

export default AllQuestion;

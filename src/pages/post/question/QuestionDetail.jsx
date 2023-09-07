import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  DeleteForever,
  Share,
  ShareOutlined,
  Upcoming,
} from "@mui/icons-material";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { api, apiAuth, apiAuthFormData } from "api/api";
import UserListCard from "components/user/Card/UserListCard";
import { useFormik } from "formik";
import { useGlobalContext } from "global/context";
import { Popup } from "layout/Popup";
import moment from "moment";
import { async } from "q";
// import { stringify } from "querystring";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import TextEditor from "./TextEditor";

const QuestionDetail = () => {
  const navigate = useNavigate();
  const { userData } = useGlobalContext();
  const [details, setDetails] = useState({});
  const [relevantUsers, setRelevantUsers] = useState();
  // const [search, setSearch] = useState('');
  const { request } = useParams();
  const fetchQuestionDetails = async () => {
    // Popup("loading");
    try {
      const response = await api.get(`/post/question/${request}`);
      if (response.status === 200) {
        Popup();
        setDetails(response.data.result);
        let tagArr = [];
        response.data.result.tags.forEach(element => {
          tagArr.push(element.tag);
        });
        console.log("Search String: ", tagArr);
        console.log("Search Stringify: ", tagArr.toString());
        // setSearch(stringify(response.data.result.tags));
        getRelevantExperts(tagArr);

      }
    } catch (error) {
      Popup("error", error?.response?.data?.message);
    }
  };

  const getRelevantExperts = async (tags) => {
    try {
      const res = await api.post(`/user/relevant`, {
        searchtags: tags,
      });
      if (res.status == 200) {
        console.log('Relevant Users: ', res);
        console.log('Relevant Users: ', res?.data?.result);
        setRelevantUsers(res.data.result);
      }
    } catch (error) {
      Popup("error", error?.response?.data?.message);
    }
  }

  React.useEffect(() => {
    fetchQuestionDetails();
  }, []);
  const [textEditorValue, setTextEditorValue] = useState("");
  const postAnswerFormik = useFormik({
    initialValues: {},
    onSubmit: async (values, actions) => {
      const formData = new FormData();
      if (userData?.id) {
        formData.append("title", values.title);
        formData.append("brief", textEditorValue);
        formData.append("userId", userData?.id);
        formData.append("questionId", details?.id);
        console.log(formData);
        try {
          const response = await apiAuthFormData.post("/answer", formData);
          console.log(response);
          if (response.status === 200) {
            fetchQuestionDetails().then(() => {
              Popup("success", response.data.message);
            });
          }
        } catch (error) {
          Popup("error", error.response.data.message);
        }
      } else {
        Swal.fire({
          title: "Login to answer question",
          text: "plz login to eksathi to answer this request or create a new account",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#19f032",
          cancelButtonText: "Register",
          confirmButtonText: "Login",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/auth/login");
          } else {
            navigate("/auth/register");
          }
        });
      }
    },
  });
  // HAndle Delete
  const deleteAnswer = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "plz login to eksathi to answer this request or create a new account",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "tomato",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        if (userData?.id) {
          try {
            const response = await api.post("/answer/delete", {
              userId: userData?.id,
              answerId: id,
            });
            console.log(response);
            if (response.status === 200) {
              fetchQuestionDetails().then(() => {
                Popup("success", response.data.message);
              });
            }
          } catch (error) {
            Popup("error", error.response.data.message);
          }
        } else {
          Swal.fire({
            title: "Login to delete answer",
            text: "plz login to eksathi to answer this request or create a new account",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#19f032",
            cancelButtonText: "Register",
            confirmButtonText: "Login",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/auth/login");
            } else {
              navigate("/auth/register");
            }
          });
        }
      } else {
        Popup("success", "cancelled");
      }
    });
  };
  //VoteHandler
  const VoteHandler = async (answerId, votetype) => {
    try {
      const response = await api.post("/answer/vote", {
        answerId,
        votetype,
        userId: userData?.id,
      });
      console.log(response);
      if (response.status === 200) {
        Popup("success", response?.data?.message);
      }
    } catch (error) {
      Popup("error", error?.response?.data?.message);
    }
  };
  //Vote COunter
  // const voteCount = async (answerId, votetype) => {
  //   try {
  //     const response = await api.post("answer/vote/count", {
  //       answerId,
  //       votetype,
  //     });
  //     if (response.status === 200) {
  //       console.log(response);
  //       return 1;
  //       // return response.data.count;
  //     }
  //   } catch (error) {
  //     if (error) {
  //       console.log("error");
  //     }
  //     return 0;
  //   }
  // };
  return (
    <div>
      <div>
        {/*======================================
  START HERO AREA
======================================*/}
        {/* <QuestionDetailsHeader />{" "} */}
        {/*======================================
  END HERO AREA
======================================*/}
        {/* ================================
   START QUESTION AREA
================================= */}
        <section className="question-area pt-40px pb-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="question-main-bar mb-50px">
                  <div className="question-highlight">
                    <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                      <div className="media-body">
                        <h5 className="fs-20">
                          <a href="question-details.html">{details?.title}</a>
                        </h5>
                        {/* <p>{details?.description}</p> */}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: details?.description,
                          }}
                        />
                        <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                          <div className="pr-3">
                            <span>Asked</span>
                            <span className="text-black">1 hour ago</span>
                          </div>
                          <div className="pr-3">
                            <span className="pr-1">Active</span>
                            <a href="#" className="text-black">
                              19 days ago
                            </a>
                          </div>
                          <div className="pr-3">
                            <span className="pr-1">Viewed</span>
                            <span className="text-black">89 times</span>
                          </div>
                        </div>
                        <div className="tags">
                          {details?.tags &&
                            details?.tags.map((tag, index) => {
                              return (
                                <Link to={`/requests`} className="tag-link">
                                  {tag?.tag}
                                </Link>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end question-highlight */}
                  <div className="question d-flex">
                    <div className="votes votes-styled w-auto">
                      <div id="vote" className="upvotejs">
                        <a
                          className="upvote upvote-on"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="This question is useful"
                        />
                        <span className="count">1</span>
                        <a
                          className="downvote"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="This question is not useful"
                        />
                        <a
                          className="star"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Bookmark this question."
                        />
                      </div>
                    </div>
                    {/* end votes */}
                    <div className="question-post-body-wrap flex-grow-1">
                      <div className="question-post-body">
                        {details?.brief}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: details?.brief,
                          }}
                        />
                      </div>
                      {/* end question-post-body */}
                    </div>
                    {/* end question-post-body-wrap */}
                  </div>
                  {/* end question */}
                  <div className="subheader d-flex align-items-center justify-content-between">
                    <div className="subheader-title">
                      <h3 className="fs-16">
                        {details?.answers?.length} Answer
                      </h3>
                    </div>
                    {/* end subheader-title */}
                    <div className="subheader-actions d-flex align-items-center lh-1">
                      <label className="fs-13 fw-regular mr-1 mb-0">
                        Order by
                      </label>
                      <div className="w-100px">
                        <select className="select-container p-2">
                          <option value="active">active</option>
                          <option value="oldest">oldest</option>
                          <option defaultValue="votes">votes</option>
                        </select>
                      </div>
                    </div>
                    {/* end subheader-actions */}
                  </div>
                  {/* end subheader */}
                  {details?.answers &&
                    details?.answers?.map((answer, answerIndex) => {
                      return (
                        <div className="answer-wrap d-flex border">
                          <div className="votes votes-styled w-auto">
                            <Button
                              variant="outlined"
                              size="small"
                              color="success"
                              sx={{ py: 1 }}
                              onClick={() => VoteHandler(answer?.id, "minus")}
                            >
                              <ArrowUpwardRounded sx={{ mr: 1 }} />
                              <span className="count">
                                {/* {voteCount(answer?.id, "plus")} */}2
                              </span>
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              color="error"
                              onClick={() => VoteHandler(answer?.id, "minus")}
                              sx={{ py: 1, mt: 1 }}
                            >
                              <ArrowDownwardRounded sx={{ mr: 1 }} />
                              <span className="count">
                                {/* {voteCount(answer?.id, "minus")} */}2
                              </span>
                            </Button>
                            <div id="vote2" className="upvotejs">
                              <a
                                className="upvote upvote-on"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="This question is useful"
                              />
                             

                              <a
                                className="downvote"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="This question is not useful"
                              />
                              <a
                                className="star check star-on"
                                data-toggle="tooltip"
                                data-placement="right"
                                title="The question owner accepted this answer"
                              />
                            </div>
                          </div>
                          {/* end votes */}
                          <div className="answer-body-wrap flex-grow-1">
                            {/* <div className="answer-body">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: answer?.brief,
                                }}
                              />
                            </div> */}
                            {/* end answer-body */}
                            <div
                              className="question-post-user-action border border-3 mt-4 shadow"
                              style={{ borderRadius: "12px !important" }}
                            >
                              <div className="post-menu">
                                <div className="btn-group p-2">
                                  <IconButton
                                    type="button"
                                    sx={{
                                      backgroundColor: "whitesmoke",
                                      color: "blue",
                                    }}
                                  >
                                    <ShareOutlined />
                                  </IconButton>
                                  {answer?.userId === userData.id && (
                                    <IconButton
                                      type="button"
                                      sx={{
                                        backgroundColor: "whitesmoke",
                                        color: "red",
                                      }}
                                      onClick={() => deleteAnswer(answer?.id)}
                                    >
                                      <DeleteForever />
                                    </IconButton>
                                  )}
                                </div>
                                {/* btn-group */}
                                {/* <a href="#" className="btn">
                                  Edit
                                </a> */}
                                {/* <button className="btn">Follow</button> */}
                              </div>
                              {/* end post-menu */}
                              <div className="media media-card user-media align-items-center">
                                <a
                                  href="user-profile.html"
                                  className="media-img d-block"
                                >
                                  <Avatar
                                    src={answer?.user_profile}
                                    alt={answer?.user_first_name}
                                  />
                                </a>
                                <div className="media-body d-flex align-items-center justify-content-between">
                                  <div>
                                    <h5 className="pb-1">
                                      <a href="user-profile.html">
                                        {answer?.user_first_name}{" "}
                                        {/* {answer?.user_middle_name}{" "} */}
                                        {answer?.user_last_name}
                                      </a>
                                    </h5>
                                    {/* <div className="stats fs-12 d-flex align-items-center lh-18">
                                      <span className="text-black pr-2">
                                        15.5k
                                      </span>
                                      <span className="pr-2 d-inline-flex align-items-center">
                                        <span className="ball gold" />3
                                      </span>
                                      <span className="pr-2 d-inline-flex align-items-center">
                                        <span className="ball silver" />
                                        10
                                      </span>
                                      <span className="pr-2 d-inline-flex align-items-center">
                                        <span className="ball" />
                                        26
                                      </span>
                                    </div> */}
                                  </div>
                                  <div className="d-flex">
                                    <small className="meta d-block text-right mr-2">
                                      <span className="text-black d-block lh-18">
                                        answered
                                      </span>
                                      <span className="d-block lh-18 fs-12">
                                        {moment(answer?.createdAt)
                                          .startOf("hour")
                                          .fromNow()}
                                      </span>
                                    </small>
                                    <small className="meta d-block text-right">
                                      <span className="text-black d-block lh-18">
                                        edited
                                      </span>
                                      <span className="d-block lh-18 fs-12">
                                        {moment(answer?.updatedAt)
                                          .startOf("hour")
                                          .fromNow()}
                                      </span>
                                    </small>
                                  </div>
                                </div>
                              </div>
                              {/* end media */}
                            </div>
                            {/* end question-post-user-action */}
                            {/* D_NONE  */}

                            
                            <div className="comments-wrap">
                              <ul className="comments-list">
                                <li>
                                  <div className="comment-actions">
                                    <span className="comment-score">1</span>
                                  </div>
                                  <div className="comment-body">
                                    <span className="comment-copy">
                                      Ah excellent! Thank you!
                                    </span>
                                    <span className="comment-separated">-</span>
                                    <a
                                      href="user-profile.html"
                                      className="comment-user owner"
                                      title="224,110 reputation"
                                    >
                                      Arden Smith
                                    </a>
                                    <span className="comment-separated">-</span>
                                    <a href="#" className="comment-date">
                                      8 hours ago
                                    </a>
                                  </div>
                                </li>
                              </ul>
                              <div className="comment-form">
                                <div className="comment-link-wrap text-center">
                                  <a
                                    className="collapse-btn comment-link"
                                    data-toggle="collapse"
                                    href="#addCommentCollapseTwo"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="addCommentCollapseTwo"
                                    title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                                  >
                                    Add a comment
                                  </a>
                                </div>
                                <div
                                  className="collapse border-top border-top-gray mt-2 pt-3"
                                  id="addCommentCollapseTwo"
                                >
                                  <form method="post" className="row pb-3">
                                    <div className="col-lg-12">
                                      <h4 className="fs-16 pb-2">
                                        Leave a Comment
                                      </h4>
                                      <div className="divider mb-2">
                                        <span />
                                      </div>
                                    </div>
                                    {/* end col-lg-12 */}
                                    <div className="col-lg-6">
                                      <div className="input-box">
                                        <label className="fs-13 text-black lh-20">
                                          Name
                                        </label>
                                        <div className="form-group">
                                          <input
                                            className="form-control form--control form-control-sm fs-13"
                                            type="text"
                                            name="text"
                                            placeholder="Your name"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* end col-lg-6 */}
                                    <div className="col-lg-6">
                                      <div className="input-box">
                                        <label className="fs-13 text-black lh-20">
                                          Email (Address never made public)
                                        </label>
                                        <div className="form-group">
                                          <input
                                            className="form-control form--control form-control-sm fs-13"
                                            type="text"
                                            name="text"
                                            placeholder="Your email"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* end col-lg-6 */}
                                    <div className="col-lg-12">
                                      <div className="input-box">
                                        <label className="fs-13 text-black lh-20">
                                          Website
                                        </label>
                                        <div className="form-group">
                                          <input
                                            className="form-control form--control form-control-sm fs-13"
                                            type="text"
                                            name="text"
                                            placeholder="Website link"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    {/* end col-lg-12 */}
                                    <div className="col-lg-12">
                                      <div className="input-box">
                                        <label className="fs-13 text-black lh-20">
                                          Message
                                        </label>
                                        <div className="form-group">
                                          <textarea
                                            className="form-control form--control form-control-sm fs-13"
                                            name="message"
                                            rows={5}
                                            placeholder="Your comment here..."
                                            defaultValue={""}
                                          />
                                          <div className="d-flex flex-wrap align-items-center pt-2">
                                            <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                              [named hyperlinks]
                                              (https://example.com)
                                            </div>
                                            <div className="mr-3 fw-bold fs-13">
                                              **bold**
                                            </div>
                                            <div className="mr-3 font-italic fs-13">
                                              _italic_
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    {/* end col-lg-12 */}
                                    <div className="col-lg-12">
                                      <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                                        <div>
                                          <div className="custom-control custom-checkbox fs-13">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="getNewCommentsTwo"
                                            />
                                            <label
                                              className="custom-control-label custom--control-label"
                                              htmlFor="getNewCommentsTwo"
                                            >
                                              Notify me of new comments vai
                                              email.
                                            </label>
                                          </div>
                                          <div className="custom-control custom-checkbox fs-13">
                                            <input
                                              type="checkbox"
                                              className="custom-control-input"
                                              id="getNewPostsTwo"
                                            />
                                            <label
                                              className="custom-control-label custom--control-label"
                                              htmlFor="getNewPostsTwo"
                                            >
                                              Notify me of new posts vai email.
                                            </label>
                                          </div>
                                        </div>
                                        <button
                                          className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                          type="submit"
                                        >
                                          Post Comment
                                        </button>
                                      </div>
                                    </div>
                                    {/* end col-lg-12 */}
                                  </form>
                                </div>
                                {/* end collapse */}
                              </div>
                            </div>
                            {/* end comments-wrap */}
                          </div>
                          {/* end answer-body-wrap */}
                        </div>
                      );
                    })}

                  {/* end answer-wrap */}
                  <div className="subheader">
                    <div className="subheader-title">
                      <h3 className="fs-16">Your Answer</h3>
                    </div>
                    {/* end subheader-title */}
                  </div>
                  {/* end subheader */}
                  <div className="post-form">
                    <form
                      onSubmit={postAnswerFormik.handleSubmit}
                      className="pt-3"
                    >
                      <div className="input-box">
                        <label className="fs-14 text-black fw-medium">
                          Title
                        </label>
                        <TextField
                          id="title"
                          fullWidth
                          name="title"
                          onChange={postAnswerFormik.handleChange}
                        />
                      </div>
                      <div className="input-box mb-5">
                        <label className="fs-14 text-black fw-medium">
                          Body
                        </label>
                        <TextEditor
                          textEditorValue={textEditorValue}
                          setTextEditorValue={setTextEditorValue}
                        />
                      </div>
                      {/* Image  */}
                      {/* <div className="input-box">
                        <label className="fs-14 text-black fw-medium">
                          Image
                        </label>
                        <div className="form-group">
                          <div className="file-upload-wrap file-upload-layout-2">
                            <input
                              type="file"
                              name="files[]"
                              className="file-upload-input"
                              multiple
                            />
                            <span className="file-upload-text d-flex align-items-center justify-content-center">
                              <i className="la la-cloud-upload mr-2 fs-24" />
                              Drop files here or click to upload.
                            </span>
                          </div>
                        </div>
                      </div> */}
                      {/* end input-box */}
                      <Button
                        type="submit"
                        variant="contained"
                        className="text-capitalize mt-3"
                        fullWidth
                        color="primary"
                        sx={{ p: 2 }}
                      >
                        Post Your Answer
                      </Button>
                    </form>
                  </div>
                </div>
                {/* end question-main-bar */}
              </div>
              {/* end col-lg-9 */}
              <div className="col-lg-4">
                <div className="sidebar">
                  {relevantUsers?.length > 0?<UserListCard title={'Experts Suggestion'} data={relevantUsers} />: null}
                  {/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Number Achievement</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="row no-gutters text-center">
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color">
                              980k
                            </span>
                            <p className="fs-14">Questions</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-2">
                              610k
                            </span>
                            <p className="fs-14">Answers</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-3">
                              650k
                            </span>
                            <p className="fs-14">Answer accepted</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6 responsive-column-half">
                          <div className="icon-box pt-3">
                            <span className="fs-20 fw-bold text-color-4">
                              320k
                            </span>
                            <p className="fs-14">Users</p>
                          </div>
                          {/* end icon-box */}
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12 pt-3">
                          <p className="fs-14">
                            To get answer of question{" "}
                            <a
                              href="signup.html"
                              className="text-color hover-underline"
                            >
                              Join
                              <i className="la la-arrow-right ml-1" />
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                  {/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <div className="d-flex align-items-center pb-3">
                        <svg
                          className="mr-2"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="#6c727c"
                        >
                          <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z" />
                        </svg>
                        <h3 className="fs-17">Love this site?</h3>
                      </div>
                      <div className="divider">
                        <span />
                      </div>
                      <p className="fs-14 lh-20 py-3">
                        Get the{" "}
                        <span className="text-dark fw-medium">
                          weekly newsletter!
                        </span>{" "}
                        In it, you'll get:
                      </p>
                      <ul className="generic-list-item generic-list-item-bullet fs-14 pb-3">
                        <li className="lh-20">
                          The week's top questions and answers
                        </li>
                        <li className="lh-20">
                          Important community announcements
                        </li>
                        <li className="lh-20">Questions that need answers</li>
                      </ul>
                      <button className="btn theme-btn theme-btn-gray w-100">
                        Sign up for the digest
                      </button>
                      <p className="fs-14 pt-1 text-center">
                        See an example newsletter
                      </p>
                    </div>
                  </div>
                  {/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Related Questions</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="sidebar-questions pt-3">
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5>
                              <a href="question-details.html">
                                How to select the dom element with event.target
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">2 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">
                                Sudhir Kumbhare
                              </a>
                            </small>
                          </div>
                        </div>
                        {/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5>
                              <a href="question-details.html">
                                How can you cut an onion without crying?
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">48 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">
                                wimax
                              </a>
                            </small>
                          </div>
                        </div>
                        {/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5>
                              <a href="question-details.html">
                                How to change the behavior of dropdown buttons
                                in HTML
                              </a>
                            </h5>
                            <small className="meta">
                              <span className="pr-1">1 hour ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">
                                Antonin gavrel
                              </a>
                            </small>
                          </div>
                        </div>
                        {/* end media */}
                      </div>
                      {/* end sidebar-questions */}
                    </div>
                  </div>
                  {/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Trending Tags</h3>
                      <div className="divider">
                        <span />
                      </div>
                      <div className="tags pt-4">
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">
                            analytics
                          </a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">
                            computer
                          </a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">
                            python
                          </a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">
                            javascript
                          </a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>
                        {/* end tag-item */}
                        <div className="tag-item">
                          <a href="#" className="tag-link tag-link-md">
                            c#
                          </a>
                          <span className="item-multiplier fs-13">
                            <span>×</span>
                            <span>32924</span>
                          </span>
                        </div>
                        {/* end tag-item */}
                        <div className="collapse" id="showMoreTags">
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              java
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              swift
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              html
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              angular
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              flutter
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                          <div className="tag-item">
                            <a href="#" className="tag-link tag-link-md">
                              machine-language
                            </a>
                            <span className="item-multiplier fs-13">
                              <span>×</span>
                              <span>32924</span>
                            </span>
                          </div>
                          {/* end tag-item */}
                        </div>
                        {/* end collapse */}
                        <a
                          className="collapse-btn fs-13"
                          data-toggle="collapse"
                          href="#showMoreTags"
                          role="button"
                          aria-expanded="false"
                          aria-controls="showMoreTags"
                        >
                          <span className="collapse-btn-hide">
                            Show more
                            <i className="la la-angle-down ml-1 fs-11" />
                          </span>
                          <span className="collapse-btn-show">
                            Show less
                            <i className="la la-angle-up ml-1 fs-11" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  <div className="ad-card">
                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                      Advertisements
                    </h4>
                    <div className="ad-banner mb-4 mx-auto">
                      <span className="ad-text">290x500</span>
                    </div>
                  </div>
                  {/* end ad-card */}
                </div>
                {/* end sidebar */}
              </div>
              {/* end col-lg-3 */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end question-area */}
        {/* ================================
   END QUESTION AREA
================================= */}
      </div>
    </div>
  );
};

export default QuestionDetail;

import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from 'global/context';
import { Avatar } from '@mui/material';

const Comments = ({ showComments, comments, answerId, questionId, getQuestions }) => {
    const navigate = useNavigate();
    const { userData, api, apiAuth } = useGlobalContext();
    const getComments = async () => {
        let id = 0;
        let type;
        if (answerId) {
            id = answerId;
            type = 'answer';
        } else if (questionId) {
            id = questionId;
            type = 'question';
        }
        try {
            const res = await api.get(`/app/comment?id=${id}&type=${type}`);
            if (res?.status === 200) {
                console.log("Fetched Comments:", res?.data);
                console.log(res?.data?.message);
                comments = res?.data?.comments;
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }
    const formik = useFormik({
        initialValues: {
            questionId: questionId,
            answerId: answerId,
            commentText: ''
        },
        onSubmit: async (values, action) => {
            console.log("Comment Values: ", values);
            values = {...values, email: userData?.email};
            try {
                const res = await api.post(`/app/comment`, values);
                if (res?.status === 201) {
                    console.log("Comment Response:", res.data);
                    console.log(res?.data?.message);
                    // navigate(0);
                    action.resetForm();
                    getComments();
                    getQuestions();
                }
            } catch (error) {
                console.log(error?.response?.data?.message);
            }
        }
    });

    useEffect(() => {
    }, [comments]);
    return (
        <React.Fragment>
            <div className={`post-comment ${showComments ? '' : 'd-none'}`}>
                <ul className="comment-list">
                    {
                        comments?.map((comment) => {
                            return <Comment key={comment?.id} comment={comment} getQuestions={getQuestions} />
                        })
                    }
                </ul>
                {/* <div className="load-more-btn">
                    <a className="item-btn">Load More Comments <span>4+</span></a>
                </div> */}
                <div className="comment-reply">
                    <div className="user-img">
                        {/* <img src={require("../../media/figure/chat_15.jpg")} alt="Aahat" /> */}
                        <Avatar
                            src={userData?.profile}
                            alt={userData?.first_name + " " + userData?.last_name}
                        />
                    </div>
                    <form className="input-box" onSubmit={formik.handleSubmit}>
                        <input type="text" name="commentText" className="form-control" placeholder="Your Comment...."
                            value={formik?.values?.commentText}
                            onChange={formik.handleChange}
                        />
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Comments;
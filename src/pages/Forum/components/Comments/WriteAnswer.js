import React, { useState } from 'react';
import Send from '@mui/icons-material/Send';
import { Avatar, Chip, Divider, TextField } from '@mui/material';
import ReactQuill from 'react-quill';
import {useFormik} from 'formik';
import { useGlobalContext } from 'global/context';
import LoginPopup from 'components/Modals/LoginPopup';
import { Button, Input } from '@mui/joy';

const WriteAnswer = ({questionId, questionAuthor, getQuestions, showWriteAnswerBox, setShowWriteAnswerBox, showAnswerBoxHandler, updateAnswers}) => {
    const [value, setValue] = useState('');
    const {userData, setAuth, api, apiAuth, socket} = useGlobalContext();
    // const [showWriteAnswerBox, setShowWriteAnswerBox] = useState(false);
    // const showAnswerBoxHandler = () => {
    //     if (showWriteAnswerBox) {
    //         setShowWriteAnswerBox(false);
    //     } else {
    //         setShowWriteAnswerBox(true);
    //     }
    // }

    const formik = useFormik({
        initialValues: {
            questionId: questionId,
            title: ''
        },
        onSubmit: async (values, action) => {
            values = {...values, body: value, email: userData?.email};
            console.log({values});
            try {
                const res = await api.post(`app/answer`, values);
                if(res.status === 200) {
                    console.log(res.data.message);
                    action.resetForm();
                    setValue('');
                    updateAnswers();
                    handleNotification(4);
                }
            } catch (error) {
                console.log(error);
                if (error?.response?.status === 401) {
                    setAuth(true);
                  }
            }
        }
    });


    const handleNotification = (type) => {
        socket.emit("send-notification", {
            sender_name: userData?.first_name + " " + userData?.last_name,
            receiver_id: questionAuthor?.id,
            avatar: questionAuthor?.avatar_url,
            type,
            sender_id: userData?.id,
            message: userData?.first_name + " " + userData?.last_name + " is answered your question",
            content_id: questionId,
        })
    }

    return (
        <React.Fragment>
            <div className="write-answer mb-3">
                <Divider>
                    <Chip
                        avatar={<Avatar src={userData?.profile} />}
                        label={<span className='fw-bold fs-6'>Write your own answer here</span>}
                        variant="outlined"
                        color="info"
                        className='btn btn-outline-info shadow'
                        onClick={showAnswerBoxHandler}
                    />
                </Divider>
                <div className={`block-box post-view mt-3 your-answer ${showWriteAnswerBox ? '' : 'd-none'}`}>
                    <div className="post-body">
                        <form onSubmit={formik.handleSubmit}>
                            <Input color="info" variant='plain' fullWidth placeholder="Answer title..." id="" size='lg' className='mb-3 shadow' name='title'
                                onChange={formik.handleChange}
                                value={formik.values.title}
                            />
                            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='write your answer....' />
                            <br />
                            <Button variant="soft" color="success" endIcon={<Send />} type='submit' className='mb-4'
                            disabled={formik.isSubmitting || !formik.values.title || !value || value === "<p><br></p>" ? true : false}
                            >
                                Submit Answer
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            <LoginPopup/>
        </React.Fragment>
    )
}

export default WriteAnswer;
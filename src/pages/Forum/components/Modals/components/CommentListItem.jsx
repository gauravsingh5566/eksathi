import { Face } from '@mui/icons-material';
import { Avatar, CardOverflow, IconButton, Input, Link, ListItem, ListItemContent, ListItemDecorator, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import ReplyContainer from './ReplyContainer';
import moment from 'moment';
import { useGlobalContext } from 'global/context';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const CommentListItem = ({ id, comment }) => {
    const navigate = useNavigate();
    const [viewReplies, setViewReplies] = useState(false);
    const { userData, setAuth, api, apiAuth, socket } = useGlobalContext();
    const [replies, setReplies] = useState(comment?.replies);
    const formik = useFormik({
        initialValues: {
            commentId: id,
            replyText: ""
        },
        onSubmit: async (values, action) => {
            console.log("Reply Values: ", values);
            values = { ...values, email: userData?.email, };
            try {
                const res = await api.post(`/app/reply`, values);
                if (res.status === 201) {
                    console.log("Reply Res: ", res?.data);
                    action.resetForm();
                    // getQuestions();
                    getReplies();
                    handleNotification(3, `${userData?.first_name +" "+userData?.last_name} replied on your comment.`);
                }
            } catch (error) {
                console.log(error?.response?.data?.message);
                if (error?.response?.status === 401) {
                    setAuth(true);
                }
            }
        }
    });

    const getReplies = async () => {
        try {
            const res = await api.get(`/app/reply?id=${comment?.id}`);
            if (res.status === 200) {
                setReplies(res?.data?.replies);
                console.log("Replies updated: ", res?.data?.replies);
            }
        } catch (error) {
            console.log(error?.response?.data?.message)
        }
    }

    const handleViewReplies = () => {
        if (viewReplies) {
            setViewReplies(false);
            return;
        } else {
            setViewReplies(true);
        }
    }

    const handleNotification = (type, message) => {
        socket.emit("send-notification", {
            sender_name: userData?.first_name,
            receiver_id: comment?.auther?.id,
            avatar: comment?.auther?.avatar_url,
            type,
            sender_id: userData?.id,
            message: message,
            content_id: comment?.id,
        })
    }

    return (
        <>
            <ListItem>
                <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                    <Avatar size="sm" src={comment?.auther?.profile_pic} />
                </ListItemDecorator>

                <ListItemContent>
                    <Link color='info' onClick={() => navigate(`/${comment?.auther?.username}`)}>{comment?.auther?.name}</Link> <span style={{
                        fontSize: '12px',
                        fontStyle: 'italic'
                    }}>{moment(comment?.createdAt).fromNow()}</span>
                    <Typography level="body2" >
                        {comment?.comment_text}
                    </Typography>
                    {/* <Link
                        component="button"
                        underline="none"
                        fontSize="sm"
                        startDecorator="…"
                        sx={{ color: 'text.tertiary' }}
                    >
                        more
                    </Link> */}
                    <div className='ms-auto'>
                        <Link

                            component="button"
                            underline="none"
                            fontSize="sm"
                            startDecorator=" "
                            sx={{ color: 'text.link' }}
                            onClick={handleViewReplies}
                        >
                            {
                                comment?.replies?.length ?
                                    comment?.replies?.length + " replies" : "reply"
                            }
                            {/* {comment?.replies?.length} replies */}
                        </Link>
                        {
                            viewReplies ?
                                <>
                                    <ReplyContainer replies={replies} />
                                    <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                                        <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                                            {/* <Face /> */}
                                            <Avatar size="small" src={userData?.profile} style={{ height: '24px', width: '24px' }} />
                                        </IconButton>
                                        <Input
                                            variant="plain"
                                            size="sm"
                                            placeholder="Add a reply…"
                                            sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
                                            id='replyText'
                                            name='replyText'
                                            value={formik.values.replyText}
                                            onChange={formik.handleChange}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    formik.handleSubmit();
                                                }
                                            }}
                                        />
                                        <Link disabled={formik.isSubmitting ? true : formik.values.replyText ? false : true} onClick={formik.handleSubmit} underline="none" role="button">
                                            Post
                                        </Link>
                                    </CardOverflow>
                                </> : null
                        }

                    </div>
                </ListItemContent>
            </ListItem>
        </>
    )
}

export default CommentListItem
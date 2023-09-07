import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalOverflow from '@mui/joy/ModalOverflow';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Answers from '../Answers/Answers';
import { Divider } from '@mui/material';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';
import Comment from '../Comments/Comment';
import '../../Forum.css';
import { CardOverflow, IconButton, Link, ListItemContent, ListItemDecorator, Input, Avatar } from '@mui/joy';
import { Face, Favorite } from '@mui/icons-material';
import CommentListItem from './components/CommentListItem';
import LoginPopup from 'components/Modals/LoginPopup';


export default function ViewComments({ layout, setLayout, commentList, id, itemType, author }) {
  const [scroll, setScroll] = React.useState(true);
  const [comments, setComments] = useState([]);
  const { userData, setAuth, api, apiAuth, socket } = useGlobalContext();
  const formik = useFormik({
    initialValues: {
      questionId: itemType === 'question' ? id : undefined,
      answerId: itemType === 'answer' ? id : undefined,
      commentText: ''
    },
    onSubmit: async (values, action) => {
      console.log("Comment Values: ", values);
      values = {...values,  email: userData?.email};
      try {
        const res = await api.post(`/app/comment`, values);
        if (res?.status === 201) {
          console.log("Comment Response:", res.data);
          console.log(res?.data?.message);
          // navigate(0);
          action.resetForm();
          getComments();
          // getQuestions();
          let type = itemType === 'question' ? 1 : itemType === 'answer' ? 2 : null;
          handleNotification(type, `${userData?.first_name + ' ' + userData?.last_name} has posted a new comment on ${itemType}.`);
        }
      } catch (error) {
        console.log(error?.response?.data?.message);
        if (error?.response?.status === 401) {
          setAuth(true);
        }
      }
    }
  });

  const getComments = async () => {  // type: string |'answer'|'question
    try {
      const res = await api.get(`/app/comment?id=${id}&type=${itemType}`);
      console.log("Comment Response: ", res);
      if (res?.status === 200) {
        setComments(res?.data?.comments);
        console.log("Updated Comments :", res?.data?.comments);
      }
    } catch(error) {
      console.log(error?.response?.data);
      
    }
  }

  const handleNotification = (type, message) => {
    socket.emit("send-notification", {
      sender_name: userData?.first_name,
      receiver_id: author,
      type,
      sender_id: userData?.id,
      message: message,
      content_id: id,
    })
  }

  useEffect(() => {
    setComments(commentList);
  }, []);

  return (
    <React.Fragment>

      <Modal
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}

      >
        <ModalOverflow>
          <ModalDialog aria-labelledby="modal-dialog-overflow" layout={layout}
            className="w-lg-50 "
            sx={{
              zIndex: 2,
            }}
          >
            <ModalClose />
            <Typography id="modal-dialog-overflow" component="h2">
              {/* Comments ({comments?.length}) */}
              {
                comments?.length ? "Comments (" + comments?.length + ")" : "Add comment"
              }
            </Typography>

            {scroll && (

              <>
                {/* <Link
                  component="button"
                  underline="none"
                  fontSize="sm"
                  fontWeight="lg"
                  textColor="text.primary"
                >
                  8.1M Likes
                </Link> */}

                {/* <Typography fontSize="sm">
                  <Link
                    component="button"
                    color="neutral"
                    fontWeight="lg"
                    textColor="text.primary"
                  >
                    MUI
                  </Link>{' '}
                  The React component library you always wanted
                </Typography>
                <Link
                  component="button"
                  underline="none"
                  fontSize="sm"
                  startDecorator="…"
                  sx={{ color: 'text.tertiary' }}
                >
                  more
                </Link> */}

                <List
                  aria-labelledby="ellipsis-list-demo"
                  sx={{ '--ListItemDecorator-size': '56px' }}
                >
                  {
                    comments?.map((comment) => {
                      return (
                        <CommentListItem
                          key={comment.id}
                          comment={comment}
                          id={comment.id}
                        />
                      )
                    })
                  }

                </List>

                {/* <Link
                  component="button"
                  underline="none"
                  fontSize="10px"
                  sx={{ color: 'text.tertiary', my: 0.5 }}
                >
                  2 DAYS AGO
                </Link> */}
                <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex' }}>
                  <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                    {/* <Face /> */}
                    <Avatar size="small" src={userData?.profile} style={{ height: '24px', width: '24px' }} />
                  </IconButton>
                  <Input
                    variant="plain"
                    size="sm"
                    placeholder="Add a comment…"
                    sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px' }}
                    id='commentText'
                    name='commentText'
                    value={formik.values.commentText}
                    onChange={formik.handleChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        formik.handleSubmit();
                      }
                    }}
                  />
                  <Link disabled={formik?.values?.commentText ? false : true}
                    underline="none" role="button"
                    onClick={formik.handleSubmit}
                  >
                    Post
                  </Link>
                </CardOverflow>
              </>
            )}
              <LoginPopup/>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
      
    </React.Fragment>
  );
}
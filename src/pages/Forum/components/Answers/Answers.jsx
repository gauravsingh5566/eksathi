import React, { useEffect, useState } from 'react';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbDownTwoTone from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoTone from '@mui/icons-material/ThumbUpTwoTone';
import ForumTwoTone from '@mui/icons-material/ForumTwoTone';
import ShareTwoTone from '@mui/icons-material/ShareTwoTone';
import { Avatar, Button, Chip, Divider, Link, Rating, TextField, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReportTwoToneIcon from '@mui/icons-material/ReportTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Comments from '../Comments/Comments';
import moment from 'moment';
import { useGlobalContext } from 'global/context';
// import { pop2 } from 'layout/Popup';
import EditAnswer from '../Modals/EditAnswer';
import ReportContent from '../Modals/ReportContent';
import { useNavigate } from 'react-router-dom';
import CommentLine from 'components/Comments/CommentLine';
import { Box } from '@mui/joy';
import { Star } from '@mui/icons-material';
import { Popup } from 'layout/Popup';

const labels = {
    0.5: 'Just Started',
    1: 'Just Started+',
    1.5: 'Still Learning',
    2: 'Still Learning+',
    2.5: 'Gaining Expertise',
    3: 'Gaining Expertise+',
    3.5: 'Expert Now',
    4: 'Expert Now+',
    4.5: 'Param Gyani',
    5: 'Param Gyani+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Answers = ({ showAnswer, answerData, getQuestions, updateAnswer, questionAuthorId, setLayout }) => {
    const navigate = useNavigate();
    const [answer, setAnswer] = useState(answerData);
    const [alignment, setAlignment] = React.useState('left');
    const [showAnswerComments, setShowAnswerComments] = useState(false);
    const { userData, api, apiAuth, socket } = useGlobalContext();
    const [editOpen, setEditOpen] = React.useState(false);
    const [openReport, setOpenReport] = React.useState(false);
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [value, setValue] = React.useState(answerData?.auther?.rating);
    const [hover, setHover] = React.useState(-1);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleVote = async (voteType) => {
        const formData = {
            email: userData?.email,
            answerId: answer?.id,
            voteType: voteType
        }
        try {
            const res = await api.post(`/app/vote`, formData);
            if (res.status === 200) {
                console.log("Vote Res: ", res?.data);
                getVotes();
                if (voteType === "upvote") {
                    handleNotification(7, userData?.first_name + " " + userData?.last_name + " is liked your answer");

                } else if (voteType === "downvote") {
                    handleNotification(8, userData?.first_name + " " + userData?.last_name + " is disliked your answer");
                }

            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            // pop2.error("Something went wrong!")
        }
    }

    const getVotes = async () => {

        try {
            const res = await api.get(`/app/vote/${answer?.id}?type=answer`);
            if (res.status === 200) {
                console.log("Votes Res: ", res?.data);
                // getQuestions();
                setUpVote(res?.data?.upvotes);
                setDownVote(res?.data?.downvotes);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            // pop2.error("Something went wrong!")
        }
    }

    const getAnswer = async () => {
        try {
            const res = await api.get(`/app/answer/${answer?.id}`);
            if (res?.status === 200) {
                console.log("Answer Res: ", res?.data);
                setAnswer(res?.data?.results);
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    const handleRating = async (newRating) => {
        console.log("New rating: " + newRating);
        try {
            const res = await apiAuth.patch(`/app/rating/user?questionId=${answer?.question_id}&answerId=${answer?.id}`, {
                rating: newRating
            });
            if (res?.status === 200) {
                console.log("Rating Res: ",res);
            }
        } catch (error) {
            console.log("Error: ",error);
            if (error?.response?.status === 403) {
                setLayout(undefined);
                Popup('warning', 'Hack attempted');
            }
        }
    }


    useEffect(() => {
        setUpVote(answer?.votes?.upVoteCount);
        setDownVote(answer?.votes?.downVoteCount);
    }, []);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleNotification = (type, message) => {
        socket.emit("send-notification", {
            sender_name: userData?.first_name + " " + userData?.last_name,
            receiver_id: answer?.auther?.id,
            avatar: answer?.auther?.avatar_url,
            type,
            sender_id: userData?.id,
            message: message,
            content_id: answer?.id,
        })
    }

    return (
        <React.Fragment>
            <div className="answers" id={`answer${answer?.id}`}>
                <div className={`answer-container ${showAnswer ? '' : 'd-none'}`}>
                    <Divider>
                        <Chip
                            avatar={<Avatar alt={answer?.auther?.name} src={answer?.auther?.profile_pic} />}
                            label={answer?.auther?.name}
                            variant="outlined"
                            className='btn btn-outline-success'
                            onClick={() => navigate(`/${answer?.auther?.username}`)}
                        />
                        <span className='fst-italic'> ~ answered {moment(answer?.createdAt).fromNow()}  </span>
                    </Divider>
                    <div className="block-box post-view mt-3">
                        <div className="answer">
                            <div className="post-body">
                                <div className="post-no-thumbnail d-flex">
                                    <div>
                                        <h4 className='text-success border p-2 rounded-3' style={{ height: '50px !important', width: '50px !important' }}>A</h4>
                                    </div>
                                    <div style={{ paddingLeft: '20px' }}>
                                        <h5 className='fw-bold'>{answer?.title}</h5>
                                        {/* <p className='fs-6'>{answer?.body}</p> */}
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: answer?.body,
                                            }}
                                        />
                                    </div>
                                    <div className="dropdown mx-auto">
                                        <Tooltip title="Menu">
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'long-menu' : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Menu
                                            id="long-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    width: '14ch',
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            {
                                                answer?.auther?.email === userData?.email ?
                                                    <div>
                                                        <MenuItem onClick={() => {
                                                            setEditOpen(true);
                                                            handleClose();
                                                        }}>
                                                            <EditTwoToneIcon color="info" style={{ marginRight: "10px" }} /> Edit
                                                        </MenuItem>
                                                        <MenuItem onClick={handleClose}>
                                                            <DeleteTwoToneIcon color="error" style={{ marginRight: "10px" }} /> Delete
                                                        </MenuItem>
                                                    </div> :
                                                    <MenuItem onClick={() => {
                                                        setOpenReport(true);
                                                        handleClose();
                                                    }}>
                                                        <ReportTwoToneIcon color='warning' style={{ marginRight: "10px" }} /> Report
                                                    </MenuItem>
                                            }
                                        </Menu>
                                    </div>
                                </div>

                                <div className="post-meta-wrap">
                                    <div className="post-meta">
                                        {/* <div className="post-reaction">
                                            <div>
                                                <ThumbUpTwoTone color="success"
                                                    onClick={() => handleVote('upvote')}
                                                />
                                            </div>
                                            <div className="meta-text">{answer?.votes?.upVoteCount}</div>
                                            <Divider orientation="vertical" flexItem />
                                            <div className='px-3'>
                                                <ThumbDownTwoTone color="error" onClick={() => handleVote('downvote')} />
                                                <div className="meta-text">{answer?.votes?.downVoteCount}</div>
                                            </div>
                                        </div> */}

                                        <ToggleButtonGroup
                                            value={alignment}
                                            exclusive
                                            size='small'
                                            onChange={handleAlignment}
                                            aria-label="text alignment"
                                            className='rounded-3'
                                        >
                                            <ToggleButton value="left"
                                                onClick={() => handleVote('upvote')}
                                                aria-label="left aligned" style={{ p: 1 }}>
                                                <div>
                                                    <ThumbUpTwoTone className={"fs-6"} color='success'

                                                    />
                                                </div>
                                                <div className="meta-text">{upVote}</div>
                                            </ToggleButton>
                                            <ToggleButton value="center" aria-label="centered"
                                                onClick={() => handleVote('downvote')}
                                            >
                                                <div>
                                                    <ThumbDownTwoTone className={"fs-6"} color='error' />
                                                    <div className="meta-text">{downVote}</div>
                                                </div>
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </div>
                                    <div className="post-meta px-3">
                                        <Box
                                            sx={{
                                                width: 200,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                            hidden = {questionAuthorId === userData?.id ? false : true}
                                        >
                                            <Rating
                                                name="hover-feedback"
                                                value={value}
                                                precision={0.5}
                                                getLabelText={getLabelText}
                                                readOnly = {questionAuthorId === userData?.id ? false : true} 
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                    handleRating(newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    setHover(newHover);
                                                }}
                                                emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            {value !== null && (
                                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                            )}
                                        </Box>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-text" onClick={
                                            () => {
                                                if (showAnswerComments) {
                                                    setShowAnswerComments(false)
                                                } else {
                                                    setShowAnswerComments(true);
                                                }
                                            }
                                        }><ForumTwoTone color='info' /> {answer?.comments?.length} Comments</div>
                                        {/* <div className="meta-text"><ShareTwoTone color='primary' />{answer?.share_count ? answer?.share_count : 0} Shares</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <EditAnswer open={editOpen} setOpen={setEditOpen} title={answer?.title} description={answer?.body} id={answer?.id} updateAnswer={getAnswer} />
                        <ReportContent
                            open={openReport}
                            setOpen={setOpenReport}
                            itemType='answer'
                            itemId={answer?.id}
                        />
                        <Comments showComments={showAnswerComments} comments={answer?.comments} answerId={answer?.id} getQuestions={getQuestions} />
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Answers;
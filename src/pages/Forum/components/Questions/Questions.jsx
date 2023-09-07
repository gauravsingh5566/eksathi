import React, { useEffect, useState } from 'react';
import ThumbDownTwoTone from '@mui/icons-material/ThumbDownTwoTone';
import ThumbUpTwoTone from '@mui/icons-material/ThumbUpTwoTone';
import ForumTwoTone from '@mui/icons-material/ForumTwoTone';
import ShareTwoTone from '@mui/icons-material/ShareTwoTone';
import { Avatar, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Comments from '../../components/Comments/Comments';
import moment from 'moment';

import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import { useGlobalContext } from 'global/context';
// import { pop2 } from 'layout/Popup';
import { CardMembershipTwoTone, CategoryTwoTone, HideSource, HideSourceTwoTone, QuestionAnswer, Report, VisibilityOffTwoTone, VisibilityRounded } from '@mui/icons-material';
import ReportTwoTone from '@mui/icons-material/ReportTwoTone';
import EditTwoTone from '@mui/icons-material/EditTwoTone';
import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import EditQuestion from '../Modals/EditQuestion'
import ReportContent from '../Modals/ReportContent';
import ViewAnswer from '../Modals/ViewAnswer';
import ViewComments from '../Modals/ViewComments';
import { useNavigate } from 'react-router-dom';
import { Button, Chip, Link, Typography } from '@mui/joy';
import { Popup } from 'layout/Popup';
import { toast } from 'react-hot-toast';

const Questions = ({ showAnswer, questionData, getQuestions, isAnswered, isSingle }) => {
    const { userData, api, apiAuth, removeObjectById, questions, setQuestions } = useGlobalContext();
    const navigate = useNavigate();
    const [alignment, setAlignment] = React.useState('left');
    const [question, setQuestion] = useState(questionData);
    const [showQuestionComments, setShowQuestionComments] = useState(false);
    const [showAnswerComments, setShowAnswerComments] = useState(false);
    const [upVote, setUpVote] = useState(0);
    const [downVote, setDownVote] = useState(0);
    const [viewDescription, setViewDescription] = useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [openReport, setOpenReport] = React.useState(false);
    const [layout, setLayout] = React.useState(undefined);
    const [commentLayout, setCommentLayout] = React.useState(undefined);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [commentLength, setCommentLength] = useState(question?.comments?.length);
    const [answerLength, setAnswerLength] = useState(isAnswered);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleVote = async (voteType) => {

        const formData = {
            email: userData?.email,
            questionId: question?.id,
            voteType: voteType
        }
        try {
            const res = await api.post(`/app/vote`, formData);
            if (res.status === 200) {
                console.log("Vote Res: ", res?.data);
                getVotes();
            }
        } catch (error) {
            console.log(error?.response?.data?.message);
            // pop2.error("Something went wrong!")
        }
    }

    const getVotes = async () => {

        try {
            const res = await api.get(`/app/vote/${question?.id}?type=question`);
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

    const getQuestion = async () => {
        try {
            const res = await api.get(`/app/question/${question?.slug}`);
            if (res.status === 200) {
                console.log("Question Res: ", res?.data);
                setQuestion(res?.data?.results);
                return res?.data?.results;
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleViewDesc = () => {
        if (viewDescription) {
            setViewDescription(false);
        } else {
            setViewDescription(true);
        }
    }

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const handleDelete = async (id) => {
        Popup('loading', 'Deleting a question');
        try {
            const res = await api.delete(`app/question/${id}`);
            if (res?.status === 200) {
                if (isSingle) {
                    navigate(-1);
                }
                Popup('success', 'Deleted Successfully');
                let updateQuestions = removeObjectById(questions, id);
                console.log(updateQuestions);
                setQuestions(updateQuestions);
            }
        } catch (error) {
            Popup('warning', error?.response?.data?.error);
        }
    }

    const handleHide = async (id) => {
        try {
            const res = await api.patch(`app/question/hide/${id}`);
            if (res?.status === 200) {
                // navigate(-1);
                toast.success('Question is hidden for public now');
                setQuestion((prev) => {
                    return {...prev, is_hidden: 1};
                });
                let updateQuestions = removeObjectById(questions, id);
                console.log(updateQuestions);
                setQuestions(updateQuestions);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    const handleUnHide = async (id) => {
        try {
            const res = await api.patch(`app/question/unhide/${id}`);
            if (res?.status === 200) {
                // navigate(-1);
                toast.success('Question is visible to public now');
                setQuestion((prev) => {
                    return {...prev, is_hidden: 0};
                });
                let updateQuestions = [...questions, question];
                console.log(updateQuestions);
                setQuestions(updateQuestions);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message);
        }
    };

    useEffect(() => {
        setUpVote(question?.votes?.upVoteCount);
        setDownVote(question?.votes?.downVoteCount);

        if (isSingle) {
            setViewDescription(true);
        } else {
            setViewDescription(false);
        }
    }, []);

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <React.Fragment>
            <div className="questions">
                <div className="block-box post-view p-0">
                    <div className="question">
                        <div className="post-header p-2 p-lg-3 pb-0 pb-lg-0">
                            <div className="media d-flex">
                                <div className="user-img">
                                    {/* <img src={require("../../media/figure/chat_5.jpg")} alt="Santosh" /> */}
                                    <Avatar
                                        src={question?.auther?.profile_pic}
                                        alt={question?.auther?.name}
                                    />
                                </div>
                                <div className="media-body">
                                    <div className="user-title"><Link onClick={() => navigate(`/${question?.auther?.username}`)}>{question?.auther?.name}</Link><span className='fst-italic fw-normal' style={{ fontSize: '12px', fontStyle: 'italic' }}> . {moment(question?.createdAt).fromNow()}</span> </div>
                                    <ul className="text-secondary">
                                        {/* <li className="meta-privacy d-inline-block text-secondary fs-6"><small>{question?.auther?.email}&nbsp;
                                        </small></li> */}
                                        <li className="meta-privacy d-inline-block text-secondary fs-6 rounded-2 border px-2 bg-light fw-bold" style={{ fontSize: '12px' }}>
                                            {/* <Chip variant="soft" startDecorator={<CardMembershipTwoTone />}> */}
                                            {question?.auther?.expertise}
                                            {/* </Chip> */}
                                        </li>
                                        <li className="ml-2  meta-privacy d-inline-block text-info bg-info fs-6 rounded-2 border px-2 bg-light fw-bold" style={{ fontSize: '12px' }}>
                                            {/* <Chip variant="soft" startDecorator={<CardMembershipTwoTone />}> */}
                                            {question?.category}
                                            {/* </Chip> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="dropdown">

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
                                        question?.auther?.email === userData?.email ?

                                            <div>
                                                <MenuItem onClick={() => {
                                                    setEditOpen(true);
                                                    handleClose();
                                                }}>
                                                    <EditTwoTone color="info" style={{ marginRight: "10px" }} /> Edit
                                                </MenuItem>
                                                <MenuItem onClick={() => {
                                                    handleDelete(question?.id);
                                                    handleClose();
                                                }}>
                                                    <DeleteTwoTone color="error" style={{ marginRight: "10px" }} /> Delete
                                                </MenuItem>
                                                <MenuItem onClick={() => {
                                                    if (question?.is_hidden) {
                                                        handleUnHide(question?.id);
                                                    } else {
                                                        handleHide(question?.id);
                                                    }
                                                    handleClose();
                                                }}>
                                                    {question?.is_hidden ?
                                                        <VisibilityRounded color="warning" style={{ marginRight: "10px" }} />
                                                        :
                                                        <VisibilityOffTwoTone color="warning" style={{ marginRight: "10px" }} />

                                                    }
                                                    {question?.is_hidden ? "Unhide" : "Hide"}
                                                </MenuItem>
                                            </div>
                                            : <MenuItem onClick={() => {
                                                setOpenReport(true);
                                                handleClose();
                                            }}>
                                                <ReportTwoTone color='warning' style={{ marginRight: "10px" }} /> Report
                                            </MenuItem>
                                    }


                                </Menu>
                            </div>
                            {/* ===============Context Menu Controls============ */}
                            {/* <div className="dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                    ...
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item">Close</a>
                                    <a className="dropdown-item">Edit</a>
                                    <a className="dropdown-item">Delete</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="post-body p-2 p-lg-3">
                            <div>
                                <Link onClick={() => navigate(`/questions/${!isSingle ? question?.slug : ''}`)} className='fs-5 text-dark mb-0 fw-bold' >{question?.title}
                                </Link>
                                <div className={viewDescription ? '' : 'text-truncate truncate'}
                                    dangerouslySetInnerHTML={{
                                        __html: question?.body,
                                    }}
                                />
                                {
                                    question?.tags?.length ?
                                        question?.tags?.map((tag) => (
                                            <Chip variant="soft" key={tag?.id} className="mr-1">
                                                {tag?.name}
                                            </Chip>
                                        )) : null
                                }
                                <div className='btn-link' style={{ cursor: 'pointer' }}
                                    onClick={handleViewDesc}
                                >
                                    {
                                        viewDescription ? "Collapse description" : "Expand description"
                                    }
                                </div>
                            </div>
                            <div className="post-meta-wrap py-0 mt-2 flex-wrap">
                                <div className="post-meta mb-1">
                                    {/* <div className="post-reaction">
                                                <div>
                                                    <ThumbUpTwoTone color='success' />
                                                </div>
                                                <div className="meta-text">25</div>
                                                <Divider orientation="vertical" flexItem />
                                                <div className='px-3'>
                                                    <ThumbDownTwoTone color='error' />
                                                    <div className="meta-text">25</div>
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
                                <div className="post-meta mb-1">

                                    {
                                        isSingle ? '' :
                                            <Tooltip title="Show/Hide Answers">
                                                <Button variant='plain' size='sm'
                                                    // disabled={isAnswered ? false : true}
                                                    className='text-capitalize fw-semibold rounded'
                                                    onClick={() => setLayout('center')}
                                                >
                                                    {!isAnswered ? 'Write first answer' :
                                                        showAnswer ? 'Hide Answers' : `Show ${answerLength || ''} Answers`}
                                                </Button>
                                                {/* <Button variant='outlined' size='small'
                                            disabled={isAnswered ? false : true}
                                            className='text-capitalize fw-semibold rounded'
                                            onClick={showAnswerHandler}
                                        >
                                            {!isAnswered ? 'No Answers' :
                                                showAnswer ? 'Hide Answers' : `Show ${isAnswered} Answers`}
                                        </Button> */}
                                            </Tooltip>
                                    }
                                    <Button variant='plain' size='sm'
                                        // disabled={isAnswered ? false : true}
                                        className='text-capitalize fw-semibold rounded'
                                        // onClick={
                                        //     () => {
                                        //         if (showQuestionComments) {
                                        //             setShowQuestionComments(false)
                                        //         } else {
                                        //             setShowQuestionComments(true);
                                        //         }
                                        //     }
                                        // }
                                        onClick={() => setCommentLayout('center')}
                                        style={{
                                            marginLeft: "10px"
                                        }}
                                    >
                                        {!question?.comments?.length ? 'Write first comment' :
                                            showQuestionComments ? 'Hide Comments' : `Show ${commentLength} Comments`}
                                    </Button>
                                    {/* <Tooltip title="Show/Hide all comments">
                                        <IconButton className="bg-light ms-2" onClick={
                                            () => {
                                                if (showQuestionComments) {
                                                    setShowQuestionComments(false)
                                                } else {
                                                    setShowQuestionComments(true);
                                                }
                                            }
                                        }> <ForumTwoTone color='info' /> <span className='text-white bg-light-green-grad' style={{ clipPath: "circle()", fontSize: 10, position: "absolute", zIndex: 100, bottom: 0, right: "-5px", padding: 5 }}>{question?.comments?.length}</span></IconButton>
                                    </Tooltip> */}
                                    {/* <div className="meta-text">{question?.share_count ? question?.share_count : 0} <ShareTwoTone color='primary' /></div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div className="post-footer">
                                    <ul>
                                        <li className="post-react">
                                            <a><i className="icofont-thumbs-up"></i>React!</a>
                                            <ul className="react-list">
                                                <li><a><img src={require("../../media/figure/reaction_1.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_3.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_4.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_2.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_7.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_6.png")} alt="Like" /></a></li>
                                                <li><a><img src={require("../../media/figure/reaction_5.png")} alt="Like" /></a></li>
                                            </ul>
                                        </li>
                                        <li><a><i className="icofont-comment"></i>Comment</a></li>
                                        <li className="post-share">
                                            <a href="javascript:void(0);" className="share-btn"><i className="icofont-share"></i>Share</a>
                                            <ul className="share-list">
                                                <li><a className="color-fb"><i className="icofont-facebook"></i></a></li>
                                                <li><a className="color-messenger"><i className="icofont-facebook-messenger"></i></a></li>
                                                <li><a className="color-instagram"><i className="icofont-instagram"></i></a></li>
                                                <li><a className="color-whatsapp"><i className="icofont-brand-whatsapp"></i></a></li>
                                                <li><a className="color-twitter"><i className="icofont-twitter"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div> */}

                    </div>
                    <EditQuestion open={editOpen} setOpen={setEditOpen} title={question?.title} description={question?.body} id={question?.id} />
                    <ReportContent
                        open={openReport}
                        setOpen={setOpenReport}
                        itemType='question'
                        itemId={question?.id}
                    />
                    <ViewAnswer layout={layout} setLayout={setLayout} id={question?.id} question={question} setAnswerLength={setAnswerLength} />
                    <ViewComments
                        layout={commentLayout} setLayout={setCommentLayout}
                        showComments={true}
                        commentList={question?.comments}
                        setCommentLength={setCommentLength}
                        // questionId={question?.id}
                        // getQuestions={getQuestions}
                        id={question?.id}
                        itemType='question'
                        author={question?.auther?.id}
                    />
                    {/* <Comments
                        showComments={showQuestionComments}
                        comments={question?.comments}
                        questionId={question?.id}
                        getQuestions={getQuestions}
                    /> */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Questions;
import React, { useState } from 'react';
import MessageModal from './MessageModal';
import ClientMessages from "./ClientMessages";
import OwnerMessages from "./OwnerMessages";
import { Avatar, Checkbox, IconButton, Input, ListDivider, Menu, MenuItem, Tooltip } from "@mui/joy";
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { DeleteForever, MoreVert } from "@mui/icons-material";
import { useGlobalContext } from "global/context";
import { useRef } from "react";
import { useEffect } from "react";
import io from 'socket.io-client';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import SendIcon from '@mui/icons-material/Send'
import { Link } from 'react-router-dom';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { border } from '@mui/system';



const PopUpMessage = ({ user, room, windowOpen, setWindowOpen }) => {

    const [messages, setMessages] = useState([]);
    const [state, setState] = useState(false)
    const { userData, api, showMessage, setShowMessage, socket } = useGlobalContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [isDivHeightReduced, setIsDivHeightReduced] = useState(false);
    const [sendMessage, setSendMessage] = useState("");
    const chatContainerRef = useRef(null);


    const handleClickMin = () => {
        setIsDivHeightReduced(!isDivHeightReduced); // Toggle the state value
        handleDivClick();
    };

    const handleDivClick = () => {
        // Handle div click event here
    };


    // const socket = InitSocket();

    const handleInputChange = (event) => {
        setSendMessage(event.target.value);
    };

    const handleSendClick = () => {
        const newMessage = {
            id: Date.now(),
            sender_id: userData?.id,
            content: sendMessage,
            room
        };
        socket.emit("send-message", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setSendMessage('');
    };

    const handleDeleteChat = () => {
        setMessages([]);
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];

    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    // Do something with the latitude and longitude values
                },
                (error) => {
                    console.log('Error occurred while retrieving location:', error);
                }
            );
        } else {
            console.log('Geolocation is not supported by this browser.');
        }
    };

    const handleSubmit = () => {
        const newMessage = {
            id: Date.now(),
            sender_id: userData?.id,
            content: sendMessage,
            room
        };
        socket.emit("send-message", newMessage);
        console.log("Message Sent: ", sendMessage);
    };

    const scrollToBottom = () => {
        chatContainerRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
    };

    const getHistory = async (roomId) => {
        try {
            const res = await api.get(`/app/chat/history?room=${roomId}`);
            if (res?.status === 200) {
                setMessages(res?.data?.history || []);
                console.log("Message History: ", res?.data?.history);
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    };

    useEffect(() => {
        // Scroll to bottom whenever messages are added or updated
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        getHistory(userData?.id + user?.id);
    },[user]);


    useEffect(() => {
        socket?.on("receive-message", (data) => {
            console.log("Received message: ", data);
            setMessages((prevMessages) => [...prevMessages, data]);
            console.log(messages);
            if (!showMessage) {
                setShowMessage(true);
                setState(false)
                setIsDivHeightReduced(false)
            }
        });
        return () => {
            socket?.off('receive-message');
        };
    }, []);

    useEffect(() => {
        socket?.emit("join-room", {
            room,
            userId: userData?.id,
        });
        socket?.on("user-joined", (data) => {
            console.log("User Joined: ", data);
            getHistory(data.room);
        })
    }, []);

    const handleClose = () => {
        setWindowOpen(false);
    };

    if (!windowOpen) {
        return null; // Render nothing when the window is closed
    }


    return (
        <>
            <div className={`border-2 shadow-lg  bg-dark  ${isDivHeightReduced ? 'reduced-height' : ''}`}
                style={{
                    position: 'fixed', // Set position to fixed
                    // left: '100px',
                    bottom: '0',
                    right: '30px',
                    width: '350px',
                    height: isDivHeightReduced ? '50px' : '450px', // Adjust the height as per your requirement
                    backgroundColor: "white",

                    borderRadius: '6px',
                    zIndex: '1',
                    // overflowY: 'scroll', // Show scroll bar
                    overscrollBehavior: 'contain', // Scroll bar remains at the bottom
                }}



            >



                <div className='d-flex justify-content-between  align-items-center bottom-border-1 p-2' onClick={() => {
                    setState(prevState => !prevState);
                    handleClickMin();
                }}  >
                    <div className="d-flex justify-content-between   align-items-center window-title " >

                        <Avatar alt={user?.name || "User"} src={user?.avatar_url} className="mr-2" style={{ width: "30px", height: "30px" }} />
                        <div className='' style={{ lineHeight: '15px' }}>

                            <h5 className='fs-15 font-weight-bold text-white'>{user?.first_name + " " + user?.last_name} </h5>
                            <p className='fs-11 text-light'>Online</p>
                        </div>
                    </div>
                    <div className='mr-2 mb-1' >
                        {/* <MinimizeIcon style={{ marginTop: "-15px" }}
                            /> &nbsp;&nbsp; */}

                        {/* <Link to='/messages' className='text-dark'>  <FullscreenIcon /></Link> &nbsp;&nbsp; */}
                        <CloseIcon onClick={handleClose} style={{ color: 'white' }} />



                    </div>
                </div>

                <div className='card'></div>


                {/* Chat Div  */}


                <div style={{
                     backgroundColor: "white",
                    //  border:"2px solid red",
                     height: '1000%',
                }}>
                    <div
                        className="scroll-bar-hidden scroll-minibar "
                        style={{
                            position: 'absolute',
                            // top: '30px',
                            // bottom: '25px',
                            width: '100%',
                            height: '80%',
                            zIndex: '1000',
                            overflow: 'auto',
                            padding: '0px 2px 0px 2px',
                            backgroundColor: "white",
                            // border:"2px solid red"
                        }}
                    >

                        <div hidden={state}>
                            <div className="bg-white   rounded-4   p-1 scroll-minibar" style={{ height: "100%", overflow: 'auto', overflowX: 'hidden', backgroundColor: "#e0efff"}}>
                                <h6 className="text-center fs-11 mb-4 p-2">Today, Jun 7</h6>

                                <div className="message-container" ref={chatContainerRef}>
                                    {/* Render existing messages */}
                                    {messages.map((msg) => {
                                        if (msg.sender_id === userData?.id) {
                                            return <OwnerMessages data={msg} key={msg.id} />;
                                        } else {
                                            return <ClientMessages data={msg} key={msg.id} />;
                                        }
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Input ANd Send MEssage Div */}


                <div className='card'></div>
                <div hidden={state}>
                    <div className="d-flex  ">
                        <div className="input-group rounded-3 p-1 "
                            style={{
                                position: "absolute",
                                width: "100%",
                                bottom: 0,
                                zIndex: '1000',

                            }}>
                            <Input
                                fullWidth
                                placeholder="Type in here..."
                                variant="soft"
                                value={sendMessage}
                                onKeyUp={(e) => { if (e.key === "Enter") handleSendClick(); }}
                                onChange={handleInputChange}
                                endDecorator={
                                    <div className="d-flex">


                                        <IconButton variant='plain' color="primary" onClick={handleSubmit}>
                                            <SendIcon sx={{ color: "#007bff", width: "20px", height: "20px" }} />
                                        </IconButton>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default PopUpMessage;

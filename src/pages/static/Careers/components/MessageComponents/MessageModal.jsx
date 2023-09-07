import React, { useState, useRef, useEffect } from "react";
import { Avatar, IconButton, Stack } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import Input from "@mui/joy/Input";
import SendIcon from '@mui/icons-material/Send'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Checkbox, Menu, MenuItem } from "@mui/joy";
import DeleteForever from "@mui/icons-material/DeleteForever";
import { useGlobalContext } from "global/context";
import io from 'socket.io-client';
import axios from "axios";

import ClientMessages from "./ClientMessages";
import OwnerMessages from "./OwnerMessages";
import "../Css/Messages.css";
import { MoreVert } from "@mui/icons-material";


function MessageModal({ user, room }) {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { userData, api, showMessage, setShowMessage, socket } = useGlobalContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const chatContainerRef = useRef(null);
    const [sendMessage, setSendMessage] = useState("");

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        socket.on("receive-message", (data) => {
            console.log("Received message: ", data);
            setMessages((prevMessages) => [...prevMessages, data]);
            if (!showMessage) {
                setShowMessage(true);
            }
        });
        return () => {
            socket.off('receive-message');
        };
    }, []);

    useEffect(() => {
        socket.emit("join-room", {
            room,
            userId: userData?.id,
        });
        socket.on("user-joined", (data) => {
            console.log("User Joined: ", data);
            getHistory(data.room);
        })
    }, []);

    return (
        <div>
            <div className="p-2">
                <div className="p-2 rounded-3">
                    <div className=" mb-3">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center overflow-hidden text-nowrap">
                                <Avatar
                                    alt={user?.first_name + ' ' + user?.last_name}
                                    src={user?.avatar_url}
                                    className="mr-1"
                                    sx={{
                                        width: "55px",
                                        height: "55px"
                                    }}
                                />
                                <div className="p-1">
                                    <h5 className="fs-20 ">{user?.first_name + " " + user?.last_name}</h5>
                                    <p className="overflow-hidden text-nowrap fs-12 text-success font-weight-bold">
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <Stack sx={{ color: "gray", width: "40px" }}>
                                    <div>
                                        <IconButton
                                            id="positioned-demo-button"
                                            aria-controls={open ? 'positioned-demo-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            variant="outlined"
                                            color="neutral"
                                            onClick={handleClick}
                                        >
                                            <MoreVert />
                                        </IconButton>
                                        <Menu
                                            id="positioned-demo-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="positioned-demo-button"
                                            placement="bottom-end"
                                        >
                                            <MenuItem onClick={''}>
                                                <Checkbox color="primary" /> Select All
                                            </MenuItem>
                                            <MenuItem onClick={handleDeleteChat} variant="soft" color="danger">
                                                <DeleteForever /> Delete Chat
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </Stack>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    <div className="  ">
                        <div>
                            <div className="bg-white  rounded-4  p-1 scroll-minibar" style={{ height: "77vh", overflow: 'auto', overflowX: 'hidden', backgroundColor: "#e0efff" }}>
                                <h6 className="text-center fs-12 mb-4 p-2">Today, Jun 7</h6>
                                <div className="message-container" ref={chatContainerRef}>
                                    {messages.map((msg) => {
                                        if (msg.sender_id === userData?.id) {
                                            return <OwnerMessages data={msg} avatar={userData?.profile} key={msg.id} />;
                                        } else {
                                            return <ClientMessages data={msg} avatar={user?.avatar_url} key={msg.id} />;
                                        }
                                    })}
                                </div>
                                <div className=''></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <div className="d-flex">
                        <div className="input-group rounded-3 " style={{ position: "sticky", width: "100%", bottom: 10 }}>
                            <Input
                                fullWidth
                                placeholder="Type in here..."
                                variant="plain"
                                value={sendMessage}
                                onKeyUp={(e) => { if (e.key === "Enter") handleSendClick(); }}
                                onChange={handleInputChange}
                                endDecorator={
                                    <div className="d-flex">
                                        {/* <IconButton>
                      <label htmlFor="upload-photo">
                        <InsertPhotoIcon sx={{ color: "#007bff", width: "20px", height: "20px", marginTop: "5px" }} />
                      </label>
                      <input
                        id="upload-photo"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handlePhotoUpload}
                      />
                    </IconButton>
                    <IconButton onClick={handleLocationClick}>
                      <LocationOnIcon sx={{ color: "#007bff", width: "20px", height: "20px" }} />
                    </IconButton>
                    <IconButton>
                      <MicIcon sx={{ color: "#007bff", width: "20px", height: "20px" }} />
                    </IconButton> */}
                                        <IconButton color="primary" onClick={handleSubmit}>
                                            <SendIcon sx={{ color: "#007bff", width: "20px", height: "20px" }} />
                                        </IconButton>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageModal;

import React, { useState } from "react";
import MicIcon from '@mui/icons-material/Mic';
import EditIcon from "@mui/icons-material/Edit";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from "@mui/icons-material/Place";
import { Avatar, IconButton } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Stack } from "react-bootstrap";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import './Css/Messages.css'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import ClientMessages from "./MessageComponents/ClientMessages";
import OwnerMessages from "./MessageComponents/OwnerMessages";
import PinnedMessages from "./MessageComponents/PinnedMessages";
import AllMessages from "./MessageComponents/AllMessages";
import { Checkbox, ListDivider, Menu, MenuItem } from "@mui/joy";
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { DeleteForever, Edit, MoreVert } from "@mui/icons-material";
import { msgData } from "./MessageComponents/Data";
import { useGlobalContext } from "global/context";
import MessageModal from "./MessageComponents/MessageModal";


function Messages({ number }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
 
  var chatContainer = document.getElementById("chatContainer");

// Function to scroll the chat container to the bottom
function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}


  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {

    const newMessage = {
      id: Date.now(),
      sender_id: userData?.id,
      content: message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
   console.log(messages)

    setMessage('');
    scrollToBottom();


  };
  

  const { userData } = useGlobalContext();
  // const [messagess, setMessagess] = useState(msgData);
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // Select All Functionality 






  return (
    <>
      <div className="container  " >
        <div className="row">
          <div className="col-12 col-lg-4 rounded-3 ">
            <div className="  p-3 ">
              <div className="d-flex justify-content-between  p-2 ">
                <h4>Messages</h4>
                <div>
                  <EditIcon />
                </div>
              </div>
              <div class="form d-flex p-2 ">
                <Input
                  fullWidth
                  placeholder="Type in here…"
                  variant="plain"
                  startDecorator={<SearchIcon />}
                />
              </div>
              {/* <div>
                <div className="fs-12  ">
                  <PlaceIcon sx={{ width: 13 }} /> Pinned Message
                </div>
              </div>
              <div>

                <PinnedMessages />
              </div> */}

              <div className="fs-12 ">
                <div>
                  <MessageIcon sx={{ width: 13 }} /> People
                </div>
              </div>
              <div>
                <AllMessages />
              </div>
            </div>
          </div>

          {/* 2nD Div  */}

          <div className="col12 col-lg-8 d-none d-lg-block bg-light  " >
         
            <MessageModal/>
          </div>
        </div>
      </div>

    </>
  );
}


export default Messages;

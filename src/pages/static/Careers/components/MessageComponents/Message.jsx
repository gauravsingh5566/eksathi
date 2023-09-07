import { Avatar, Modal, ModalClose, ModalDialog } from '@mui/joy';
import MessageModal from './MessageModal';
import { useGlobalContext } from 'global/context';
import React from 'react'
import { useState } from 'react';

const Message = ({ user }) => {
    const { userData } = useGlobalContext();
    const [layout, setLayout] = React.useState(undefined);
    const [isClicked, setIsClicked] = useState(false);
    const circleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        backgroundColor: "red",
        fontSize: "12px",
        marginBottom: "5px",
        color: "white",
    };
    return (
        <>
            <div
                className={`d-flex justify-content-between mb-1 hover-bg rounded-3 p-2 ${isClicked ? 'clicked' : ''}`}
                onClick={() => {
                    setLayout('fullscreen');
                    setIsClicked(true);
                }}
                style={{ transition: "background-color 0.3s ease", cursor: "pointer" }}
            >
                <div className="d-flex align-items-center overflow-hidden text-nowrap"
                >
                    <Avatar
                        alt={user?.first_name + ' ' + user?.last_name}
                        src={user?.avatar_url}
                        className="mr-1"
                        sx={{
                            width: "45px",
                            height: "45px"
                        }}
                    />
                    <div className="p-1">
                        <h6 className="fs-15">{user?.first_name + " " + user?.last_name}  ({user?.id})</h6>
                        <p className=" overflow-hidden text-nowrap fs-12 text-secondary">
                            {user?.first_name} Typing...
                        </p>
                    </div>
                </div>

                <div>
                    <h6 className="fs-12 text-secondary text-nowrap mb-2">
                        10:03 PM
                    </h6>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                ...circleStyle,
                            }}
                            className="p-2"
                        >
                            {3}
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={!!layout} onClose={() => setLayout(undefined)}>
                <ModalDialog
                    aria-labelledby="layout-modal-title"
                    aria-describedby="layout-modal-description"
                    layout={layout}
                >
                    <ModalClose />
                    <MessageModal user={user} room={userData?.id + user?.id} />
                </ModalDialog>
            </Modal>
        </>
    )
}

export default Message;
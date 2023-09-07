import { Avatar } from '@mui/joy';
import React from 'react'
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import MessageModal from './MessageModal';
import AllMessages from './AllMessages';
import Message from './Message';

function PinnedMessages() {
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
  const [layout, setLayout] = React.useState(undefined);
  return (
    <div>
      <div className="p-2 scroll-minibar" style={{ overflow: 'auto', overflowX: 'hidden', maxHeight: '468px', }} >
        <React.Fragment>

          <Modal open={!!layout} onClose={() => setLayout(undefined)}>
            <ModalDialog
              aria-labelledby="layout-modal-title"
              aria-describedby="layout-modal-description"
              layout={layout}
            >
              <ModalClose />
              <MessageModal />
            </ModalDialog>
          </Modal>
        </React.Fragment>
        <Message setLayout={setLayout}/>
        <Message setLayout={setLayout}/>
        <Message setLayout={setLayout}/>
        <Message setLayout={setLayout}/>
        
      </div>
    </div>
  )
}

export default PinnedMessages

import React from 'react';
import { styled } from '@mui/system';
import { Container, Paper, TextField, Button } from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const StyledChatContainer = styled(Paper)(({ theme }) => ({
  flex: 1,
  marginBottom: theme.spacing(2),
  overflowY: 'auto',
}));

const StyledInputContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(1),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  marginRight: theme.spacing(1),
}));

const ChatBox = () => {
  return (
    <StyledContainer maxWidth="sm">
      <StyledChatContainer elevation={3}>
        {/* Render chat messages here */}
      </StyledChatContainer>
      <StyledInputContainer elevation={3}>
        <StyledTextField
          placeholder="Type your message..."
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default ChatBox;

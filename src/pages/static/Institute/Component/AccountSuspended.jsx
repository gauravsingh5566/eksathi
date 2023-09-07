import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/joy';
import { Lock, LockRounded } from '@mui/icons-material';

const AccountSuspended = () => {
    return (
        <Container className="account-suspended-container my-5" style={{minHeight: "500px"}}>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xs={12} md={6}>
                    <img src="https://img.freepik.com/free-vector/vector-security-padlock-chrome-steel-with-dial-isolated-white_1284-48153.jpg?w=826&t=st=1692234216~exp=1692234816~hmac=10a4c259bdc5b3f60077acfca6a3413c267c486ba27fc545c185e652c9cb2002"
                    className='w-100'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2 className='mb-3'>
                        Account Suspended
                    </h2>
                    <Typography variant="body1">
                        Your account has been suspended due to violation of our terms and conditions. Please contact support for further assistance.
                    </Typography>
                    <Button variant="soft" color="primary" className="mt-3">
                        Contact Support
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AccountSuspended;

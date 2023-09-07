import React from 'react';
import "./Error.css";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>404</h1>
                        </div>
                        <h2>We are sorry, Page not found!</h2>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Button size="lg" variant='outlined' color="neutral" onClick={() => navigate('/')} 
                        className='mt-5 rounded-4'
                        >Back to Home</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound;
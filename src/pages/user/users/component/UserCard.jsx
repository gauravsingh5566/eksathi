import { Avatar, Button, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';



const UserCard = ({ user }) => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT || "http://localhost:5000/";
    // console.log("User : ", user);
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));
    return (
        <React.Fragment>
            <div className="col-lg-4 responsive-column-half">
                <div className="media media-card p-3">
                    <Link to={`/user/${user?.id}`} className="media-img d-inline-block flex-shrink-0">
                        <img src="images/company-logo.png" alt="company logo" />

                        {/* <div className={`btn btn-${user?.is_online? ''} btn-sm`}>Online</div> */}
                    </Link>
                    <div className="media-body">
                        <h5 className="fs-16 fw-medium"><Link to={`/user/${user?.id}`}>{user?.first_name + " " + user?.last_name}</Link></h5>
                        <small className="meta d-block lh-24 pb-1"><span>{user?.location || "New York, United States"}</span></small>
                        <p className="fw-medium fs-15 text-black-50 lh-18 mb-2">Connections {user?.reputation || "1,200"}</p>
                        <Button size="small" variant="outlined" className='text-capitalize'><i class="bi bi-person-plus pr-1"></i> Connect</Button>
                    </div>
                    {/* <!-- end media-body --> */}
                </div>
                {/* <!-- end media --> */}
            </div>
            {/* <!-- end col-lg-3 --> */}
        </React.Fragment>
    )
}

export default UserCard;
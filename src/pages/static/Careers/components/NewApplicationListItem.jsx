import { MoreVert } from '@mui/icons-material';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/joy';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewApplicationListItem = ({applicant}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = useState(Boolean(anchorEl));
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true)
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false)
    };

    return (
        <>
            <div className='d-flex justify-content-between mb-2 p-2 hover-bg rounded-3'>
                <div className='d-flex align-items-center'>
                    <Avatar alt={applicant?.users?.display_name || "New Applicant"} src={applicant?.users?.avatar_url}
                        className="" />
                    <Link to="/" className='col' style={{
                        color: "grey",

                    }}>

                        <p className='cursor-pointer  fw-bold text-info'  >{applicant?.users?.display_name || "New Applicant"}</p>


                        <p className='fs-14  lh-1'>Applied for {applicant?.job_descriptions?.job_title}</p>

                    </Link>

                </div>

                <div>
                    <IconButton
                        id="positioned-demo-button"
                        aria-controls={open ? 'positioned-demo-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? true : undefined}
                        variant="plain"
                        color="neutral"
                        onClick={handleClick}
                    >
                        <MoreVert />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="basic-demo-button"
                        placement="bottom-end"
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Job Description</MenuItem>
                        <MenuItem onClick={handleClose}>Update Status</MenuItem>
                    </Menu>

                </div>



            </div>
        </>
    )
}

export default NewApplicationListItem;
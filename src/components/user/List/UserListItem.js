import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import { PersonAddOutlined } from '@mui/icons-material';

const UserListItem = ({user}) => {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={user?.first_name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={<Link to={`/user/${user?.id}`}><h6>{user?.first_name + " " + user?.last_name}</h6></Link>}
                    secondary={
                        <React.Fragment>
                                <span>{user?.expertise}</span> 
                            {/* {" — I'll be in your neighborhood doing errands this…"} */}
                           <br/>
                            {user?.points || '0'} <span className=''>Points</span>
                        </React.Fragment>
                    }
                />
                <ListItemText
                    primary={<><Rating name="size-small" defaultValue={user?.rating || 0} size="small" readOnly/></>}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                 <Button variant="outlined" startIcon={<PersonAddOutlined />} className="text-capitalize" size="small">Connect</Button>
                            {/* <Rating name="size-small" defaultValue={4} size="small" readOnly/> */}
                            </Typography>
                            {/* {" — I'll be in your neighborhood doing errands this…"} */}
                            
                        </React.Fragment>
                    }
                />
                
                
            </ListItem>
        </>
    )
}

export default UserListItem;
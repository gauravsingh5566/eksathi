import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import { ListItemContent } from '@mui/joy';

export default function MessageList() {
    return (
        <Box>

            <List
                variant="plain"
                className="rounded"
                sx={{
                    '--ListItemDecorator-size': '56px',
                    
                }}
            >
                <ListItem className="hover-bg">
                    <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                        <Avatar src="/static/images/avatar/1.jpg" />
                    </ListItemDecorator>
                    <ListItemContent>
                        <Typography className=" fw-bold">Shivam Kumar</Typography>
                        <Typography level="body2" noWrap>
                            Wish I could come, but I&apos;m out of town this Friday.
                        </Typography>
                    </ListItemContent>
                </ListItem>
                <ListDivider inset='startContent' sx={{
                    backgroundColor: '#8b008b14',
                }} />
                <ListItem className="hover-bg">
                    <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                        <Avatar src="/static/images/avatar/2.jpg" />
                    </ListItemDecorator>
                    <ListItemContent>
                        <Typography className=" fw-bold">Ayush Antiwal</Typography>
                        <Typography level="body2" noWrap>
                            Wish I could come, but I&apos;m out of town this Friday.
                        </Typography>
                    </ListItemContent>
                </ListItem>
            </List>
        </Box>
    );
}
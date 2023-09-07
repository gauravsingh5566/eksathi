import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import InboxIcon from "@mui/icons-material/Inbox";
import Label from "@mui/icons-material/Label";
import People from "@mui/icons-material/People";
import Info from "@mui/icons-material/Info";
import Star from "@mui/icons-material/Star";
import {
  Dashboard,
  DocumentScanner,
  MailTwoTone,
  NotificationsTwoTone,
  Person,
  PersonOffOutlined,
  Work,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function EmployerSidebar() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box sx={{ paddingLeft: 0 }}>
      <List
        aria-label="Sidebar"
        sx={{
          // ...applyRadiusOnEdges({ target: 'deepest' | 'nested' }),
          "--ListItem-paddingLeft": "0px",
          "--ListItemDecorator-size": "64px",
          "--ListItemDecorator-color": (theme) =>
            theme.vars.palette.text.secondary,
          "--ListItem-minHeight": "32px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
        }}
      >
        <ListItem>
          <ListItemButton
            selected={index === 0}
            variant={index === 0 ? "soft" : "plain"}
            color={index === 0 ? "danger" : undefined}
            onClick={() => setIndex(0)}
          >
            <ListItemDecorator>
              <Dashboard fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Dashboard</ListItemContent>
          </ListItemButton>
        </ListItem>
        <Link to='/institute/profile'>
          <ListItem>
            <ListItemButton
              selected={index === 1}
              variant={index === 1 ? "soft" : "plain"}
              color={index === 1 ? "neutral" : undefined}
              onClick={() => setIndex(1)}
            >
              <ListItemDecorator>
                <Person fontSize="lg" />
              </ListItemDecorator>
              <ListItemContent>Profile</ListItemContent>
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem>
          <ListItemButton
            selected={index === 2}
            variant={index === 2 ? "soft" : "plain"}
            color={index === 2 ? "neutral" : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <NotificationsTwoTone fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Notifications</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            selected={index === 3}
            variant={index === 3 ? "soft" : "plain"}
            color={index === 3 ? "neutral" : undefined}
            onClick={() => setIndex(3)}
          >
            <ListItemDecorator>
              <MailTwoTone fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Messages</ListItemContent>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton
            selected={index === 4}
            variant={index === 4 ? "soft" : "plain"}
            color={index === 4 ? "neutral" : undefined}
            onClick={() => setIndex(4)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            <ListItemContent>Manage Jobs</ListItemContent>
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 5}
                variant={index === 5 ? "soft" : "plain"}
                color={index === 5 ? "primary" : undefined}
                onClick={() => setIndex(5)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Jobs</ListItemContent>
                <Typography level="body2">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 6}
                variant={index === 6 ? "soft" : "plain"}
                color={index === 6 ? "warning" : undefined}
                onClick={() => setIndex(6)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Post Job</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 7}
                variant={index === 7 ? "soft" : "plain"}
                color={index === 7 ? "warning" : undefined}
                onClick={() => setIndex(7)}
              >
                <ListItemDecorator>
                  <Person fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Applicants</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 8}
                variant={index === 8 ? "soft" : "plain"}
                color={index === 8 ? "warning" : undefined}
                onClick={() => setIndex(8)}
              >
                <ListItemDecorator>
                  <DocumentScanner fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Acquisition</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        {/* <ListItem nested>
          <ListItemButton
            selected={index === 2}
            variant={index === 2 ? 'soft' : 'plain'}
            color={index === 2 ? 'info' : undefined}
            onClick={() => setIndex(2)}
          >
            <ListItemDecorator>
              <ArrowDropDown fontSize="lg" />
              <Label fontSize="lg" />
            </ListItemDecorator>
            Categories
          </ListItemButton>
          <List>
            <ListItem>
              <ListItemButton
                selected={index === 3}
                variant={index === 3 ? 'soft' : 'plain'}
                color={index === 3 ? 'primary' : undefined}
                onClick={() => setIndex(3)}
              >
                <ListItemDecorator>
                  <People fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Social</ListItemContent>
                <Typography level="body2">4,320</Typography>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={index === 4}
                variant={index === 4 ? 'soft' : 'plain'}
                color={index === 4 ? 'warning' : undefined}
                onClick={() => setIndex(4)}
              >
                <ListItemDecorator>
                  <Info fontSize="lg" />
                </ListItemDecorator>
                <ListItemContent>Updates</ListItemContent>
                <Typography level="body2">22,252</Typography>
              </ListItemButton>
            </ListItem>
          </List>
        </ListItem> */}
      </List>
    </Box>
  );
}

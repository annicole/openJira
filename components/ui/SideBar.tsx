import { InboxOutlined, MailOutlineOutlined } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { UIContext } from "../../context/ui/UIContext";

interface Props {}

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

const SideBar = () => {

  const {sidemenuOpen,closeSideMenu} = useContext(UIContext);
  return (
    <React.Fragment key="left">
      <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
        <Box sx={{ width: 250 }}>
          <Box>
            <Typography variant="h4">Menú</Typography>
          </Box>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 ? <InboxOutlined /> : <MailOutlineOutlined />}
                </ListItemIcon>
                <ListItemText primary={text}></ListItemText>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default SideBar;

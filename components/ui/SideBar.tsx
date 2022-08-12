import { Drawer, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {}

const menuItems:string[] =['Inbox','Starred','Send Email','Drafts'];

const SideBar = () => {
  return (
    <React.Fragment key="left">
      <Drawer
        anchor="left"
        open={true}
        onClose={() => console.log("cerrado")}
      >
        <Box>
            <Typography variant="h4">Menú</Typography>
        </Box>
        <List>

        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default SideBar;

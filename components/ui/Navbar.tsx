import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <Typography variant="h6">Open Jira</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

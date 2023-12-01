import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
export default class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <img src="/icon.png" alt="logo" width={"44px"} />
            <Typography variant="h6" ml={4}>
              English to IPA translator
            </Typography>
          </div>
          {/* <Button color="inherit">Login</Button> */}

          <Typography>About us</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

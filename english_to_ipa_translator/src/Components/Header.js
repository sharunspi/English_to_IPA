import React, { Component } from 'react'
import { AppBar,Toolbar,IconButton,Typography,Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
export default class Header extends Component {
    render() {
        return (
            <AppBar position="static">
            <Toolbar>
              <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" >
                English to IPA translator
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        )
    }
}

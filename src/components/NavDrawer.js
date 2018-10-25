import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import {NavToggleButton} from '../styled/NavDrawer'
import "./NavDrawer.css"

class NavDrawer extends Component {
  state = {
    open: false,
    width: 250
  }

  toggle = () => {
    this.setState((prevState, props) => {
      return {
        open: !prevState.open
      }
    })
  }

  render() {
    return (
      <div>
        <NavToggleButton
          width={this.state.width}
          toggle={this.toggle}
          open={this.state.open}
        />
        <Drawer
          open={this.state.open}
          width={this.state.width}
          onClose={this.toggle}
        >
          <div
            style={{
              height: '200px',
              width: '100%',
              backgroundColor: 'salmon'
            }}
          >
            LoginContainer
          </div>
          <Divider />
          <List
            component="nav"
            onClick={this.toggle}
            className="list">
            <Link to={'/'}>
              <ListItem button>
                <ListItemText>
                  Play
                </ListItemText>
              </ListItem>
            </Link>
            <Link to={'/profile'}>
              <ListItem button>
                <ListItemText>
                  Profile
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    )
  }
}

export default NavDrawer

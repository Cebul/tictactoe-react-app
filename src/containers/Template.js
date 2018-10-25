import React, {Component} from 'react'
import NavDrawer from '../components/NavDrawer'
import {Header,Main} from '../styled/Template'

class Template extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <Header>
          TicTacToe
        </Header>
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

export default Template

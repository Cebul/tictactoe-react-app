import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import NavDrawer from '../components/NavDrawer'

class Template extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template

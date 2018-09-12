import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

class Template extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TicTacToe</h1>
          <Button
            variant="contained"
            color="primary"
            onTouchStart={() => console.log('bang')}>
            Send
          </Button>
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Template

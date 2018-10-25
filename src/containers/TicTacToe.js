import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board} from '../styled/TicTacToe'

class TicTacToe extends Component {

  state = {
    rows: 3,
    gameState: new Array(9).fill(false),
    ownMark: 'X',
    otherMark: 'O',
    gameOver: false,
    yourTurn: true,
    winner: false,
    win: false
  }

  componentWillmount() {
    //when my component mounts
    let height = window.innerHeight // we are looking for person browser height
    console.log(height);
    let width = window.innerWidth // we are looking for person browser width
    console.log(width);
    let size = (height < width) ? height * .8 : width * .8
    let rows = this.state.rows
    let unit = size / rows

    this.setState({
      size,
      rows,
      unit,
    })
  }

  move = () => {

  }

  makeAiMove = () => {

  }

  turingTest = () => {

  }

  recordGame = () => {

  }

  render() {
    let {
      size,
      unit,
      rows
    } = this.state

    return (
      <div>
        <Stage
          width={size}
          height={size}
        >
          <Board
            unit={unit}
            rows={rows}
            size={size}
          />
          {/* <Squers/> */}
        </Stage>
      </div>
    )
  }
}

export default TicTacToe

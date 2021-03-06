import React from 'react';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      board: new Array(9).fill(''),
      turn:'X',
      status:'',
      update:1,
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(`Render ${this.state.update}`);
    console.log(nextState.update);
    if(nextState.update === 1) {
      return true;
    }
    else {
      return false;
    }
  }
  reset=()=>{
    if(this.state.status){
      console.log('reset');
      console.log(this.state);
      this.setState({
        update:0
      });
      this.setState({
        board: new Array(9).fill(''),
        turn:'X',
        status:'',
      });
      this.setState({
        update:1
      });
      console.log(this.state);
    }
  }
  checkDraw=()=>{
    console.log('check draw');
    const board=this.state.board;
    if(!this.state.status)
    {
      let flag=1;
      for(let i=0;i<9;i++)
      {
        if(board[i]==='')
        {
          flag=0;
          break;
        }
      }
      if(flag)
      {
        this.setState({
          status:'draw'
        })
      }
    }
  }
  checkStatus=()=>{
    console.log('check');
    let board=this.state.board;
    //row
    let flag=1;
    for(let i=0;i<9&&flag;i+=3){
      if(board[i]!==''&&(board[i]===board[i+1])&&(board[i+1]===board[i+2])){
        this.setState({
          status:board[i]
        })
        flag=0;
        break;
      }
    }
    //column
    for(let i=0;i<3&&flag;i++){
      if(board[i]!==''&&(board[i]===board[i+3])&&(board[i+3]===board[i+6])){
        this.setState({
          status:board[i]
        })
        flag=0;
        break;
      }
    }
    //diagonal
    if(board[4]!==''&&(board[0]===board[4])&&(board[4]===board[8])&&flag){
      this.setState({
        status:board[4]
      })
      flag=0;
    }
    if(board[4]!==''&&(board[6]===board[4])&&(board[4]===board[2])&&flag){
      this.setState({
        status:board[4]
      })
      flag=0;
    }
  }
  makeMove=(i)=>{
    this.reset();
    console.log(this.state);
    console.log(i);
    let {board,turn}=this.state;
    if(board[i]===''&&!this.state.status)
    {  board[i]=turn;
      if(turn==='X')
      {
        this.setState({
          turn:'O'
        });
      }
      else
      {
        this.setState({
          turn:'X'
        });
      }
      this.setState({
        board:board
      })
    }
    this.checkStatus();
    this.checkDraw();
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board board={this.state.board} 
          turn={this.state.turn} 
          fun={this.makeMove}/>
        </div>
        <div className="game-info">
          <div>Winner : {this.state.status}</div>
        </div>
      </div>
    );
  }
}

export default Game;

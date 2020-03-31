import React from 'react';
import Square from './square';

class Board extends React.Component {
  renderSquare(i) {
    return <Square text={this.props.board[i]}
     turn={this.props.turn} 
     fun={this.props.fun} 
     ind={i}/>;
  }
  renderBoard() {
    let grid=[];
    for(let i=0;i<3;i++){
      let row=[];
      for(let j=0;j<3;j++){
        row.push(this.renderSquare(3*i+j));
      }
      grid.push(<div className="board-row">{row}</div>);
    }
    return grid;
  }
  render() {
    const status = 'Next player: '+ this.props.turn;

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderBoard()}
      </div>
      
    );
  }
}

export default Board;

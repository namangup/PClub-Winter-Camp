import React from 'react';

class Square extends React.Component {
  handleClick=()=>{
    this.props.fun(this.props.ind)
  }
  render() {
    return <button className="square" onClick={this.handleClick}>
      {this.props.text}
      </button>;
  }
}
export default Square;

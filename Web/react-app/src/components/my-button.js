import React from 'react';
class MyButton extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            count:props.num,
            a:props.index
        }
    }
    increaseCount=()=>{
        const currentCount = this.state.count;
        this.setState({
            count:currentCount*1e10
        });
    }
    render(){
        return (
            <button onClick={this.increaseCount}>Click Me {this.state.count} {this.state.a} </button>
        )
    }
}
export default MyButton;
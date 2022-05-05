import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Parent extends React.PureComponent{
  state={
    name:{
      count:0
    }
  }
  handle=()=>{
    const obi={...this.state.name,count:Math.floor(Math.random()*3)}
    this.setState(()=>{
      return {
        name:obi
      }
    })
  }
    render(){
      return <div>
        <button onClick={this.handle}>点我</button>
        <Child namee={this.state.name.count}/>
      </div>
    }
}

class Child extends React.PureComponent{
  render(){
    console.log("hhh")
    return <h1>{this.props.namee}</h1>
  }
}

ReactDOM.render(<Parent/>,document.getElementById('root'))

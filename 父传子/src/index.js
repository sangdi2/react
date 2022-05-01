import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Parent extends React.Component{
  state={
    name:'儿子'
  }
    render(){
      return <div>
        我是父组件
        <Child name={this.state.name}/>
      </div>
    }
}

const Child=(props)=>{
  return <div>我是子组件:{props.name}</div>
}

ReactDOM.render(<Parent/>,document.getElementById('root'))

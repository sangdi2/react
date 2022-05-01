import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Parent extends React.Component{
  state={
    count:''
  }
  getMessage=(data)=>{
     console.log(data)
     this.setState({
       count:data
     })
  }
    render(){
      return <div>
        我是父组件{this.state.count}
        <Child name={this.getMessage}/>
      </div>
    }
}

class Child extends React.Component{
  state={
    thing:'刷抖音'
  }
  click=()=>{
    this.props.name(this.state.thing)
  }
  render(){
    return <button onClick={this.click}>我是子组件</button>
  }
}

ReactDOM.render(<Parent/>,document.getElementById('root'))

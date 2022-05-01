import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Parent extends React.Component{
  state={
    count:0
  }
  getMessage=()=>{
     
     this.setState({
       count:this.state.count+1
     })
  }
    render(){
      return <div>
        <H count={this.state.count}/>
        <Button message={this.getMessage}/>
        
      </div>

    }
}

const H=(props)=>{
  return <h1>count的值为{props.count}</h1>
}

const Button=(props)=>{
  return <button onClick={()=>props.message()}>+1</button>
}

ReactDOM.render(<Parent/>,document.getElementById('root'))

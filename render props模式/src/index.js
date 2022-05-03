import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
/* 
  Context
*/



class App extends React.Component {
  render() {
    return (
     <div>
       <h1>我是一个组件</h1>
       <Chidrenn>{(mouse)=>{
         return <p>{mouse.x}  {mouse.y}</p>
       }}</Chidrenn>
     </div>
    )
  }
}

class Chidrenn extends React.Component {
  state={
    x:0,
    y:0
  }
  move=(e)=>{
    this.setState({
      x:e.clientX,
      y:e.clientY
    })
  }
  componentDidMount(){
    window.addEventListener('mousemove',this.move)
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove',this.move)
  }
  render() {
    return this.props.children(this.state)
  }
}




ReactDOM.render(<App/>, document.getElementById('root'))

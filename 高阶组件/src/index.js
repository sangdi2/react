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
       <Coom></Coom>
     </div>
    )
  }
}

function withChidrenn(Wrap){
   class Mouse extends React.Component{
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
     render(){
       return <Wrap {...this.state}></Wrap>
     }
   }
   return Mouse
}

const Cat=(props)=>{
  return <p>{props.x} {props.y}</p>
}

const Coom =withChidrenn(Cat)


ReactDOM.render(<App/>, document.getElementById('root'))

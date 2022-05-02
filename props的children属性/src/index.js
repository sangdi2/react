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
       <h2>{this.props.children}</h2>
     </div>
    )
  }
}




ReactDOM.render(<App>你好</App>, document.getElementById('root'))

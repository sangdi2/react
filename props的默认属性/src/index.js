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
       <h2>{this.props.page}</h2>
     </div>
    )
  }
}
App.defaultProps={
  page:10
}





ReactDOM.render(<App page={20}></App>, document.getElementById('root'))

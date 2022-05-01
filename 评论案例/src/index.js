import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './index.css'

class Adp extends React.Component {
  state={
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ],
    username:'',
    content:'',
    
  }
  showContent=()=>{
     if (this.state.comments.length===0){
       return (<div className="no-comment">暂无评论，快去评论吧~</div>)
     }else{
       return this.state.comments.map(item=>(
        <ul >
        <li key={item.id}>
          <h3>评论人：{item.name}</h3>
          <p>评论内容：{item.content}</p>
        </li>
      </ul>
  ))
     }
  }
  bindForm=(e)=>{
     const {name,value}=e.target
     this.setState({
       [name]:value
     })
  }
  fabiao=()=>{
    const {username,content}=this.state
    if(username===""){
      return alert('请输入评论人')
    }else if(content===""){
      return alert('请输入评论内容')
    }else {
      const newlist=[{
        id:Math.random(),
        name:username,
        content:content
      },...this.state.comments]
      this.setState({
        comments:newlist,
        username:'',
        content:''
      })
    }
    
    
  }
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" value={this.state.username} name="username" onChange={this.bindForm}/>
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.content}
            name="content"
            onChange={this.bindForm}
          />
          <br />
          <button onClick={this.fabiao}>发表评论</button>
        </div>
         {this.showContent()}
        
        
        
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<Adp />, document.getElementById('root'))

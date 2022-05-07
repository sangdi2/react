import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';

// import Hi from './类组件';
const App =()=>{
    return <p>页面一的内容</p>
}

const First=()=>{
    return <p>我是first内容</p>
}

const Parentt =()=>{
     
     return <Router>
         <div>
             <Link to="/first">父组件</Link>
             <Route path="/first" component={App}/>
             <Route path="/" component={First}/>
         </div>
     </Router>
}


ReactDOM.render(<Parentt/>,document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';

// import Hi from './类组件';
class App extends React.Component{
    handle=()=>{
        this.props.history.push
        ('/home')
    }
    render(){
        return <button onClick={this.handle}>哈哈哈哈哈</button>
    }
        
    
}



class Parentt extends React.Component{
     
     render(){
        return <Router>
        <div>
            <Link to="/first">去往appy页面</Link>
            <Route path="/first" component={App}/>
            <Route path="/home" component={Homee}/>
        </div>
      </Router>
     }
     
}

const Homee=()=>{
    return <div>家园</div>
}


ReactDOM.render(<Parentt/>,document.getElementById('root'))
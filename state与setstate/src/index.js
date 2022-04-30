import React from 'react';
import ReactDOM from 'react-dom';

// import Hi from './类组件';

class Hello extends React.Component{
    state=
    {
        count:0
    }
    back=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div>
            <h1>count的值是：{this.state.count}</h1>
            <button onClick={this.back}>+1</button>
        </div>
    }
}


ReactDOM.render(<Hello/>,document.getElementById('root'))
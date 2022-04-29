import React from "react";

class Hi extends React.Component{
    back(){
        console.log('hhh')
    }
    render(){
        return <div onClick={this.back}>hi</div>
    }
}

export default Hi
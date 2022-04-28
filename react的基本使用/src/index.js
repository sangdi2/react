import React from 'react';
import ReactDOM from 'react-dom';


const isloading=true
const titlee=()=>{
 if(isloading){
     return <div>loading...</div>
 }else{
     return <div>加载完成</div>
 }
}

const title=<h1>
    {titlee()}
</h1>

ReactDOM.render(title,document.getElementById('root'))
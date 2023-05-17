import React,{Component} from 'react';
import "./SignIn.css";
import axios from 'axios';

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = { 
            username : null,
            password :null,
            loginFail:false
        }
    }

    login=()=>{
        console.log(this.state.username+this.state.password)
        // localStorage.setItem("user",this.state.username);
        // window.location.reload();
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:8080/login', { username:this.state.username, password:this.state.password })
        .then(response => {
        console.log(response.data);
        localStorage.setItem("user",this.state.username);
        window.location.reload();
    })
    .catch(error => {
        this.setState({loginFail:true})
    });
    }

    render(){
        return(
            <div>
                <input  type="text" onChange={(event)=>{ this.state.username = event.currentTarget.value;}} placeholder='Username'/>
                <input  type="password" onChange={(event)=>{ this.state.password = event.currentTarget.value;}} placeholder='Password'/>
                <button  onClick={this.login}>Log In</button>
                {this.state.loginFail? <div className='errorMsg'>Wrong username or password, please try again.</div>: null}
            </div>
         );
    }
}
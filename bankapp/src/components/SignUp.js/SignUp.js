import React,{Component} from 'react';
import axios from 'axios';


export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = { 
            username : null,
            password :null,
            balance: 0
        }
    }

    signUp=()=>{
        console.log(this.state.username+this.state.password+this.state.balance)
        localStorage.setItem("user",this.state.username);
        window.location.reload();
    //     axios.defaults.withCredentials = true;
    //     axios.post('http://localhost:8080/signup', { username:this.state.username, password:this.state.username,balance:this.state.balance })
    //     .then(response => {
        
    //     console.log(response.data);
    //     localStorage.setItem("user",this.state.username);
    //     window.location.reload();
    // })
    // .catch(error => {
    //     console.log(error)
    // });
    }

    render(){
        return(
            <div>
                <input  type="text" onChange={(event)=>{ this.state.username = event.currentTarget.value;}} placeholder='Username'/>
                <input  type="password" onChange={(event)=>{ this.state.password = event.currentTarget.value;}} placeholder='Password'/>
                <input  type="number" onChange={(event)=>{ this.state.balance= event.currentTarget.value;}} placeholder='Balance'/>
                <button onClick={this.signUp}>Sign up</button>

            
            </div>
         );
    }
}
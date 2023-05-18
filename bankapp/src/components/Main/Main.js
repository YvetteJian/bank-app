import React,{Component} from 'react';
import axios from "axios";


export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            balance: null,
            inputDepositValue:"",
            inputWithdrawValue:""
        }
    }

    logout = ()=>{ 
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8080/logout')
        .then(response => {
        console.log(response.data);
        localStorage.removeItem('user')
        window.location.reload();
    })
    .catch(error => {
        console.log(error)
    });
    }

    getDeposit=()=>{
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8080/check')
            .then(response => {
                console.log(response.data);
                this.setState({ 
                    balance:response.data.balance,
                })
            })
            .catch(error => {
                console.log(error)
            });
    }

    withdraw = () => {
        axios.post('http://localhost:8080/withdraw', {
            username: localStorage.getItem("user"),
            amount: this.state.inputWithdrawValue
        })
            .then((response) => {
                console.log(response);
                this.setState({ 
                    balance:response.data.balance,
                    inputWithdrawValue:""
                    });
                alert("Withdraw successfully!")
            })
            .catch((error) => {
                alert(error.response.data)
                console.log(this.state.username+this.state.inputWithdrawValue);
            });
    }

    deposit = () => {
        axios.post('http://localhost:8080/deposit', {
            username: localStorage.getItem("user"),
            amount: this.state.inputDepositValue
        })
            .then((response) => {
                console.log(response);
                this.setState({ 
                    balance:response.data.balance,
                    inputDepositValue:"" });
                alert("Deposit successfully!")
            })
            .catch((error) => {
                alert(error.response.data)
                console.log(this.state.username+this.state.inputDepositValue);
            });
    }



    render(){
        return(
            <div>
               hello {localStorage.getItem("user")}
               <button onClick={this.logout}>Log out</button>
                <div>{this.state.balance}</div>
                <button onClick={this.getDeposit}>Check your balance!</button>

                <input  type="number" value={this.state.inputWithdrawValue} onChange={(event)=>{ this.setState({inputWithdrawValue: event.currentTarget.value});}} placeholder='Amount'/>
                <button  onClick={this.withdraw}>Withdraw</button>

                <input  type="number" value={this.state.inputDepositValue} onChange={(event)=>{this.setState({inputDepositValue: event.currentTarget.value})}} placeholder='Amount'/>
                <button  onClick={this.deposit}>Deposit</button>
            </div>
         );
    }
}

// TODO
// button -> balance
// text field + button -> withdraw (Deduction)
//   - update balance
// text field + button -> deposit (Add)
//   - update balance
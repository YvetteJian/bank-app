import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, message } from 'antd';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: null,
            inputDepositValue: '',
            inputWithdrawValue: '',
        };
    }

    logout = () => {
        axios.defaults.withCredentials = true;
        axios
            .get('http://localhost:8080/logout')
            .then((response) => {
                console.log(response.data);
                localStorage.removeItem('user');
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    getDeposit = () => {
        axios.defaults.withCredentials = true;
        axios
            .get('http://localhost:8080/check')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    balance: response.data.balance,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    withdraw = () => {
        axios
            .post('http://localhost:8080/withdraw', {
                username: localStorage.getItem('user'),
                amount: this.state.inputWithdrawValue,
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    balance: response.data.balance,
                    inputWithdrawValue: '',
                });
                message.success('Withdraw successfully!');
            })
            .catch((error) => {
                message.error(error.response.data);
                console.log(this.state.username + this.state.inputWithdrawValue);
            });
    };

    deposit = () => {
        axios
            .post('http://localhost:8080/deposit', {
                username: localStorage.getItem('user'),
                amount: this.state.inputDepositValue,
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    balance: response.data.balance,
                    inputDepositValue: '',
                });
                message.success('Deposit successfully!');
            })
            .catch((error) => {
                message.error(error.response.data);
                console.log(this.state.username + this.state.inputDepositValue);
            });
    };

    render() {
        return (
            <div className="form-container">

                <div>Hello {localStorage.getItem('user')}</div>
                <Button type="primary" onClick={this.logout}>
                    Log out
                </Button>

                <div className="check-balance">
                    <div>{this.state.balance}</div>
                    <Button onClick={this.getDeposit}>Check your balance!</Button>
                </div>

                <div className="withdraw-balance">
                    <Input
                        type="number"
                        value={this.state.inputWithdrawValue}
                        onChange={(event) => {
                            this.setState({ inputWithdrawValue: event.target.value });
                        }}
                        placeholder="Amount"
                    />
                    <Button onClick={this.withdraw}>Withdraw</Button>
                </div>

                <div className="deposit-balance">
                    <Input
                        type="number"
                        value={this.state.inputDepositValue}
                        onChange={(event) => {
                            this.setState({ inputDepositValue: event.target.value });
                        }}
                        placeholder="Amount"
                    />
                    <Button onClick={this.deposit}>Deposit</Button>
                </div>
            </div>
        );
    }
}

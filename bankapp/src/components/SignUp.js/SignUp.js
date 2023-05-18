import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input, Button, Alert } from 'antd';
import {DollarOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            balance: 0,
            errorMsg: null,
        };
    }

    signUp = () => {
        console.log(this.state.username + this.state.password + this.state.balance);
        axios.defaults.withCredentials = true;
        axios
            .post('http://localhost:8080/register', {
                username: this.state.username,
                password: this.state.password,
                balance: this.state.balance,
            })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('user', this.state.username);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                this.setState({ errorMsg: error.response.data });
            });
    };

    render() {
        return (
            <div className="form-container">
                <Form>
                    <Form.Item label="Username">
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type="text"
                            onChange={(event) => {
                                this.setState({ username: event.target.value });
                            }}
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            onChange={(event) => {
                                this.setState({ password: event.target.value });
                            }}
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item label="Balance">
                        <Input
                            prefix={<DollarOutlined className="site-form-item-icon" />}
                            type="number"
                            onChange={(event) => {
                                this.setState({ balance: event.target.value });
                            }}
                            placeholder="Initial Balance"
                        />
                    </Form.Item>

                    {this.state.errorMsg && (
                        <Alert type="error" message={this.state.errorMsg} className="errorMsg" />
                    )}

                    <br/>

                    <Form.Item>
                        <Button type="primary" onClick={this.signUp}>
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
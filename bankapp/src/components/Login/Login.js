import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './Login.css';
import money from '../../image/money.png'

const Login = (props) => {
    const [isLogin, setIsLogin] = useState(true);

    const changeLogin = () => {
        setIsLogin(!isLogin);
    }

    return(
        <div>
            <div className='loginPage_main'>
                <div>
                    <img src={money} alt="Money Bank Logo" width="300px" />
                </div>
                <div>
                    <h1>Money Bank</h1>
                </div>
                <div>
                    <div >
                        <div className='loginPage_component'>
                            { isLogin ?
                                <SignIn/>:
                                <SignUp/>
                            }
                        </div>
                    </div>
                    <div className='signupOption'>
                        {
                            isLogin ?
                                <div>
                                    Don't have an account? <span onClick={changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign up</span>
                                </div> :
                                <div >
                                    Have an account? <span onClick={changeLogin}  style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign in</span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;

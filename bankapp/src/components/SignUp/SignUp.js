import React, { useState } from 'react';

export default function SignUp() {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [balance, setBalance] = useState(0);

    const signUp = () => {
        console.log(username+password+balance);
        localStorage.setItem("user", username);
        window.location.reload();
    }

    return(
        <div>
            <input type="text" onChange={(event) => setUsername(event.currentTarget.value)} placeholder='Username'/>
            <input type="password" onChange={(event) => setPassword(event.currentTarget.value)} placeholder='Password'/>
            <input type="number" onChange={(event) => setBalance(event.currentTarget.value)} placeholder='Balance'/>
            <button onClick={signUp}>Sign up</button>
        </div>
    );
}

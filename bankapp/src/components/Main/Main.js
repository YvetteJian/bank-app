import React, { useState, useEffect } from 'react';

export default function Main() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem('user');
        setUser(userFromLocalStorage);
    }, []);

    const logout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <div>
            Hello {user}
            <br/>
            <button onClick={logout}>Log out</button>
        </div>
    );
}


// TODO
// button -> balance
// text field + button -> withdraw (Deduction)
//   - update balance
// text field + button -> deposit (Add)
//   - update balance

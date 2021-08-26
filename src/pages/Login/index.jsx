import React, { useState, useEffect } from 'react';

import { loginUser } from '../../api/login';


const inputOnChangeBuilder = inputSetter => (e) => {
    const value = e && e.target && e.target.value;

    if (value) inputSetter(value);
};

const USERNAME_INPUT_ID = 'username-input';
const PASSWORD_INPUT_ID = 'password-input';

const Login = (props) => {
    const { setToken } = props;

    const [userNameInputValue, setUserNameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [requestedLogin, setRequestedLogin] = useState(false);

    useEffect(() => {
        const requestLogin = async () => {
            if (requestedLogin) {
                const requestBody = {
                    username: userNameInputValue,
                    password: passwordInputValue,
                };

                const { data } = await loginUser(requestBody);
                setToken(data);
            }
        };
        
        requestLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [requestedLogin]);

    const onLoginClick = () => setRequestedLogin(true);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Log in</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label htmlFor={USERNAME_INPUT_ID}>Username</label>
                <input id={USERNAME_INPUT_ID} onChange={inputOnChangeBuilder(setUserNameInputValue)} value={userNameInputValue} placeholder="Username" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label htmlFor={PASSWORD_INPUT_ID}>Password</label>
                <input id={PASSWORD_INPUT_ID} onChange={inputOnChangeBuilder(setPasswordInputValue)} value={passwordInputValue} type="password" placeholder="Password" />
            </div>

            <button onClick={onLoginClick}>Log In Now</button>
        </div>
    );
};

export default Login;

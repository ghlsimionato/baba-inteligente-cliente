import React, { useState } from 'react';
import axios from 'axios';

import SockJsClient from 'react-stomp';


const inputOnChangeBuilder = inputSetter => (e) => {
    const value = e && e.target && e.target.value;

    if (value) inputSetter(value);
};
// ["access_token", "3gn11Ft0Me8lkqqW2/5uFQ="]

const requestUrl = 'http://localhost:8080/authenticate';

const USERNAME_INPUT_ID = 'username-input';
const PASSWORD_INPUT_ID = 'password-input';

const Login = () => {
    const [userNameInputValue, setUserNameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [token, setToken] = useState(null);
    const [clicked, setClicked] = useState(false);

    const onLoginClick = () => {
        const requestBody = {
            username: userNameInputValue,
            password: passwordInputValue,
        };

        axios.post(requestUrl, requestBody)
            .then((res) => {
                const { data } = res;
                setToken(data);
            })
            .catch(err => console.log(err));
    };

    const onMessage = () => {
        console.log('message received');
    };

    const onConnect = () => {
        console.log('Connection established');
    };

    const requestCrying = () => {
        setClicked(true);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label htmlFor={USERNAME_INPUT_ID}>Username</label>
                <input id={USERNAME_INPUT_ID} onChange={inputOnChangeBuilder(setUserNameInputValue)} value={userNameInputValue} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <label htmlFor={PASSWORD_INPUT_ID}>Password</label>
                <input id={PASSWORD_INPUT_ID} onChange={inputOnChangeBuilder(setPasswordInputValue)} value={passwordInputValue} type="password" />
            </div>

            <button onClick={onLoginClick}>Log In Now</button>

            {token && <button onClick={requestCrying}>Connect</button>}
            {clicked && <SockJsClient url="http://localhost:8080/crying/websocket" onConnect={onConnect} onMessage={onMessage} topics={['/CRYING_TOPIC/CRYING_GROUP']} />}
        </div>
    );
};

export default Login;

import React, { useState, useEffect, useContext } from 'react';

import { TokenContext } from '../../index.jsx';

import { loginUser } from '../../api/login';

const inputOnChangeBuilder = inputSetter => (e) => {
    const value = e && e.target && e.target.value;

    if (value) inputSetter(value);
};

const USERNAME_INPUT_ID = 'username-input';
const PASSWORD_INPUT_ID = 'password-input';

const Login = (props) => {
    // const { setToken } = props;
    const { setToken } = useContext(TokenContext);

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
        <div className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
            <label htmlFor={USERNAME_INPUT_ID} className="sr-only">Username</label>
            <input id={USERNAME_INPUT_ID} type="text" className="form-control" placeholder="Username" onChange={inputOnChangeBuilder(setUserNameInputValue)} value={userNameInputValue} />
            <label htmlFor={PASSWORD_INPUT_ID} className="sr-only">Password</label>
            <input id={PASSWORD_INPUT_ID} type="password" className="form-control" placeholder="Password" onChange={inputOnChangeBuilder(setPasswordInputValue)} value={passwordInputValue} />
            <button className="btn btn-lg btn-primary btn-block" onClick={onLoginClick} type="primary">Sign in</button>
        </div>
    );
};

export default Login;

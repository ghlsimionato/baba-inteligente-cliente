import React, { useState } from 'react';

import { SessionContext } from '../../index.jsx';

import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';



const Container = () => {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const value = { token, setToken, username, setUsername };

    console.log(`TOKEN = ${token}`);

    return (
        <SessionContext.Provider value={value}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {token ? <Dashboard /> : <Login />}
            </div>
        </SessionContext.Provider>
    );
};

export default Container;

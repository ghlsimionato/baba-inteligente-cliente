import React, { useState } from 'react';

import { TokenContext } from '../../index.jsx';

import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard';



const Container = () => {
    const [token, setToken] = useState(null);
    const value = { token, setToken };

    console.log(`TOKEN = ${token}`);

    return (
        <TokenContext.Provider value={value}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {token ? <Dashboard /> : <Login />}
            </div>
        </TokenContext.Provider>
    );
};

export default Container;

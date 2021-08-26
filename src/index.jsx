import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

export const SessionContext = React.createContext({
    token: null,
    setToken: () => {},
    username: null,
    setUsername: () => {},
});

ReactDOM.render(<Container />, document.getElementById('root'));

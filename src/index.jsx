import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

export const TokenContext = React.createContext({
    token: null,
    setToken: () => {},
});

ReactDOM.render(<TokenContext.Provider><Container /></TokenContext.Provider>, document.getElementById('root'));

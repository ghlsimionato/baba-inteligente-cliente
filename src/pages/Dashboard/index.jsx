import React, { useState } from 'react';
import SockJsClient from 'react-stomp';


const Dashboard = (props) => {
    const { token } = props;

    const [clicked, setClicked] = useState(false);

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
            <button onClick={requestCrying}>Connect</button>
            {clicked && <SockJsClient url="http://localhost:8080/ws-crying" debug onConnect={onConnect} onMessage={onMessage} topics={['/CRYING_TOPIC/CRYING_GROUP']} />}
        </div>
    );
};

export default Dashboard;

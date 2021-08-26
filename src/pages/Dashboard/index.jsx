import React, { useEffect, useState, useContext } from 'react';
import SockJsClient from 'react-stomp';

import { getBabyData } from '../../api/baby';
import { SessionContext } from '../../index.jsx';

import RegisterBaby from './components/RegisterBaby';
import SoundLevelDisplay from './components/SoundLevelDisplay';
import TemperatureDisplay from './components/TemperatureDisplay';

// constants
const webSocketUrl = 'http://localhost:8080/websocket';

const TEMPERATURE_TOPIC_PATH = '/TEMPERATURE_TOPIC/TEMPERATURE_GROUP';
const CRYING_TOPIC_PATH = '/CRYING_TOPIC/CRYING_GROUP';

const CRYING_TYPE = 'crying';
const TEMPERATURE_TYPE = 'temperature';

const Dashboard = () => {
    const { token } = useContext(SessionContext);
    const [babyData, setBabyData] = useState(null);

    const [showAlert, setShowAlert] = useState(false);

    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    const [temperatureLevel, setTemperatureLevel] = useState(null);
    const [soundLevel, setSoundLevel] = useState(null);

    useEffect(() => {
        const fetchBabyData = async () => {
            const { data } = await getBabyData(token);

            if (!data) {
                console.log('no baby found');
            } else {
                setBabyData(data);
            }
        };

        fetchBabyData();
    }, [token]);

    useEffect(() => {
        if (temperatureLevel > 37) {
            handleShowAlert();
        }
    }, [temperatureLevel, soundLevel]);

    const onMessage = (message) => {
        switch(message.type) {
            case CRYING_TYPE:
                setSoundLevel(message.value);
                break;
            case TEMPERATURE_TYPE:
                setTemperatureLevel(message.value);
                break;
            default:
        }
    };

    const onConnect = () => {
        console.log('Connection established');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {babyData ? (
                <>
                    <SockJsClient
                        url={webSocketUrl}
                        debug
                        onConnect={onConnect}
                        onMessage={onMessage}
                        topics={[TEMPERATURE_TOPIC_PATH, CRYING_TOPIC_PATH]}
                    />
                    {temperatureLevel && <TemperatureDisplay temperatureLevel={temperatureLevel} />}
                    {soundLevel && <SoundLevelDisplay  soundLevel={soundLevel} />}
                </>
                ) : (
                    <RegisterBaby />
                )
            }
        </div>
    );
};

export default Dashboard;

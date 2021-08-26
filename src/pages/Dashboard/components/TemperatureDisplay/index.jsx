import React from 'react';
import { FaThermometerFull, FaThermometerHalf, FaThermometerEmpty } from 'react-icons/fa';

const getTemperatureIcon = (temperature) => {
    if (temperature > 37) {
        return <FaThermometerFull style={{ marginLeft: '0.5em', color: 'red' }} />;
    }

    if (temperature < 35) {
        return <FaThermometerEmpty style={{ marginLeft: '0.5em', color: 'blue' }} />;
    }

    return <FaThermometerHalf style={{ marginLeft: '0.5em', color: 'green' }} />
};

const TemperatureDisplay = (props) => {
    const { temperatureLevel } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span>Baby's current temperature: </span>
            <div style={{ marginLeft: '0.5em' }}>{`${temperatureLevel}°C`}</div>
            {getTemperatureIcon(temperatureLevel)}
        </div>
    );
};

export default TemperatureDisplay;

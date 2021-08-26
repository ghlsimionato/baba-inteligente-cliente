import React from 'react';

const SoundLevelDisplay = (props) => {
    const { soundLevel } = props;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <span>Baby's current sound level: </span>
            <div>{soundLevel}</div>
        </div>
    );
};

export default SoundLevelDisplay;

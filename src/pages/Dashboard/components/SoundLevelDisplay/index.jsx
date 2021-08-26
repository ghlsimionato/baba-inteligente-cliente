import React from 'react';

const SoundLevelDisplay = (props) => {
    const { soundLevel } = props;

    return (
        <div>
            <span>Baby's current sound level: </span>
            <div>{soundLevel}</div>
        </div>
    );
};

export default SoundLevelDisplay;

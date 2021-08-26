import React from 'react';

const buildAllergies = allergies => allergies.map(allergy => (
    <div key={allergy.id}>
        
    </div>
)
);

const BabyData = ({ name, age, gender, birthDate, allergies }) => (
    <div>
        <div>
            <span>{`Name: ${name}`}</span>
            <span>{`Age: ${age}`}</span>
            <span>{`Gender: ${gender}`}</span>
            <span>{`Birth Date: ${birthDate}`}</span>
            {/* <span>{`Name: ${name}`}</span> */}

        </div>
    </div>
)

export default BabyData;

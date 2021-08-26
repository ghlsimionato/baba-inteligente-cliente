import React from 'react';

const ALLERGY_DISPLAY_MAP = {
    FOOD: 'Food',
    REMEDY: 'Remedy',
    OTHER: 'Other',
}

const buildAllergies = allergies => allergies.map(allergy => (
    <div key={allergy.id} style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
        <span>{`Allergy type: ${ALLERGY_DISPLAY_MAP[allergy.type]}`}</span>
        <span>{`Allergy Description: ${allergy.description}`}</span>
    </div>
)
);

const BabyData = ({ name, age, gender, birthDate, allergies }) => (
    <div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyItems: 'center' }}>
            <span>{`Name: ${name}`}</span>
            <span>{`Age: ${age}`}</span>
            <span>{`Gender: ${gender}`}</span>
            <span>{`Birth Date: ${birthDate}`}</span>
            {buildAllergies(allergies)}
        </div>
    </div>
);

export default BabyData;

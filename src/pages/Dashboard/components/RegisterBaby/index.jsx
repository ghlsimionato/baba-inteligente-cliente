import React, { useEffect, useState, useContext } from 'react';

import { SessionContext } from '../../../../index';

import { registerBaby } from '../../../../api/baby';

const MEDICINE = 'Medicine';
const FOOD = 'Food';
const OTHER = 'Other';

const ALERGIES_MAP = {
    1: MEDICINE,
    2: FOOD,
    3: OTHER,    
};

const dropdownOnChangeBuilder = (stateSetter) => event => {
    const { value } = event.target;
  
    stateSetter({ value });
  };
  
const inputOnChangeBuilder = (stateSetter) => event => {
    const { value } = event.target;

    stateSetter(value);
};

const RegisterBaby = ({ setBabyData }) => {
    const { token, username } = useContext(SessionContext);

    const [gender, setGender] = useState('');
    const [alergyType, setAlergyType] = useState({ value: 1 });
    const [alergyDesc, setAlergyDesc] = useState('');

    const [age, setAge] = useState('');
    const [birthDate, setBirthdate] = useState('');
    const [name, setName] = useState('');

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const saveBaby = async () => {
            if (submitted) {
                const requestBody = {
                    name,
                    gender,
                    age,
                    birthDate,
                    allergies: [
                        { type: alergyType.value, description: alergyDesc },
                    ],
                };

                try {
                    console.log('Request body = ', requestBody);
                    const { data } = await registerBaby({ token, username }, requestBody);
                    console.log('DATA = ', data);
                    setBabyData(data);
                } catch (error) {
                    console.log(error)
                }
            }
        };

        saveBaby();
    }, [submitted]);

    const onClick = () => {
        setSubmitted(true);
    };

    return (
        <div>
            <h1>No baby found, register your baby bellow</h1>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div>
                    <label>Baby gender:  </label>
                    <input type="text" value={gender} onChange={inputOnChangeBuilder(setGender)} />
                </div>

                <div>
                    <label>Baby age:  </label>
                    <input type="number" onChange={inputOnChangeBuilder(setAge)} value={age} />
                </div>

                <div>
                <label>Baby name:  </label>
                    <input type="text" onChange={inputOnChangeBuilder(setName)} value={name} />
                </div>

                <div>
                    <label>Date of Birth:  </label>
                    <input type="text" onChange={inputOnChangeBuilder(setBirthdate)} value={birthDate} />
                </div>

                <div>
                    <label>Alergy Type: </label>
                    <select value={alergyType.value} onChange={dropdownOnChangeBuilder(setAlergyType)}>
                        <option value={1}>{ALERGIES_MAP[1]}</option>
                        <option value={2}>{ALERGIES_MAP[2]}</option>
                        <option value={3}>{ALERGIES_MAP[3]}</option>
                    </select>
                </div>

                <div>
                    <label>Alergy Decription:  </label>
                    <input type="text" onChange={inputOnChangeBuilder(setAlergyDesc)} value={alergyDesc} />
                </div>

                <button type="primary" onClick={onClick}>Save baby</button>
            </div>
        </div>
    );
};

export default RegisterBaby;

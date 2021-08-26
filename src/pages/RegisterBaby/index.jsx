import React, { useState } from 'react';

const MEDICINE = 'medicine';
const FOOD = 'food';
const OTHER = 'other';

const MALE = 'male';
const FEMALE = 'female';

const ALERGIES_MAP = {
    [MEDICINE]: 'Remédio',
    [FOOD]: 'Alimento',
    [OTHER]: 'Outro',    
};

const SEX_MAP = {
    [MALE]: 'Masculino',
    [FEMALE]: 'Feminino',
};

const RegisterBaby = () => {
    const [sex, setSex] = useState(null);
    const [alergies, setAlergies] = useState('');
    const [age, setAge] = useState(null);
    const [birthdate, setBirthdate] = useState('');
    const [name, setName] = useState('');
};

export default RegisterBaby;

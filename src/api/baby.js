import axios from 'axios';

import { buildRequestOptions } from './helpers';

// const getBabyData = (token) => {
//     const endpointUrl = 'http://localhost:8080/baby';
//     const requestOptions = buildRequestOptions(token);

//     return axios.get(endpointUrl, requestOptions);
// };

const getBabyData = () => Promise.resolve({ data: { baby: true } }); 

const registerBaby = (token, babyData) => {
    const endpointUrl = 'http://localhost:8080/baby';
    const requestOptions = buildRequestOptions(token);

    return axios.post(endpointUrl, babyData, requestOptions);
};

export {
    getBabyData,
    registerBaby,
};

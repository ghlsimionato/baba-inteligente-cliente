import axios from 'axios';

import { buildRequestOptions } from './helpers';

const getBabyData = (credentials) => {
    const { token, username } = credentials;

    const endpointUrl = new URL('http://localhost:8080/baby/get');
    endpointUrl.searchParams.append('username', username);
    const requestOptions = buildRequestOptions(token);

    return axios.get(endpointUrl.toString(), requestOptions);
};

const registerBaby = (credentials, babyData) => {
    const { token, username } = credentials;

    const endpointUrl = new URL('http://localhost:8080/baby/save');
    endpointUrl.searchParams.append('username', username);
    const requestOptions = buildRequestOptions(token);

    return axios.post(endpointUrl.toString(), babyData, requestOptions);
};

export {
    getBabyData,
    registerBaby,
};

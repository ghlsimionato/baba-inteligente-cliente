import axios from 'axios';

const loginUser = async (requestBody) => {
    const endpointUrl = 'http://localhost:8080/authenticate';

    return axios.post(endpointUrl, requestBody);
};

export {
    loginUser,
};

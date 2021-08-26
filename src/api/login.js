import axios from 'axios';

const loginUser = async (requestBody) => {
    const endpointUrl = new URL('http://localhost:8080/user/authenticate');

    return axios.post(endpointUrl.toString(), requestBody);
};

export {
    loginUser,
};

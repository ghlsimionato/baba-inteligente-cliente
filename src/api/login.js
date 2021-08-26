import axios from 'axios';

const requestUrl = 'http://localhost:8080/authenticate';

const loginUser = async requestBody => axios.post(requestUrl, requestBody);

export {
    loginUser,
};

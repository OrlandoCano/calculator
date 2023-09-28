import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/calculator/';

const auth = {
    withCredentials: true,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
};

const addition = (data) => {
    return axios.post(API_URL + 'addition', data, auth);
};

const subtraction = (data) => {
    return axios.post(API_URL + 'subtraction', data, auth);
};

const multiplication = (data) => {
    return axios.post(API_URL + 'multiplication', data, auth);
};

const division = (data) => {
    return axios.post(API_URL + 'division', data, auth);
};

const randomString = (data) => {
    return axios.post(API_URL + 'random-string', data, auth);
};

const squareRoot = (data) => {
    return axios.post(API_URL + 'square-root', data, auth);
};

const fetchRecords = (page, size) => {
    return axios.get(API_URL + 'records?page=' + page + '&size=' + size, auth);
};

const deleteRecord = (id) => {
    return axios.delete(API_URL + 'records/' + id, auth);
};

const logout = () => {
    return axios.post(API_URL + 'logout', {}, auth);
};

const ApiService = {
    addition,
    subtraction,
    multiplication,
    division,
    randomString,
    squareRoot,
    fetchRecords,
    deleteRecord,
    logout,
};

export default ApiService;

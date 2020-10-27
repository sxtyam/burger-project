import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-c36e7.firebaseio.com/'
});

export default instance;
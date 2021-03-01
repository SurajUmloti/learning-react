import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learning-react-a5278-default-rtdb.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeplug-de8cf-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;
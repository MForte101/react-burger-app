import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-simple-burger-default-rtdb.firebaseio.com/'
});

export default instance;
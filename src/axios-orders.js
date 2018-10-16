import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-b1f7b.firebaseio.com/'
});

export default instance;

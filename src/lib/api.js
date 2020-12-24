import axios from 'axios';
import axsios from 'axios';

export const getUser = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);

import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // no more hardcoded localhost
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

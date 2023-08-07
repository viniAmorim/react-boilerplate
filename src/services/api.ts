import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.baseUrl || 'https://62d946605d893b27b2e21670.mockapi.io/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

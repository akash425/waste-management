import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api'
});

export const getFarmers = () => api.get('/farmers');
export const getCompanies = () => api.get('/companies');

export default api;

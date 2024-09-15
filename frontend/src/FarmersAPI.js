import api from './api';

const getFarmers = async () => {
  try {
    const response = await api.get('/farmers');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getFarmers };
import axios from 'axios';

// TODO dev-prod-Umgebungsvariable
const apiClient = axios.create({
  baseURL: 'https://limitless-depths-66347.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export default apiClient;

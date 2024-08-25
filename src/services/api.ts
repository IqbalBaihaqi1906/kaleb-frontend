import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Sesuaikan dengan URL backend Anda

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiWithAuth = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/auth/login', { username, password });
  
  return response.data;
};

export const register = async (name: string, username: string, password: string) => {
  const response = await api.post('/auth/register', { name, username, password });
  return response.data;
};

export const getUserInfo = async () => {
  const response = await apiWithAuth.get('/users/user-by-token');
  return response.data;
};
import axios, { Axios } from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const setAuthHeader = () => {
  const token = localStorage.getItem('cuddie-access-token');

  console.log({ token });

  if (!token) return;

  return {
    Authorization: `Bearer ${token}`,
  };
};

const apiRequest: Axios = axios.create({
  baseURL,
  // timeout: 100000,
  headers: {
    ...setAuthHeader(),
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export default apiRequest;

import axios, { Axios } from 'axios';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const setAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('cuddie-loggedin-user') ?? '{}');

  if (!user) return;

  if (!user?.token) return;

  return {
    Authorization: `WB3 ${user.token}`,
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

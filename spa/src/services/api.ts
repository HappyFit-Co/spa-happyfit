import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";


import { logout } from '../contexts/AuthContext';

export function setupApiClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      Authorization: `Bearer ${cookies['@auth.token']}`
    }
  });

  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {
    if (error?.response?.status === 401) {
      if (typeof window !== 'undefined') {
        logout();
      } else {
        return Promise.reject("Erro");
      }
    }
    return Promise.reject(error);
  });

  return api;
}
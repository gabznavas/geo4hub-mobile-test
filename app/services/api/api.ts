import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.60.0.150:3010/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const jwt_data = await AsyncStorage.getItem('jwt_data');
  const token = jwt_data ? JSON.parse(jwt_data).accessToken : null;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export type LoginResponse = {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
};

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/authenticate/login', { email, password });
  console.log(response.status)
  if (response.status !== 200) {
    throw new Error('Falha ao fazer login: ' + response.data);
  }
  AsyncStorage.setItem('jwt_data', JSON.stringify(response.data));
  return response.data;
};

export default api;
import axios from 'axios'


const API = axios.create({ baseURL: 'https://socialmediabackend-e0y8.onrender.com' });

export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);

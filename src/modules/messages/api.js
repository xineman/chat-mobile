import axios from 'services/api';


export const fetchMessages = chatId => () => axios.get('/messages', chatId);

export const logout = () => () => axios.post('/auth/logout');

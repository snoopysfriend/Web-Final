import axios from 'axios' 
const instance = axios.create({ baseURL: 'http://localhost:4000' });

export const getDefaultData = async () => { 
    const { data : msg } = await instance.get('/api/syllabus'); 
    console.log('axios', msg);
    return msg;
}



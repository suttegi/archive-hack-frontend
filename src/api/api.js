import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const uploadImage = (image) => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    return api.post('/vision/analyze', formData);
};

export const downloadRestoredImage = () => {
    return api.get('/vision/download', { responseType: 'blob' });
};
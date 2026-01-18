import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getTypes = () => httpClient.get('/petTypes');
export const getPets = (petTypeId) => {
    if (petTypeId) {
        return httpClient.get(`/pets?petTypeId=${petTypeId}`);
    }
    return httpClient.get('/pets');
};
export const createPet = (values) => httpClient.post('/pets', values);
export const deletePet = (id) => httpClient.delete(`/pets/${id}`);
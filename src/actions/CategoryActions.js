
import HttpClient from '../services/HttpClient';

export const registerCategory = async (item) => {
    return new Promise( (resolve, eject) => {
        HttpClient.post("/api/category", item)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        })
    });
}
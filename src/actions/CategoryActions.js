
import HttpClient from '../services/HttpClient';

export const getCategoryById = (id) => {
    return new Promise( (resolve, eject) => {
        HttpClient.get(`/api/category/${id}`)
        .then(response => {
            resolve(response)
        })
        .catch( error => {
            resolve(error.response);
        });
    });
}

export const getCategories = () => {
    return new Promise( (resolve, eject) => {
        HttpClient.get("/api/Category")
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        });
    });
}

export const registerCategory = (item) => {
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

export const updateCategories = (item, id) => {
    return new Promise( (resolve, eject) => {
        HttpClient.put(`/api/category/update/${id}`, item)
        .then(response => {
            resolve(response)
        })
        .catch( error => {
            resolve(error.response);
        });
    });
}


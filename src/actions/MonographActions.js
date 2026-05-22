import HttpClient from '../services/HttpClient';

export const getMonographByIdAction = (id) => {
    return new Promise( (resolve, eject) => {
        HttpClient.get(`/api/monograph/${id}`)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            resolve(error.response);
        })
    });
}

export const registerMonographAction = async (item) => {
    return(
        new Promise( (resolve,eject) => {
            HttpClient.post("/api/monograph", item)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error.response);
            })
        })
    )
}


export const getMonographsListAction = (requestParams) => {
    return new Promise((resolve, eject) => {
            HttpClient.get(`/api/monograph?pageIndex=${requestParams.pageIndex}&pageSize=${requestParams.pageSize}&keyword=${requestParams.keyword}&search=${requestParams.search}`)
            .then( response => {
                resolve(response);
            })
            .catch(error=>{
                resolve(error.response);
            })
     })   
}

export const updateMonographAction = (item, id) => {
    return new Promise( (resolve, eject) => {
        HttpClient.put(`/api/monograph/${id}`, item)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
           resolve(error.response);
        })
    })
}

export const deleteMonographAction= (id) => {
    return new Promise((resolve, eject) => {
        HttpClient.delete(`/api/monograph/${id}`)
        .then(response => {
            resolve(response);
        })
        .catch(error =>{
            resolve(error.response);
        })
    })
}


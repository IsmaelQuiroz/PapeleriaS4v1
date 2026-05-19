import HttpClient from '../services/HttpClient';

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
                resolve(response)
            })
            .catch(error=>{
                resolve(error.response);
            })
        })
    
}


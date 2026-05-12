import HttpClient from '../services/HttpClient';

export const registerMonograph = async (monograph) => {
    return(
        new Promise( (resolve,eject) => {
            HttpClient.post("/api/monograph", monograph)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                resolve(error.response);
            })
        })
    )
}


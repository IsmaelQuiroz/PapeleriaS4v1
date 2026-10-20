import React from "react";

// const claimsInicial = [
//     {
//         nombre : ""
//     }
// ]

const AutenticacionContext = React.createContext(
    {
        claims : [],
        actualizar: () => {}
    });

    export default AutenticacionContext;

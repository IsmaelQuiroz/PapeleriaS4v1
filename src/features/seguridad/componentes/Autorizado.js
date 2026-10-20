import { useContext, useEffect, useState } from "react";
import AutenticacionContext from "../utilidades/AutenticacionContext";

export default function Autorizado({contentAutorizado, contentNoAutorizado, claimsPermitidos}){

    const [autorizado, setAutorizado] = useState(false);

    //Obtener el listado de claims del usuario
    const {claims} = useContext(AutenticacionContext);

    useEffect(() => {
        
        if(claimsPermitidos){ //Si tienemos un listado de Claims que ha enviado el cliente
            for(let i = 0; i < claimsPermitidos.length; i++){
                const claim = claimsPermitidos[i];
                const indiceClaim = claims.findIndex(c => c.nombre === claim);
                if(indiceClaim > -1){
                    setAutorizado(true);
                    return;
                }
            }

            setAutorizado(false);
        } else { //Si el cliente no envio un listado de Claims
            setAutorizado(claims.length > 0);
        }
       
        //setAutorizado(claims.length > 0);

    }, [claims, claimsPermitidos])

    return(
        <>
            {autorizado ? contentAutorizado : contentNoAutorizado}
        </>
    )

}
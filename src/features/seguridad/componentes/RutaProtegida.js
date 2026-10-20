import Autorizado from "./Autorizado";

export default function RutaProtegida({claims, children}){
    return  (
    <Autorizado claimsPermitidos={claims} contentAutorizado={children} 
    contentNoAutorizado={<>No se te permite visualizar este contenido</>} />
    );
}
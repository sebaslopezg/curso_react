import { useState } from "react";

export const HookEstado = ({iniciar}) =>{

    const [contador, setContador] = useState(iniciar)

    /* Contador kes el estado,y setContador es la funcion que va a actualizar el estado,
    inicializamos contador en 0 */


    const actualizarContador = () =>{
        setContador(contador+1)
    }

    return <>
    <h1>{contador}</h1>
        <button className="btn btn-success" onClick={actualizarContador}>+1</button>
    </>
}
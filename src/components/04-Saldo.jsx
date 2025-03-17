import { useState } from "react";

export const Saldo = ({propSaldo}) =>{

    const [cantidad, setSaldo] = useState(propSaldo)

    const actualizarSaldo = () =>{
        setSaldo(cantidad*3)
    }

    return <>
    <h1>{cantidad}</h1>
        <button className="btn btn-success" onClick={actualizarSaldo}>Actualizar saldo</button>
    </>
}
import { useState } from "react";

export const RenderCondicional2 = () => {

    const [activo, setActivo] = useState()

    const endender = () =>{
        setActivo(true)
    }
    const apagar = () =>{
        setActivo(false)
    }
    
    return <>

        <button className="btn btn-success" onClick={endender}>
            Activar
        </button>

        <button className="btn btn-danger" onClick={apagar}>
            Apagar
        </button>
        <hr />

        {activo ? <span class="badge rounded-pill text-bg-success">encendido :3</span> : <span class="badge rounded-pill text-bg-danger">APAGADOOOOOO</span> }

    </>;
}
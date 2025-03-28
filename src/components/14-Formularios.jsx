import { useState } from "react"
import { ConsumoApiAW } from "./12-ConsumoApiAW"

export const Formularios = () => {

    const [persona, setDatosPersona] = useState({})

    const getDatosFormulario = (e) =>{
        e.preventDefault()
        let valor = e.target

        const datosFormulario = {
            nombre: valor.nombre.value,
            apellido: valor.apellido.value,
            email: valor.email.value,
            genero: valor.genero.value,
            biografia: valor.biografia.value,
        }
        console.log(persona)
        setDatosPersona(datosFormulario)
    }

    return <>
    <form action="" onSubmit={getDatosFormulario}>

    <div className="mb-3">
        <input 
            type="text" 
            className="form-control" 
            name="nombre" 
            placeholder="nombre"
        />
    </div>
    <div className="mb-3">
        <input 
            type="text" 
            className="form-control" 
            name="apellido" 
            placeholder="apellido"
        />
    </div>
    <div className="mb-3">
        <input 
            type="email" 
            className="form-control" 
            name="email" 
            placeholder="email"
        />
    </div>
    <div className="mb-3">
        <select className="form-control" name="genero">
            <option value="0">Masculono</option>
            <option value="1">Femenino</option>
            <option value="2">Otros</option>
        </select>
    </div>

    <div className="mb-3">
        <textarea className="form-control" name="biografia" rows="3"></textarea>
    </div>

    <button className="btn btn-success">Enviar</button>
    </form>
        <hr />
        <table className="table">
            <tbody>
                <tr>
                    <th>Nombre</th>
                    <td>{persona.nombre}</td>
                </tr>
                <tr>
                    <th>Apellido</th>
                    <td>{persona.apellido}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{persona.email}</td>
                </tr>
                <tr>
                    <th>Genero</th>
                    <td>{persona.genero}</td>
                </tr>
                <tr>
                    <th>Biografia</th>
                    <td>{persona.biografia}</td>
                </tr>
            </tbody>
        </table>
    </>
}
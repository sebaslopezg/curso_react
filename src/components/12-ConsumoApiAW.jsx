import { useState } from "react"
import axios from "axios"

export const ConsumoApiAW = () => {


    const [respuesta, setRespuesta] = useState([])
    const [pagina, setPagina] = useState()

    //consumir la api
    const leerApi = async() =>{
        let {data} = await axios.get('https://reqres.in/api/users?page=2')
        setRespuesta(data.data)
        setPagina(data.page)
        //console.log(data)
    }

    //insertar un registro
    const hacerPost = async() =>{
        let {data} = await axios.post('https://reqres.in/api/users',{
            name: 'Sebs',
            job: 'ADSO'
        })
        setRespuesta(data.data)
    }

    //Actualizar un registro
    const hacerPut = async() =>{
        let {data} = await axios.put('https://reqres.in/api/users/2',{
            name: 'Moebius',
            job: '(:('
        })
        setRespuesta(data.data)
    }

    //Eliminar un registro
    const hacerDelete = async() =>{
        let {data} = await axios.delete('https://reqres.in/api/users/2')
        setRespuesta(data.data)
    }

    return <>
    
        <button className="btn btn-info" onClick={leerApi}>Leer APP</button>

        <button className="btn btn-success" onClick={hacerPost}>Metodo post</button>

        <button className="btn btn-warning" onClick={hacerPut}>Actualizacoin</button>

        <button className="btn btn-danger" onClick={hacerDelete}>Eliminar</button>

        <hr />

        <span className="badge text-bg-secondary">{pagina}</span>
        <ol>
            {respuesta.map((usuario) =>{
                return(
                    <li key={usuario.id}>
                        <span>{usuario.first_name}</span>
                        <span><img src={usuario.avatar} alt="" /></span>
                        </li>
                ) 
            })}
        </ol>
    </>
}
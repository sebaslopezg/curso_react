import axios from "axios"
import { useState,useEffect } from "react"

export const EfectoCarga = () => {


    const [data, setData] = useState([])
    const [cargando, setCargando] = useState(true)

    const leerApi = () =>{
        setTimeout(async() =>{
            let {data} = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setData(data)
            setCargando(false)
        },2000)
    }

    useEffect(() =>{
        leerApi()
    }, [])

    //seccion de carga de render del componente

    return <>

        {""}
        {cargando === true ? 
        (
            <div>
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) : (
            <>
        {data.map((dato) =>{
            return(
                <span key={dato.id}>{dato.title}</span>
            )
        })}
        </>
        )}


    </>
}
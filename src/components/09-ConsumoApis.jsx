import axios from "axios"

export const ConsumirApi = () => {

    //consumir la api
    const leerApi = () =>{
        axios.get('https://reqres.in/api/users?page=2')
        //.then((res) => console.log(res)) //// llega el objeto promesa 
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.message))
    }

    //insertar un registro
    const hacerPost = () =>{
        axios.post('https://reqres.in/api/users',{
            name: 'Sebs',
            job: 'ADSO'
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message))
    }

    //Actualizar un registro
    const hacerPut = () =>{
        axios.put('https://reqres.in/api/users/2',{
            name: 'Moebius',
            job: '(:('
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message))
    }

    //Eliminar un registro
    const hacerDelete = () =>{
        axios.delete('https://reqres.in/api/users/2')
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message))
    }

    return <>
    
        <button className="btn btn-info" onClick={leerApi}>Leer APP</button>

        <button className="btn btn-success" onClick={hacerPost}>Metodo post</button>

        <button className="btn btn-warning" onClick={hacerPut}>Actualizacoin</button>

        <button className="btn btn-danger" onClick={hacerDelete}>Eliminar</button>

    </>
}

/*
Se pueden consumir con la API FETCH de JS
Ecosistema REACT recomienda usar la librería AXIOS
*/

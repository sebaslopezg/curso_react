import axios from "axios"

export const ConsumirApi = () => {

    const leerApi = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        //.then((res) => console.log(res)) //// llega el objeto promesa 
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.message))
    }

    return <>
    
        <button className="btn btn-info" onClick={leerApi}>Leer APP</button>

    </>
}

/*
Se pueden consumir con la API FETCH de JS
Ecosistema REACT recomienda usar la librería AXIOS
*/

import { useState, useEffect } from "react";
import axios from "axios";

export const HookEffect = () => {

    const [users, setPost] = useState([]) //Tener en cuenta inicializar de acuerdo al tipo de estado
    useEffect(()=>{
        axios
            .get('https://reqres.in/api/users')
            .then((res) => {
                setPost(res.data.data)
                console.log(res)
            })
            .catch(error => console.log(error.message))
    },[users])

    return <>
        {users.map((user) =>{
            return(
                <div className="card" key={user.id}>
                <div className="card-body">
                    <h5 className="card-title">{user.first_name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">id: {user.id}</h6>
                    <p className="card-text">{user.email}</p>
                    <img src={user.avatar} alt="" />
                </div>
                </div>
            )
        })}
    </>
}

/**
 * useEfect: hook que sincroniza un componente con un sistema externo,
 * Se ejecua cuando cargo el componente
 * Puedo controlar el numero de "cargas" en la configuración del
 * useEffect
 */
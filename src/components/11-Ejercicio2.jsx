import { useState } from "react";
export const Ejercicio2 = ({year}) => {
    let theYear = year
    const [yearUpdated, setYear] = useState(year)

    const incrementar = () => {
        setYear(yearUpdated+1)
        theYear = yearUpdated
        
    }
    const decrementar = () => {
        setYear(yearUpdated-1)
        theYear = yearUpdated
        
    }

    const setInput = ({target}) => {
        let value = parseInt(target.value)

        Number.isInteger(value) ? setYear(target.value) : console.log('debe ingresar un numero')

        
    }

    return <>
        <h2>Año actual: {yearUpdated}</h2>
        <button className="btn btn-primary" onClick={incrementar}>Incrementar</button>
        <button className="btn btn-primary" onClick={decrementar}>Decrementar</button>
        <input id="myinput" type="text" className="form-control" onChange={setInput} />
    </>
}

/**

Un componente debe pasarle a otro el año actual (obtenerlo con la librería date)
El componente que recibe el año debe tener 2 botones y un input
un boton incrementa el año actual
un boton decrementa el año actual
en el input se puede escribir SOLO numeros y estos reemplazan el año actual
 */
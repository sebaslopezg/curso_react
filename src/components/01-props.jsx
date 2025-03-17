//sugiere pascal case

//import { Fragment } from "react/jsx-runtime"

export const Propiedades = ({nombre,apellido, estaActivo, edad}) => {
    //logica del componente

    //render del componente
    //return <Fragment> </Fragment>
    let activo = {
        matricula:'',
        conector:''

    }
    if (estaActivo) {
        activo = {
            matricula: 'estoy matriculado',
            conector: 'y'
        }
    }
    return <>
        {/* OJO tenga en cuenta que los boolean no los renderiza */}
        <h1>hi my name is... {nombre}</h1>
        <p>Mi apellido es: {apellido}, {activo.matricula} {activo.conector} tengo {edad} años de edad</p>
    </>
}
 
//export default Propiedades;

/*
Los props o propieties: son valores a pasar entre componentes
*/
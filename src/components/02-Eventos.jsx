export const EventosReact = () => {
      //logica del componente
    const Saludar = () =>{
        console.log('holaaa enfermera!')
    }

    //render
    return <>
        <button className="btn btn-primary" onClick={Saludar}>Enviar</button>
    </>
}
export const RenderCondicional1 = ({estado}) => {
    const activo = false
    return <>
    {
        estado ? (<div class="alert alert-success" role="alert">
            Exito!
          </div>) : 
          (<div class="alert alert-warning" role="alert">
            Fracaso!!
            </div>)
    }
    </>;
}

/*
Render condicional es la posibilidad de pintar las listas de acuerdo a una condición.
React como buena practica sugiere el uso de operador terciario
*/
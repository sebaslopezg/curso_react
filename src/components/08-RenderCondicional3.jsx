export const RenderCondicional3 = () => {
/*     const aprendices = [
        {id:100,nombre:'pedro viveros'}, 
        {id:200, nombre:'juan'},
        {id:300, nombre:'Luisa'}
    ] */
    const aprendices = [
        {id:100,nombre:'pedro viveros'}, 
        {id:200, nombre:'juan'},
        {id:300, nombre:'Luisa'}
    ]

    const editar = ({target})=>{
        console.log(target)
        console.log('editar')
    }
    const eliminar = ({target}) =>{
        console.log(target)
        console.log('borrar')
    }
    return <>
        {aprendices.length === 0 ? (
            <div class="alert alert-danger" role="alert">
                No existen aprendices en la consulta
            </div>
            ) : (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aprendices.map((aprendiz) => {
                            return(
                            <tr key={aprendiz.id}>
                                <td>{aprendiz.id}</td>
                                <td>{aprendiz.nombre}</td>
                                <td><button className="btn btn-primary" onClick={editar}>Editar</button></td>
                                <td><button className="btn btn-danger" onClick={eliminar}>Eliminar</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
    </>
}

import { EfectoCarga } from "./components/13-EfectoCarga"
import { Formularios } from "./components/14-Formularios"

function App() {

  return (
    <>

    <div className="container">

    <div className="card mt-4 mb-4">
      <div className="card-body">
        <Formularios/>
      </div>
    </div>

    <div className="card">
      <div className="card-body">
      < EfectoCarga />
      </div>
    </div>
    
    </div>  
      
    </>
  )
}

export default App

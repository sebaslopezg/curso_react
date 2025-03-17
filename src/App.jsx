import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Saldo } from './components/04-Saldo'

function App() {

  return (
    <>

    <div className="container">
      <div className="row">
        <div className="col">
          <Saldo propSaldo={25} />
        </div>
      </div>  
    </div>  
      
    </>
  )
}

export default App

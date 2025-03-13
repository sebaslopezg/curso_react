import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Saludo from './components/Saludo'
import Saludo2 from './components/Saludo2'

function App() {
  return (
    <>

    <div className="container">
      <div className="row">
        <div className="col"><Saludo/></div>
        <div className="col"><Saludo2 /></div>
        <div className="col"></div>
        <div className="col"></div>
      </div>  
    </div>  
      
    </>
  )
}

export default App

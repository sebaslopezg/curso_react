
import {RenderCondicional3} from './components/08-RenderCondicional3'
import { ConsumirApi } from './components/09-ConsumoApis'
import {HookEffect} from './components/10-hookEffect'

function App() {

  return (
    <>

    <div className="container">
      <div className="row">
        <div className="col-6">
          <RenderCondicional3/>
        </div>
        <div className='col-6'>
          <ConsumirApi/>
        </div>
        <HookEffect/>
      </div>  
    </div>  
      
    </>
  )
}

export default App


import './App.css'
import { Navigation,  Footer} from './components'

import { About, Home, Properties } from './pages'


function App() {


  return (
    <>
      <Navigation/>
     
      <Home />
      <Properties/>
      <About/>
     
       
      
     <Footer/>
      
   
    </>
  )
}

export default App

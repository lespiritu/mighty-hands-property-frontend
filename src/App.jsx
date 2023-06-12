
import './App.css'
import { Navigation,  Footer, ViewProperty} from './components'

import { About, Home, Properties } from './pages'

import { Routes, Route
 } from 'react-router-dom'

function App() {


  return (
    <>
      <Navigation/>
      
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='*' element={<div className='w-full h-screen flex justify-center items-center' ><h1 className='text-4xl font-semibold text-zinc-600'>Page not found</h1></div>}/>
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/property/:_id' element={<ViewProperty/>} />
        <Route path='about' element={<About/>}/>
     
     
      
        
        
        
        
        </Routes>
      <Footer />
      

      
   
    </>
  )
}

export default App

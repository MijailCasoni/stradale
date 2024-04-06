/*import ReactDOM from 'react-dom/client'*/
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import Proyectos from './pages/Proyectos'
import Error404 from './pages/Error404'
import {Route, Routes} from 'react-router-dom'



const App = () =>{
  return(
    <>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/acerca' element={<Nosotros/>}/>
          <Route path ='/proyectos' element={<Proyectos/>}/>
          <Route path ='/contacto' element={<Contacto/>}/>
          <Route path ='/*' element={<Error404/>}/>
        </Routes>
    </>
  )
  }

  export default App


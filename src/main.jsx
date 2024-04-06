import React from 'react'
import ReactDOM  from 'react-dom/client';
import App from '../src/App'
import { BrowserRouter } from 'react-router-dom'; {/* createBrowserRouter, RouterProvider */}
import Navigation from './components/Navigation';
{/*import Home from './pages/Home';
import Error404 from './pages/Error404';*/}


{/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error404 />,
  },
]);*/}


const root = ReactDOM.createRoot(document.getElementById('root'))

  root.render(

  <React.StrictMode>
    {/*<RouterProvide>*/}

    <BrowserRouter>
      <Navigation/>
      <App />
    </BrowserRouter>



  </React.StrictMode>
)





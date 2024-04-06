import React from 'react'
import '../stylesheet/error.css'
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export default function Error404(){
    const error = useRouteError();
    console.error(error)

    const buttonError = useNavigate();
    const handleNavigation = () => {
      buttonError('/');
    };
  return (
  <React.Fragment>
    <body>
    <img src='/public/img-error.png' alt=""/>
    <div className='error-container'>
      <spam className="error">Error</spam>
      <h1 className="other">404</h1>
      <p>Ups¡Lo sentimos, la página que buscas no ha sido encontrada.<br/> Por favor haz click en botón inicio para volver</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button className= "boton-error" onClick={handleNavigation}>
          Inicio
      </button>
      </div>
      </body>
  </React.Fragment>
);}


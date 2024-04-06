import '../stylesheet/BarNav.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../components/Button'


function Navigation() {
  const navigate = useNavigate();

const handleNavigation = () => {
    navigate('/contacto');
  };

  return (
    <nav>
      <NavLink to='/' className="nav-link">
        Home
      </NavLink>
      <NavLink to='/acerca' className="nav-link">
        Nosotros
      </NavLink>
      <NavLink to='/proyectos' className="nav-link">
        Nuestros proyectos
      </NavLink>
      {/*<NavLink to='/contacto' className="nav-link">
        Contacto
  </NavLink>*/}
      <Button onClick={handleNavigation}/>
    </nav>

  );

  
}

export default Navigation

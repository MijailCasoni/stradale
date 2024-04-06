import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from './Button';
import Formulario from './Formulario';


const Header = () => {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li><Link to="/">Nosotros</Link></li>
            </ul>
              <Button/>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/formulario" component={Formulario} />
        </div>
      </Router>
  );
};

const Home = () => (
  <div>
    <h2>Inicio</h2>
    <Button />
  </div>
);


export default Header;
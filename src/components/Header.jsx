import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo COONADOC" />
          </Link>
        </div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
            <li><Link to="/afiliacion-servicios">Afiliación y Servicios</Link></li>
            <li><Link to="/documentacion">Documentos</Link></li>
            <li><Link to="/blog">Noticias</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
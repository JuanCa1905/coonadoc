import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
          <li><Link to="/afiliacion-servicios">Afiliación y Servicios</Link></li>
          <li><Link to="/documentacion">Documentos</Link></li>
          <li><Link to="/blog">Noticias</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
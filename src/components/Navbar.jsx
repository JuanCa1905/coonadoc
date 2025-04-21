import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import '../styles/App.scss'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img src={require('../assets/logo.png')} alt="COONADOC Logo" />

      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">Quiénes Somos</Link></li>
        <li><Link to="/afiliacion-servicios">Afiliación y Servicios</Link></li>
        <li><Link to="/documentacion">Documentos</Link></li>
        <li><Link to="/blog">Noticias</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Academia StackX</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Aulas</Link></li>
          <li><Link to="/trainers">Instrutores</Link></li>
          <li><Link to="/membership">Planos</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
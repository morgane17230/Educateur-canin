import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.png';
import 'src/styles/header.scss';

const Header = () => {
  console.log('header');
  return (
    <div className="header">
      <div className="header-banner">
        <img className="header-banner-logo" src={logo} alt="logo" />
        <span>Educateur Canin</span>
      </div>
      <div className="header-menu">
        <Link className="header-menu-item" to="/">
          Accueil
        </Link>

        <Link className="header-menu-item" to="/conseils">
          Conseils
        </Link>

        <Link className="header-menu-item" to="/rendez-vous">
          Rendez-vous
        </Link>

        <Link className="header-menu-item" to="/foire-aux-questions">
          FAQ
        </Link>

        <Link className="header-menu-item" to="/que-sont-ils-devenus">
          Que sont-ils devenus ?
        </Link>

        <Link className="header-menu-item" to="/et-les-chats">
          Et les chats...
        </Link>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.png';
import 'src/styles/header.scss';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-banner">
        <div className="header-banner-logo">
          <Link to="/">
            <img
              className="header-banner-logo-image"
              src={logo}
              alt="logo"
            />
          </Link>
          <span>Educateur Canin</span>
        </div>
        <button
          className="header-banner-toggle"
          type="button"
          onClick={() => setOpen(!isOpen)}
        >
          <Icon path={mdiMenu} title="next date" size={1} />
        </button>
      </div>
      <div className={`header-drawer ${isOpen && 'isOpen'}`}>
        <div className="header-drawer-header">Avatar + Nom</div>
        <div className="header-drawer-items">
          <Link className="header-drawer-item" to="/">
            Accueil
          </Link>

          <Link className="header-drawer-item" to="/conseils">
            Conseils
          </Link>

          <Link
            className="header-drawer-item"
            to="/prendre-rendez-vous"
          >
            Rendez-vous
          </Link>

          <Link
            className="header-drawer-item"
            to="/foire-aux-questions"
          >
            FAQ
          </Link>

          <Link
            className="header-drawer-item"
            to="/que-sont-ils-devenus"
          >
            Que sont-ils devenus ?
          </Link>

          <Link className="header-drawer-item" to="/et-les-chats">
            Et les chats...
          </Link>
        </div>
        <div className="header-drawer-footer">
          <a href="#">
            <div className="header-drawer-footer-actions">
              Modifier mon profil
            </div>
          </a>
          <a href="#">
            <div className="header-drawer-footer-actions">
              Déconnexion
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

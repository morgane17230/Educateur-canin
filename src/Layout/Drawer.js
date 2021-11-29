import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'src/styles/header.scss';

const Drawer = ({
  isOpen,
}) => (
  <div className={`header-drawer ${isOpen && 'isOpen'}`}>
    <div className="header-drawer-header">
      <div className="header-drawer-avatar" />
      <div className="header-drawer-user">Avatar + Nom</div>
    </div>
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
);

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Drawer;

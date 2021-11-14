import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'src/assets/logo.png';
import 'src/styles/header.scss';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import Drawer from './Drawer';

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
      <Drawer isOpen={isOpen} />
    </div>
  );
};

export default Header;

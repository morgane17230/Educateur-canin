import React from 'react';
import { Link } from 'react-router-dom';

import 'src/styles/footer.scss';

const Header = () => {
  console.log('footer');
  return (
    <div className="footer">
      <Link className="footer-item" to="/contact">
        Contact
      </Link>

      <span className="footer-item">
        © - 2021Marque entreprise
      </span>

      <Link className="footer-item" to="/rconditions-generales-d-utilisation">
        CGU
      </Link>
    </div>
  );
};

export default Header;

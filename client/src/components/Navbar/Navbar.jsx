import './_Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      <ul className="navbar__list">
        <li>
          <Link className="navbar__list__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__list__link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="navbar__list__link" to="/about">
            About
          </Link>
        </li>
      </ul>
      <Link className="navbar__cart__icon" to="/contact">
        <FaShoppingCart />
      </Link>
    </nav>
  );
};

export default Navbar;

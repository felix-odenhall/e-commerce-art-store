import './_Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useState, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // const [cartOpen, setCartOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">LOGO</div>
      <ul className="navbar__list">
        <li>
          <Link className="navbar__list__link" to="/">
            Home
          </Link>
        </li>
        {/* <li>
          <Link className="navbar__list__link" to="/products">
            Products
          </Link>
        </li> */}
        <li>
          <Link className="navbar__list__link" to="/about">
            About
          </Link>
        </li>
      </ul>
      <button onClick={() => navigate('/cart')}>
        <FaShoppingCart />
      </button>
    </nav>
  );
};

export default Navbar;

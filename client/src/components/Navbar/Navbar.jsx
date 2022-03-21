import './_Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/contact">
            <FaShoppingCart />
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;

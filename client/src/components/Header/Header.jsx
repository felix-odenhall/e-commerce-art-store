import './_Navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useState, useNavigate } from 'react-router-dom';
import CartComponent from '../CartComponent/CartComponent';

const Navbar = ({
  addToCart,
  removeFromCart,
  cartItem,
  setCartItems,
  onUpdateCart,
  getCartLs,
  emptyCart,
}) => {
  const navigate = useNavigate();
  // const [cartOpen, setCartOpen] = useState(false);
  let cartqty = 0;
  getCartLs.forEach((product) => (cartqty += product.amount));
  return (
    <>
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
        <div>
          <button onClick={() => navigate('/cart')}>
            <FaShoppingCart />
          </button>
          <p>{cartqty ? cartqty : ' '}</p>
        </div>
      </nav>
      <CartComponent
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItem={cartItem}
        setCartItems={setCartItems}
        onUpdateCart={onUpdateCart}
        getCartLs={getCartLs}
        emptyCart={emptyCart}
      />
    </>
  );
};

export default Navbar;

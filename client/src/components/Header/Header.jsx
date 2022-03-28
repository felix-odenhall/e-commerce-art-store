import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineShopping } from 'react-icons/ai';

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
    <header>
      <nav className="text-l flex justify-between items-center h-14 px-5 bg-neutral-600 ">
        <div>LOGO</div>
        <ul className="flex">
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:bg-neutral-400">
            <Link to="/">Home</Link>
          </li>
          {/* <li>
          <Link className="navbar__list__link" to="/products">
            Products
          </Link>
        </li> */}
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:bg-neutral-400">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="flex flex-row items-center h-14 hover:bg-neutral-400 hover:text-green-700 px-1">
          <button className=" text-2xl" onClick={() => navigate('/cart')}>
            <AiOutlineShopping />
          </button>
          <p className="pl-2">{cartqty ? cartqty : ' '}</p>
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
    </header>
  );
};

export default Navbar;

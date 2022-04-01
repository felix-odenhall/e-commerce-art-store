import { AiOutlineShopping } from 'react-icons/ai';
import { GrUserAdmin } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Navbar = ({
  addToCart,
  removeFromCart,
  cartItem,
  setCartItems,
  onUpdateCart,
  getCartLs,
  emptyCart,
  isActive,
  setIsActive,
}) => {
  let cartqty = 0;
  getCartLs.forEach((product) => (cartqty += product.amount));
  return (
    <header className="w-full bg-gradient-to-b from-cyan-700 to-cyan-600 drop-shadow-md">
      <nav className="max-w-6xl text-l flex justify-between items-center h-20 px-5 mx-auto">
        <div>LOGO</div>
        <ul className="flex">
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:underline">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="flex flex-row items-center h-14">
          <button
            className=" text-2xl text-white hover:text-lime-500 hover:underline"
            onClick={(e) => setIsActive(!isActive)}
          >
            <AiOutlineShopping />
          </button>
          <p className=" pl-0.5 mr-2 text-sm text-white">
            {cartqty ? cartqty : ' '}
          </p>
          <Link to="/login">
            <GrUserAdmin />
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

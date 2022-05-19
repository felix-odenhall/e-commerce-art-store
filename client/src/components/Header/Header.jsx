import { AiOutlineShopping } from "react-icons/ai";
// import { GrUserAdmin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = ({ getCartLs, isActive, setIsActive }) => {
  let cartqty = 0;
  getCartLs.forEach((product) => (cartqty += product.amount));
  return (
    <header className="w-full bg-gradient-to-b from-cyan-700 to-cyan-600 sticky top-0 drop-shadow-md">
      <nav className="max-w-6xl text-l flex flex-row justify-between items-center h-20 px-5 mx-auto">
        <h3 className="w-1/3 font-bold text-white pr-4">Felix Art Store</h3>
        <ul className="flex w-1/3 justify-center ">
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center px-3 cursor-pointer font-semibold text-white h-14 hover:underline">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul className="flex flex-row  justify-end  items-center h-14 w-1/3">
          <button onClick={(e) => setIsActive(!isActive)}>
            <AiOutlineShopping className=" text-2xl text-white" />
          </button>
          <p className=" pl-0.5 mr-2 text-sm text-white">
            {cartqty ? cartqty : " "}
          </p>
          {/* <Link to="/login">
            <GrUserAdmin />
          </Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

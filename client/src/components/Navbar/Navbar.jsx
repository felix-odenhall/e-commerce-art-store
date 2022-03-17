import './_Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li key={Home}>Home</li>
        <li key={Products}>Products</li>
        <li key={About}>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;

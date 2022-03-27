import '../components/ProductCard/_ProductCard.scss';
import Navbar from '../components/Navbar/Navbar';
import CartComponent from '../components/CartComponent/CartComponent';
// import Cart from './Cart';
import * as config from '../Config';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const [fetchedProduct, setFetchedProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (fetchedProduct) => {
    const exists = cartItems.find((x) => x.id === fetchedProduct.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) =>
          x.id === fetchedProduct.id
            ? { ...exists, amount: exists.amount + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...fetchedProduct, amount: 1 }]);
    }
  };
  const removeFromCart = (fetchedProduct) => {
    const exists = cartItems.find((x) => x.id === fetchedProduct.id);
    if (exists.amount === 1) {
      setCartItems(cartItems.filter((x) => x.id !== fetchedProduct.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === fetchedProduct.id
            ? { ...exists, amount: exists.amount - 1 }
            : x
        )
      );
    }
  };

  const { id } = useParams();
  useEffect(() => {
    fetch(`${config.API_BASE_URL}/products/product/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setFetchedProduct(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return fetchedProduct ? (
    <>
      <Navbar />
      <img src={fetchedProduct.image} alt="" />
      <h3>{fetchedProduct.title}</h3>
      <div className="btn-container">
        <button onClick={() => addToCart(fetchedProduct)}>Add to cart</button>
        <Link to={'/checkout'}>Buy </Link>
      </div>
      <CartComponent
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <button onClick={() => navigate('/cart')}>
        <FaShoppingCart />
      </button>
    </>
  ) : (
    <h1>Loading... </h1>
  );
};

export default Product;

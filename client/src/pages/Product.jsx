import * as config from '../Config';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useParams /*useNavigate*/ } from 'react-router-dom';

const Product = ({
  fetchedProduct,
  setFetchedProduct,
  onUpdateCart,
  setCartItems,
  addToCart,
  isActive,
  setIsActive,
}) => {
  // const navigate = useNavigate();
  // const getCartLs = JSON.parse(localStorage.getItem('cart')) || [];
  // const [cartItem, setCartItems] = useState(getCartLs);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartItem));
  // }, [cartItem]);

  // useEffect(() => {
  //   console.log(cartItem);
  //   localStorage.setItem('cart', JSON.stringify(cartItem));
  //   console.log(localStorage.getItem('cart'));
  // }, [cartItem]);

  // const addToCart = (fetchedProduct) => {
  //   const exists = cartItem.find((x) => x._id === fetchedProduct._id);
  //   console.log(exists);
  //   if (exists) {
  //     setCartItems(
  //       cartItem.map((x) =>
  //         x._id === fetchedProduct._id
  //           ? { ...exists, amount: exists.amount + 1 }
  //           : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItem, { ...fetchedProduct, amount: 1 }]);
  //   }
  // };

  // const removeFromCart = (fetchedProduct) => {
  //   const exists = cartItem.find((x) => x._id === fetchedProduct._id);
  //   if (exists.amount === 1) {
  //     setCartItems(cartItem.filter((x) => x._id !== fetchedProduct._id));
  //   } else {
  //     setCartItems(
  //       cartItem.map((x) =>
  //         x._id === fetchedProduct._id
  //           ? { ...exists, amount: exists.amount - 1 }
  //           : x
  //       )
  //     );
  //   }
  // };

  // const removeFromCart = (newCart) => {
  //   setCartItems([]);
  // };

  // const getCartLs = JSON.parse(localStorage.getItem('cart')) || [];

  // const [cartItems, setCartItems] = useState(getCartLs);
  // const addToCart = (fetchedProduct) => {
  //   const exists = cartItems.find((x) => x.id === fetchedProduct.id);
  //   if (exists) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === fetchedProduct.id
  //           ? { ...exists, amount: exists.amount + 1 }
  //           : x
  //       )
  //     );
  //   } else {
  //     setCartItems([...cartItems, { ...fetchedProduct, amount: 1 }]);
  //   }
  //   // setCartItems(cartItems);
  //   // localStorage.setItem('cart', JSON.stringify(cartItems));
  // };
  // const removeFromCart = (fetchedProduct) => {
  //   const exists = cartItems.find((x) => x.id === fetchedProduct.id);
  //   if (exists.amount === 1) {
  //     setCartItems(cartItems.filter((x) => x.id !== fetchedProduct.id));
  //   } else {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === fetchedProduct.id
  //           ? { ...exists, amount: exists.amount - 1 }
  //           : x
  //       )
  //     );
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cartItems));
  // }, [cartItems]);

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
      <img src={fetchedProduct.image} alt="" />
      <h3>{fetchedProduct.title}</h3>
      <div className="btn-container">
        <button
          onClick={() => {
            addToCart(fetchedProduct);
            setIsActive(!isActive);
          }}
        >
          Add to cart
        </button>
        {/* <Link to={'/checkout'}>Buy </Link> */}
      </div>
      {/* <CartComponent
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      /> */}
      {/* <button onClick={() => navigate('/cart')}>
        <FaShoppingCart /> {cartItems.length}
      </button> */}
      <button>
        <FaShoppingCart />
      </button>
    </>
  ) : (
    <h1>Loading... </h1>
  );
};

export default Product;

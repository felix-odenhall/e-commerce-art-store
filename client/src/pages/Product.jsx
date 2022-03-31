import * as config from '../Config';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Product = ({
  fetchedProduct,
  setFetchedProduct,
  onUpdateCart,
  setCartItems,
  addToCart,
  isActive,
  setIsActive,
}) => {
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
      <div>
        <button
          onClick={() => {
            addToCart(fetchedProduct);
            setIsActive(!isActive);
          }}
        >
          Add to cart
        </button>
        <Link
          className=" bg-black text-white text-center p-2"
          to="/checkout"
          onClick={() => {
            addToCart(fetchedProduct);
          }}
        >
          Buy
        </Link>
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

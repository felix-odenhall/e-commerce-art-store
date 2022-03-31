import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartComponent = ({
  addToCart,
  removeFromCart,
  fetchedProduct,
  cartItem,
  setCartItems,
  onUpdateCart,
  getCartLs,
  emptyCart,
  isActive,
  setIsActive,
}) => {
  const totalPrice = getCartLs.reduce((a, b) => a + b.price * b.amount, 0);

  return (
    <div className="flex flex-col top-6 right-20 bg-white absolute lg:top-15 lg:right-52 h-auto w-56 px-2 pt-3 pb-5 rounded-md">
      <div className="flex justify-between items-center pb-4">
        <h3 className=" text-2xl font-semibold ">Your items:</h3>{' '}
        <button
          onClick={() => {
            emptyCart(fetchedProduct);
            setIsActive(!isActive);
          }}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
      <div>{getCartLs.length === 0 && <div>Cart is empty</div>}</div>
      {getCartLs.map((item) => (
        <div key={item._id}>
          <div className="pt-2">
            <h3 className=" font-medium text-xl">{item.title}</h3>
            <div className="flex justify-between py-3">
              <div className="flex justify-center items-center">
                <button
                  className=" w-5 bg-gray-300 rounded-lg mr-2 text-md"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <p className="text-lg m-2">{item.amount}</p>
                <button
                  className=" w-5 bg-gray-300 rounded-lg ml-2 text-md"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>{' '}
              </div>
              x ${item.price}
            </div>
            <hr className=" border-1 border-slate-300" />
          </div>
        </div>
      ))}
      <div className="flex justify-between font-semibold text-xl pt-4">
        <h3>Total:</h3> <h3>${totalPrice}</h3>
      </div>
      <hr className=" border-1 border-slate-300 my-2" />
      <Link
        className=" bg-black text-white text-center p-2"
        to="/checkout"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        CHECKOUT
      </Link>
    </div>
  );
};

export default CartComponent;

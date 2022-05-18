import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const CartComponent = ({
  addToCart,
  removeFromCart,
  fetchedProduct,
  getCartLs,
  emptyCart,
  isActive,
  setIsActive,
}) => {
  const totalPrice = getCartLs.reduce((a, b) => a + b.price * b.amount, 0);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }
  return (
    <div
      ref={ref}
      className="flex flex-col bg-slate-100 absolute h-full w-2/3 md:w-1/3 right-0 top-0 shadow-xl px-5 py-12"
    >
      <div className="flex justify-between items-center pb-4">
        <h3 className=" text-2xl font-semibold ">Your items:</h3>{" "}
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          X
        </button>
      </div>
      <div>{getCartLs.length === 0 && <div>Your cart is empty</div>}</div>
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
                </button>{" "}
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
        className=" text-center w-36 bg-slate-700 text-white p-2 hover:bg-slate-600 rounded"
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

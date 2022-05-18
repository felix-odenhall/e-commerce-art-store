import * as config from "../Config";
import { useState } from "react";

const Checkout = ({ emptyCart, onUpdateCart }) => {
  const getCartLs = JSON.parse(localStorage.getItem("cart")) || [];

  const databody = getCartLs.map((product) => {
    return {
      productId: product._id,
      productAmount: product.amount,
      productTitle: product.title,
      productShipped: product.isShipped,
    };
  });

  const [confirmOrder, setConfirmOrder] = useState(false);

  const sendOrder = () => {
    fetch(`${config.API_BASE_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({ products: databody, isShipped: false }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        emptyCart();
        onUpdateCart([]);
        setConfirmOrder(!confirmOrder);
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      });
  };
  return confirmOrder ? (
    <h1>Thank you, your order is registered and will soon be shipped.</h1>
  ) : (
    <main className="flex justify-center w-full mt-6">
      <section className=" flex justify-start items-center flex-col p-12 bg-slate-100 w-72">
        <h1 className="text-2xl font-semibold mb-4">Your products</h1>
        <div>
          {getCartLs.map((product, i) => {
            return (
              <div className="m-4" key={i}>
                <h2 className="pb-4">
                  {product.title} x {product.amount}
                </h2>
              </div>
            );
          })}
        </div>
        <button
          className=" m-2 w-36 bg-slate-700 text-white text-center p-2 hover:bg-slate-600 rounded"
          onClick={sendOrder}
        >
          Confirm
        </button>
      </section>
    </main>
  );
};

export default Checkout;

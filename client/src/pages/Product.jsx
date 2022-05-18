import * as config from "../Config";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({
  fetchedProduct,
  setFetchedProduct,
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
  }, [id]); //eslint-disable-line
  return fetchedProduct ? (
    <main className="flex justify-center items-center flex-col w-full p-4">
      <img className="shrink-0 shadow-lg" src={fetchedProduct.image} alt="" />
      <div className="flex w-3/5 justify-between items-center py-4">
        <h3 className=" text-2xl">{fetchedProduct.title}</h3>
        <h4 className=" text-xl">${fetchedProduct.price}</h4>
      </div>
      <div className="flex">
        <button
          className=" m-2 w-36 bg-slate-700 text-white text-center p-2 hover:bg-slate-600 rounded"
          onClick={() => {
            addToCart(fetchedProduct);
            setIsActive(!isActive);
          }}
        >
          Add to cart
        </button>
        <Link
          className=" block m-2 w-36 bg-slate-700 text-white text-center p-2 hover:bg-slate-600 rounded"
          to="/checkout"
          onClick={() => {
            addToCart(fetchedProduct);
          }}
        >
          {" "}
          Buy
        </Link>
      </div>
    </main>
  ) : (
    <h1>Loading... </h1>
  );
};

export default Product;

import { Link } from "react-router-dom";

const ProductCard = ({ _id, image, title, type, price }) => {
  return (
    <>
      <div className=" w-full md:w-64 md:rounded-md overflow-hidden shadow-lg my-4 bg-white">
        <Link to={`/product/${_id}`}>
          <img src={image} alt={`A ${title}`} />
        </Link>
        <div className="px-6 py-4">
          <Link to={`/product/${_id}`}>
            <h3>{title ? title : "Coming soon"}</h3>
          </Link>
          <p>{type ? type : ""}</p>
          <p>${price ? price : "Pricless"}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

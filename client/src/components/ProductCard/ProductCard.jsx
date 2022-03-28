import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ _id, image, title, type, price }) => {
  return (
    <>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg m-2 bg-white">
        <Link to={`/product/${_id}`}>
          <img className="w-full" src={image} alt={`A picture of ${title}`} />
        </Link>
        <div className="px-6 py-4">
          <Link to={`/product/${_id}`}>
            <h3>{title ? title : 'Coming soon'}</h3>
          </Link>
          <p>{type ? type : ''}</p>
          <p>${price ? price : 'Pricless'}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

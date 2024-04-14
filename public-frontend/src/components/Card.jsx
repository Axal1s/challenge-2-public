import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="h-1/2">
        <img src={product.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-between items-center">
          <p className="card-title">Rp {product.price}</p>
          <button
            className="btn btn-secondary"
            onClick={() => {
              navigate(`/details/${product.id}`);
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

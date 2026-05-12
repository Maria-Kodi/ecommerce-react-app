import { formatPrice } from "../utils/formatPrice";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card bg-base-100 w-full min-h-[480px] shadow-md rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      
      <figure className="p-4 pb-2">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain transition-transform duration-300 hover:scale-105"
        />
      </figure>

      <div className="card-body flex flex-col justify-between px-6 pb-6">
        <h2 className=" font-bold text-2xl text-gray-800 truncate">
          {product.title.slice(0, 50)}
        </h2>

        <p className="text-lg font-bold text-blue-700">
        {formatPrice(product.price)}
        </p>

        <div className="card-actions justify-end mt-6">
          <button
            className="btn btn-primary bg-blue-700 w-full btn-lg rounded-xl transition-all duration-300 hover:bg-blue-800 hover:scale-105"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default function ProductCard({ product, addToCart }) {
    return (
      <div className="card bg-base-100 shadow-xl w-80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <figure>
          <img src={product.image} alt={product.title} className="h-40 object-contain p-4"/>
        </figure>
  
        <div className="card-body">
          <h2 className="card-title text-sm">
            {product.title.slice(0, 40)}
          </h2>
  
          <p className="text-lg font-bold">
            €{product.price}
          </p>
  
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary bg-blue-700 btn-md transition-all duration-300 hover:bg-blue-800 hover:scale-105"
              onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
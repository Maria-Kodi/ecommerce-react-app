import { removeFromCart, decreaseQuantity, addToCart } from "../utils/cartUtils";
import { formatPrice } from "../utils/formatPrice";

export default function CartItems({ item, cart, setCart }) {
  return (
    <div className="flex items-center gap-6 bg-white rounded-2xl shadow-sm p-4 mb-3">
      
      <img
        src={item.image}
        alt={item.title}
        className="h-20 w-20 object-contain rounded-xl bg-gray-50 p-2"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-800 text-sm leading-snug truncate">
          {item.title}
        </h3>
        <p className="text-blue-700 font-bold mt-1">{formatPrice(item.price)}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setCart(decreaseQuantity(cart, item.id))}
          className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold hover:bg-blue-200 transition"
        >
          −
        </button>
        <span className="w-6 text-center font-semibold text-gray-700">
          {item.quantity}
        </span>
        <button
          onClick={() => setCart(addToCart(cart, item))}
          className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold hover:bg-blue-200 transition"
        >
          +
        </button>
      </div>

      <p className="w-20 text-right font-bold text-gray-800">
      {formatPrice(item.price * item.quantity)}
      </p>

      <button
        onClick={() => setCart(removeFromCart(cart, item.id))}
        className="text-gray-400 hover:text-red-500 transition text-xl ml-2"
      >
        ✕
      </button>
    </div>
  );
}
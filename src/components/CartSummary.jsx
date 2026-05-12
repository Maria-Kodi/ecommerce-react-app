import { clearCart } from "../utils/cartUtils";
import { formatPrice } from "../utils/formatPrice";

export default function CartSummary({ cart, setCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mt-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 text-sm">
          {cart.reduce((sum, item) => sum + item.quantity, 0)} items
        </span>
        <span className="text-2xl font-bold text-gray-800">
          €{total.toFixed(2)}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setCart(clearCart())}
          className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-red-400 hover:text-red-500 transition"
        >
          Clear cart
        </button>
        <button onClick={() => alert("Checkout coming soon!")}
          className="flex-1 py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
        >
          Checkout — {formatPrice(total)}
        </button>
      </div>
    </div>
  );
}
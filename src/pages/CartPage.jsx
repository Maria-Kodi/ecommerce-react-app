import { useOutletContext } from "react-router-dom";
import CartItems from "../components/CartItems";
import CartSummary from "../components/CartSummary";

export default function CartPage() {
  const { cart, setCart } = useOutletContext();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">🛒</p>
        <p className="text-xl font-semibold text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h1>

      {cart.map((item) => (
        <CartItems key={item.id} item={item} cart={cart} setCart={setCart} />
      ))}

      <CartSummary cart={cart} setCart={setCart} />
    </div>
  );
}
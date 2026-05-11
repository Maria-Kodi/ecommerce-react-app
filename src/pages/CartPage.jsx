import { useOutletContext } from "react-router-dom";

export default function CartPage() {
  const { cart } = useOutletContext();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          {item.title} x {item.quantity}
        </div>
      ))}
      <h2>Total: €{total.toFixed(2)}</h2>
    </div>
  );
}
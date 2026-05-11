import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar min-h-[80px] bg-blue-700 text-white shadow-md px-6">
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:opacity-90">       
        eCommerce-App
        </Link>
      </div>
      
      <div className="flex gap-3 items-center">
        <Link
          to="/"
          className="btn btn-ghost text-base font-medium">
          Home
        </Link>

        <Link
          to="/cart"
          className="btn btn-ghost text-base font-medium">
          Cart ({totalItems})
        </Link>
      </div>
    </div>
  );
}
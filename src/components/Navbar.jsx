import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar min-h-[70px] md:min-h-[80px] bg-blue-700 text-white shadow-md px-4 md:px-8 lg:px-16">
      <div className="flex-1">
        <Link
          to="/"
          className="text-lg md:text-2xl font-bold tracking-wide hover:opacity-90"
        >
          eCommerce-App
        </Link>
      </div>

      <div className="flex gap-2 md:gap-3 items-center">
        <Link
          to="/"
          className="btn btn-ghost text-sm md:text-lg font-medium"
        >
          Home
        </Link>

        <Link to="/cart" className="btn btn-ghost relative">
          <ShoppingCart size={22} />

          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-blue-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
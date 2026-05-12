import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { addToCart } from "../utils/cartUtils";
import { fetchProducts } from "../services/fakeStoreApi";

const CATEGORIES = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    setCart(addToCart(cart, product));
  };

  const filtered = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <CategoryFilter
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-16 py-8">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
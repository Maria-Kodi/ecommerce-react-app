import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      <Navbar cart={cart}/>
  
      <div className="flex-1">
        <Outlet context={{ cart, setCart }}/>
      </div>
  
      <Footer/>
    </div>
  );
}
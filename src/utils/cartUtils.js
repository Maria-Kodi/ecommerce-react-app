export const addToCart = (cart, product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      return cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...cart, { ...product, quantity: 1 }];
  };
  
  export const removeFromCart = (cart, productId) =>
    cart.filter((item) => item.id !== productId);
  
  export const decreaseQuantity = (cart, productId) =>
    cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
  
  export const clearCart = () => [];
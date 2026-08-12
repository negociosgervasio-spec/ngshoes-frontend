import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface Cart {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  cart: Cart[];
  addToCart: (item: Cart) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Cart) => {
    setCart(prev => {
      const existing = prev.find(
        p => p.id === item.id && p.size === item.size && p.color === item.color
      );
      if (existing) {
        return prev.map(p =>
          p.id === item.id && p.size === item.size && p.color === item.color
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity } : p))
    );
  };

  // 🧮 Cálculos
  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const shipping = subtotal > 0 ? 20 : 0; // exemplo: frete fixo de R$20 se houver itens
  const total = subtotal + shipping;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, subtotal, shipping, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

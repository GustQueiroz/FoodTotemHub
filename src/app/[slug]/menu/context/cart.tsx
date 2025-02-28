"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
  addProduct: () => {},
  removeProduct: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addProduct = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };

  const removeProduct = (productId: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

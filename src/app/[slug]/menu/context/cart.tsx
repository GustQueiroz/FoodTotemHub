"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode, useState } from "react";

export interface CartProduct
  extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
  quantity: number;
}

export interface ICartContext {
  isOpen: boolean;
  products: CartProduct[];
  total: number;
  totalQuantity: number;
  toggleCart: () => void;
  addProduct: (product: CartProduct) => void;
  removeProduct: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  total: 0,
  totalQuantity: 0,
  toggleCart: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

const totalQuantity = products.reduce((acc, product) => {
  return acc + product.quantity;
}, 0);

  const addProduct = (product: CartProduct) => {
    const productIsAlreadyInCart = products.some(
      (prevProducts) => prevProducts.id === product.id,
    );
    if (!productIsAlreadyInCart) {
      return setProducts((prev) => [...prev, product]);
    }
    setProducts((prevProducts) => {
      return prevProducts.map((prevProduct) => {
        if (prevProduct.id === product.id) {
          return {
            ...prevProduct,
            quantity: prevProduct.quantity + product.quantity,
          };
        }
        return prevProduct;
      });
    });
  };

  const removeProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((prevProducts) => prevProducts.id !== productId),
    );
  };

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProducts) => {
        if (prevProducts.id != productId) {
          return prevProducts;
        }
        if (prevProducts.quantity === 1) {
          return prevProducts;
        }
        return { ...prevProducts, quantity: prevProducts.quantity - 1 };
      });
    });
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((prevProducts) => {
        if (prevProducts.id != productId) {
          return prevProducts;
        }
        return { ...prevProducts, quantity: prevProducts.quantity + 1 };
      });
    });
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        total,
        totalQuantity,
        toggleCart,
        addProduct,
        removeProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

"use client"

import { CartProvider } from "./context/cart"

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
} 
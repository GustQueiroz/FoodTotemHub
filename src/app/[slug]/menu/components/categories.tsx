"use client";

import { Prisma } from "@prisma/client";
import { ClockIcon } from "lucide-react";
import Image from "next/image";
import { useContext,useState } from "react";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { formatCurrency } from "@/helpers/format-currency";

import CartSheet from "../[productId]/components/cart-sheet";
import { CartContext } from "../context/cart";
import Products from "./products";
interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: { include: { products: true } };
    };
  }>;
}

type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true };
}>;

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoriesWithProducts>(
    restaurant.menuCategories[0],
  );
    const { products, toggleCart, totalQuantity } = useContext(CartContext);

  const handleCategoryClick = (category: MenuCategoriesWithProducts) => {
    setSelectedCategory(category);
  };
  const getCategoryButtonVariant = (category: MenuCategoriesWithProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
  };
  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl border bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={45}
            height={45}
          />
          <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
            <p className="text-xs text-gray-500">{restaurant.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-sm text-green-500">
          <ClockIcon size={16} />
          <p>Aberto!</p>
        </div>
      </div>
      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 px-5">
          {restaurant.menuCategories.map((category) => (
            <Button
              onClick={() => handleCategoryClick(category)}
              key={category.id}
              variant={getCategoryButtonVariant(category)}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
      <h3 className=" font-semibold px-5 pt-5">{selectedCategory.name}</h3>
      <Products products={selectedCategory.products} />
      {products.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between w-full border-t bg-white px-5 py-3">
          <div>
            <p className="text-xs text-muted-foreground">Total dos Pedidos</p>
            <p className="text-sm font-semibold">{formatCurrency(products.reduce((acc, product) => acc + product.price * product.quantity, 0))} 
              <span className="text-xs font-normal text-muted-foreground">/ {totalQuantity > 1 ? `${totalQuantity} itens` : `${totalQuantity} item`}</span></p>
          </div>
          <div>
            <Button onClick={toggleCart}>
              Ver Sacola
            </Button>
            <CartSheet />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategories;

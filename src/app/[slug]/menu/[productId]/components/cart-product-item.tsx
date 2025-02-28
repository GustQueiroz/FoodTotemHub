import { ChevronRightIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartContext, CartProduct } from "../../context/cart";
interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  const { decreaseProductQuantity } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 rounded-xl bg-gray-100 p-5">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1 text-center">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7 rounded-lg"
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <ChevronLeftIcon />
            </Button>
            <span className="w-8 text-xs">{product.quantity}</span>
            <Button
              size="icon"
              variant="destructive"
              className="h-7 w-7 rounded-lg"
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="outline" className="h-7 w-7 rounded-lg">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;

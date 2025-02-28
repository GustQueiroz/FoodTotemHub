import Image from "next/image";

import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../../context/cart";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="relative h-20 w-20">
        <Image src={product.imageUrl} alt={product.name} fill />
      </div>
      <div className="space-y-1">
        <p>{product.name}</p>
        <p>{formatCurrency(product.price)}</p>
        <div className="flex items-center gap-1"></div>
      </div>
    </div>
  );
};

export default CartProductItem;

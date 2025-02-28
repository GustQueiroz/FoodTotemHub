import { Sheet } from "lucide-react";
import { useContext } from "react";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { CartContext } from "../../context/cart";

const CartSheet = () => {
  const { isOpen, toggleCart } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Sacola</SheetTitle>
          <SheetDescription>Seus itens selecionados</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;

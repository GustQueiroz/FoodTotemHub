import { Product } from "@prisma/client";

interface CartProduct extends Product {
    quantity: number;
}

export interface ICartContext {
   isOpen: boolean;
products: CartProduct[];
togleCart: () => void;
}

export const CartContext = createContext<ICartContext>({
    isOpen: false,
    products: [],
    togleCart: () => {},
});


export const CartProvider = ({ children }: { children: React.ReactNode }) => {
return (
    <CartContext.Provider value={{
        isOpen: false,
        products: [],
        togleCart: () => {},
    }}>
        {children}
    </CartContext.Provider>
)
}

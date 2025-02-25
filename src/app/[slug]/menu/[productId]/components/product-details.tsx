"use client";

import { Prisma } from "@prisma/client"; 
import { ChefHatIcon, PlusIcon } from "lucide-react";
import { MinusIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{ include: { restaurant: {select: {name: true, avatarImageUrl: true}} } }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const [quantity, setQuantity] = useState(1);
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    return ( 
        <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem] p-5">
            <div className="">
                <div className="flex items-center gap-1.5">
                    <Image src={product.restaurant.avatarImageUrl} alt={product.restaurant.name} width={16} height={16} className="rounded-full" /> 
                <p className="text-xs text-muted-foreground">{product.restaurant.name}</p>
                </div>
                <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">               
                    {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(product.price)}
                </h3>
                <div className="flex items-center gap-3 text-center">
                    <Button variant="outline" size="icon" className="w-8 h-8 rounded-xl" onClick={handleDecreaseQuantity}>
                        <MinusIcon />
                    </Button>
                    <p className="text-sm font-medium w-4">{quantity}</p>
                    <Button variant="destructive" size="icon" className="w-8 h-8 rounded-xl" onClick={handleIncreaseQuantity}>
                        <PlusIcon />
                    </Button>
                </div>
                </div>
                <div className="mt-6 space-y-3">
                    <h4 className="font-semibold">Sobre</h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
                <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-1">  
                        <ChefHatIcon size={18} />                  
                        <h4 className="font-semibold">Ingredientes</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{product.ingredients}</p>
                </div>
                <Button className="w-full mt-6 rounded-full">Adicionar à sacola</Button>
            </div>
        </div>
     );
}
 
export default ProductDetails;
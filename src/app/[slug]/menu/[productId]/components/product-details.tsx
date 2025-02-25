import { Prisma } from "@prisma/client"; 
import { PlusIcon } from "lucide-react";
import { MinusIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{ include: { restaurant: {select: {name: true, avatarImageUrl: true}} } }>;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
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
                    <Button variant="outline" size="icon" className="w-8 h-8 rounded-xl">
                        <MinusIcon />
                    </Button>
                    <p className="text-sm font-medium w-4">1</p>
                    <Button variant="destructive" size="icon" className="w-8 h-8 rounded-xl">
                        <PlusIcon />
                    </Button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;
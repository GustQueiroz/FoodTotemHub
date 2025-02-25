import { ScrollTextIcon } from "lucide-react";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

interface ProductPageProps {
    params: Promise<{ slug: string, productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {

    const { slug, productId } = await params;
    const product = await db.product.findUnique({ where: { id: productId } });
    if (!product) {
        return notFound();
    }
    return ( 
        <div className="">
            <div className="relative h-[300px] w-full">
            <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 rounded-full"

      >
        <ChevronLeftIcon />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 rounded-full"
      >
        <ScrollTextIcon />
      </Button>
                <Image src={product.imageUrl} alt={product.name} fill className="object-contain" />
            </div>
            <h1>{slug}</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
     ); 
}
 
export default ProductPage;
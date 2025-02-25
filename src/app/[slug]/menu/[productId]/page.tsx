import { notFound } from "next/navigation";

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
        <div>
            <h1>{slug}</h1>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
     ); 
}
 
export default ProductPage;
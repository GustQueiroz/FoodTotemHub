
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon, ScrollText } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/helpers/format-currency";

interface OrderListProps {
    orders: Prisma.OrderGetPayload<{
        include: {
            restaurant: {
                select: {
                name: true,
                avatarImageUrl: true
              };
            };
            orderProducts: {
                include: {
                    product: true
                }
            }
        };
    }>[];
}

const OrderList = ({ orders }: OrderListProps) => {
    return ( 
        <div className="space-y-6 p-6">
            <Button size="icon" variant="secondary" className="rounded-full">
                <ChevronLeftIcon className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-3">
                <ScrollText className="w-4 h-4" />
                <h2 className="text-lg font-semibold">Meus Pedidos</h2>
            </div>
            {orders.map((order) => (
                <Card key={order.id}>
                    <CardContent className="p-5 space-y-4">
                        <div className="w-fit rounded-full px-2 py-1 text-xs font-semibold bg-gray-500 text-white">
                            <span className="text-white">Em preparo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative h-5 w-5">
                                <Image src={order.restaurant.avatarImageUrl} alt={order.restaurant.name} fill className="rounded-sm" />
                            </div>
                            <p className="text-sm font-semibold">{order.restaurant.name}</p>
                        </div>
                        <Separator />
                        {order.orderProducts.map((orderProduct) => (
                            <div key={orderProduct.id} className="flex items-center gap-2">
                                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-400 text-white text-xs font-semibold">
                                    <p className="text-xs font-semibold">{orderProduct.quantity}</p>
                                </div>
                                <p className="text-sm font-semibold">{orderProduct.product.name}</p>
                            </div>
                        ))}
                        <Separator />
                        <p className="text-sm font-medium">{formatCurrency(order.total)}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
     );
}
 
export default OrderList;
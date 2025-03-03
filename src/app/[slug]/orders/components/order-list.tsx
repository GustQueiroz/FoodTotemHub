import { Order } from "@prisma/client";
import { ChevronLeftIcon, ScrollText } from "lucide-react";

import { Button } from "@/components/ui/button";


interface OrderListProps {
    orders: Order[]
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
                <div key={order.id}>
                    <h3>{order.id}</h3>
                </div>
            ))}
        </div>
     );
}
 
export default OrderList;
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/prisma";

import { formatCPF, validateCPF } from "../menu/helpers/cpf";
import CpfForm from "./components/cpf-form";
import OrderList from "./components/order-list";
interface OrdersPageProps {
  searchParams: Promise<{ cpf: string }>;
}


const OrdersPage = async ({ searchParams }: OrdersPageProps) => {
  const { cpf } = await searchParams;
  if (!cpf) {
    return <CpfForm />;
  }
  if (!validateCPF(cpf)) {
    return <CpfForm />;
  }
  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      customerCPF: formatCPF(cpf)
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true
        }
      },
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  })

  return <div className="space-y-6 p-6">  
    <Button size="icon" variant="secondary" className="rounded-full">
    <ChevronLeftIcon className="w-4 h-4"/></Button>
    <OrderList orders={orders} />;
  </div>

};

export default OrdersPage;

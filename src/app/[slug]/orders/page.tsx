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

  // Remove a formatação para validar
  const cleanCPF = cpf.replace(/\D/g, "");
  
  if (!validateCPF(cleanCPF)) {
    return <CpfForm />;
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc"
    },
    where: {
      customerCPF: formatCPF(cleanCPF)
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

  return <OrderList orders={orders} />;
};

export default OrdersPage;

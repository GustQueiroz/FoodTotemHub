import { db } from "@/lib/prisma";

import { validateCPF } from "../menu/helpers/cpf";
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
    where: {
      customerCPF: cpf
    }
  })
  return <OrderList orders={orders} />;
};

export default OrdersPage;

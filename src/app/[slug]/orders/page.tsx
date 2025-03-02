interface OrdersPageProps {
  searchParams: Promise<{ cpf: string }>;
}

const OrdersPage = async ({ searchParams }: OrdersPageProps) => {
  const { cpf } = await searchParams;
  if (!cpf) {
    return <h1>CPF não encontrado</h1>;
  }
  return <h1>Orders</h1>;
};

export default OrdersPage;

"use server";

interface CreateOrderInput {
  customerName: string;
  customerCPF: string;
  products: Array<{
    id: string;
    price: number;
    quantity: number;
  }>;
  consumptionMethod: string;
  restaurantSlug: string;
}

export const createOrder = async (input: CreateOrderInput) => {};

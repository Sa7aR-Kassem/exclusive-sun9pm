import { getMyOrders } from "@/services/order.service";
import React from "react";

export default async function MyOrdersPage() {
  const orders = await getMyOrders();
  console.log(orders);

  return <div>MyOrdersPage</div>;
}

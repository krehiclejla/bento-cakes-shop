"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

//supabase client setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Order = {
  id: number;
  customer_name: string;
  total_price: number;
  order_date: string;
};

const CartPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  //check if the user is logged in
  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user?.email) {
      setIsLoggedIn(true);
      fetchOrders(session.user.email); //pass the user's email to fetch orders
    } else {
      setIsLoggedIn(false);
      console.error("User is not logged in or email is undefined.");
    }
  };

  //fetch orders for the logged-in user
  const fetchOrders = async (userEmail: string | undefined) => {
    if (!userEmail) {
      console.error("User email is undefined. Cannot fetch orders.");
      return;
    }

    const { data, error } = await supabase
      .from("orders")
      .select("id, customer_name, total_price, order_date")
      .eq("customer_name", userEmail);

    if (error) {
      console.error("Error fetching orders:", error.message);
    } else {
      setOrders(data || []);
    }
  };

  //delete an order from the cart
  const deleteOrder = async (orderId: number) => {
    const { error } = await supabase.from("orders").delete().eq("id", orderId);

    if (error) {
      console.error("Error deleting order:", error.message);
    } else {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
      alert("Order deleted successfully.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">You must log in to view the cart.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li
              key={order.id}
              className="flex justify-between items-center p-4 border rounded-md shadow-sm"
            >
              <div>
                <p className="font-semibold">Order ID: {order.id}</p>
                <p>Customer: {order.customer_name}</p>
                <p>Total Price: ${order.total_price.toFixed(2)}</p>
                <p>Date: {new Date(order.order_date).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => deleteOrder(order.id)}
                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

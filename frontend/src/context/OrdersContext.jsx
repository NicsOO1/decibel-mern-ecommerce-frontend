import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";
const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  // load orders from db
  useEffect(() => {
    if (!user?.id) return;
    const loadUserOrders = async () => {
      const res = await api.get(`/orders?userId=${user.id}`);
      setOrders(res.data);
    };

    loadUserOrders();
  }, [user?.id]);

  // create new order
  const createNewOrder = async (orderData) => {
    const res = await api.post(`/orders`, orderData);
    setOrders((prev) => [...prev, res.data]);

    return res.data;
  };

  //cancel order
  const cancelOrder = async (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "Cancelled" } : order
      )
    );

    try {
      await api.patch(`/orders/${orderId}`, { status: "Cancelled" });
      toast.success(`Order with id ${orderId} has been cancelled`)
    } catch (error) {
      console.error("Failed to cancel:", error)
      toast.error(`Failed to cancel order with ${orderId}`)
    } 
  };

  return (
    <OrderContext.Provider value={{ orders, createNewOrder, cancelOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);

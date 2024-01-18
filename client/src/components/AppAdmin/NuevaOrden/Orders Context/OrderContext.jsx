import { createContext, useState, useContext } from "react";

// Crear un contexto para las órdenes
export const OrderContext = createContext(null);

// Proveedor del contexto para gestionar el estado de las órdenes
export const OrderContextProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  const clearOrders = () => {
    setOrders([]);
    setIsDataSaved(false);
  };

  const contextValue = {
    orders,
    addOrder,
    clearOrders,
    isDataSaved,
    setIsDataSaved,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {props.children}
    </OrderContext.Provider>
  );
};

// Hook personalizado para acceder al contexto fácilmente
export const useOrderContext = () => {
  return useContext(OrderContext);
};

import React, { createContext, useState } from 'react';

// Types
import { Order } from 'types';

interface OrderContext {
  orders: Order[];
  addOrders: (order: Order[]) => void;
}

interface Props {
  value: Order[];
}

const Context = createContext<OrderContext>({} as OrderContext);

const Provider: React.FC<Props> = ({ children, value }) => {
  const [orders, setOrders] = useState<Order[]>(value);

  const addOrders = (order: Order[]) => {
    setOrders((currentOrders) => [...currentOrders, ...order]);
  };

  const contextValue = {
    orders,
    addOrders
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default { Context, Provider };

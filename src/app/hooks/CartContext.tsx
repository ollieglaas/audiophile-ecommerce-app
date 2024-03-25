"use client";
import { useToast } from "@chakra-ui/react";
import React, { createContext, useContext, useReducer, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "REMOVE_ALL" };

const initialState: CartItem[] = [];

const CartContext = createContext<{
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number, itemName: string) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  removeAll: () => void;
  idCounter: number;
  totalCost: number | null;
}>({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  removeAll: () => {},
  idCounter: 1,
  totalCost: null,
});

const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
    case "REMOVE_ALL":
      return [];
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  const [idCounter, setIdCounter] = useState(1);
  const toast = useToast();

  const addItem = (item: CartItem) => {
    const itemExists = cart.find((cartItem) => cartItem.name === item.name);
    if (itemExists && item.quantity < 10) {
      return;
    }
    dispatch({ type: "ADD_ITEM", payload: item });
    setIdCounter(idCounter + 1);
  };

  const removeItem = (itemId: number, itemName: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
    toast({
      title: "Item removed.",
      description: itemName + " has been removed from your cart.",
      status: "error",
      duration: 5000,
      isClosable: true,
      variant: "subtle",
    });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: itemId, quantity } });
  };

  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const totalCost = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        removeAll,
        idCounter,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

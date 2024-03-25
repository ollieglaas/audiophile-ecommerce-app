"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "./hooks/CartContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      toastOptions={{ defaultOptions: { position: "bottom-right" } }}
    >
      <CartProvider>{children}</CartProvider>
    </ChakraProvider>
  );
}

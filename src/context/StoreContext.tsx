import { createContext, useContext, ReactNode, useMemo } from "react";
import { products } from "@/data/products";

interface StoreContextType {
  totalItemsInStore: number; // total quantity of all products
}

const StoreContext = createContext<StoreContextType>({} as StoreContextType);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const totalItemsInStore = useMemo(() => {
    return products.reduce((sum, product) => {
      const productTotal = product.variants.reduce(
        (variantSum, variant) => variantSum + variant.quantity,
        0
      );
      return sum + productTotal;
    }, 0);
  }, []);

  return (
    <StoreContext.Provider value={{ totalItemsInStore }}>
      {children}
    </StoreContext.Provider>
  );
};

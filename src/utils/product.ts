// utils/product.ts
import { Product } from "@/data/products";

export const getVariantStock = (
  product: Product,
  color: string,
  size: string
): number => {
  const variant = product.variants.find(
    (v) => v.color === color && v.size === size
  );
  return variant?.quantity ?? 0;
};

import { FinancialProduct } from "@/types";
import { mockProducts } from "@/data/mock-products";

export const getProducts = async (): Promise<FinancialProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 300);
  });
};

export const getProductById = async (
  id: string
): Promise<FinancialProduct | null> => {
  return new Promise((resolve) => {
    const product = mockProducts.find((p) => p.id === id) || null;
    
    setTimeout(() => {
      resolve(product);
    }, 300);
  });
};

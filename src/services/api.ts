import { FinancialProduct } from "@/types";

export const getProducts = async (): Promise<FinancialProduct[]> => {
  return new Promise((resolve) => {
    import("@/data/mock-products").then(({ mockProducts }) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 300);
    });
  });
};

export const getProductById = async (
  id: string
): Promise<FinancialProduct | null> => {
  return new Promise((resolve) => {
    import("@/data/mock-products").then(({ mockProducts }) => {
      setTimeout(() => {
        const product = mockProducts.find((p) => p.id === id) || null;
        resolve(product);
      }, 300);
    });
  });
};

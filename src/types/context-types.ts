import { FinancialProduct } from "./entities";
import { ProductCategory } from "./domain-types";

export interface ProductContextType {
  products: FinancialProduct[];
  selectedCategory: ProductCategory | "all";
  setSelectedCategory: (category: ProductCategory | "all") => void;
  filteredProducts: FinancialProduct[];
  categories: ProductCategory[];
  loading: boolean;
}

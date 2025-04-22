import { ReactNode, ButtonHTMLAttributes } from "react";
import { ImageProps } from "next/image";
import { FinancialProduct } from "./entities";
import { ProductCategory } from "./domain-types";

export interface MainLayoutProps {
  children: ReactNode;
}

export interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white-outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  className?: string;
}

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  rounded?: boolean;
  className?: string;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

export interface InfoRowProps {
  label: string;
  value: ReactNode;
  className?: string;
}

export interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
}

export interface ProductCardProps {
  product: FinancialProduct;
}

export interface ProductDetailProps {
  product: FinancialProduct;
}

export interface ProductInfoProps {
  product: FinancialProduct;
}

export interface CategoryTabsProps {
  categories: ProductCategory[];
  selectedCategory: ProductCategory | "all";
  onSelectCategory: (category: ProductCategory | "all") => void;
}

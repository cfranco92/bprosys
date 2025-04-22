// Resultado del hook useImageLoader
export interface UseImageLoaderResult {
  imageLoading: boolean;
  imageError: boolean;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

// Props para el componente ProductImage
export interface ProductImageProps {
  imageUrl: string;
  name: string;
  type: string;
  className?: string;
} 
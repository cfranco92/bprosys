export interface UseImageLoaderResult {
  imageLoading: boolean;
  imageError: boolean;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

export interface ProductImageProps {
  imageUrl: string;
  name: string;
  type: string;
  className?: string;
}

import { useState, useCallback } from 'react';
import { UseImageLoaderResult } from '@/types';

export const useImageLoader = (): UseImageLoaderResult => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoading(false);
  }, []);

  return {
    imageLoading,
    imageError,
    handleImageLoad,
    handleImageError
  };
}; 
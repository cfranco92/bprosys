'use client';

import Image from 'next/image';
import { useImageLoader } from '@/hooks/useImageLoader';
import { ProductImageProps } from '@/types';

export const ProductImage = ({ imageUrl, name, type, className = '' }: ProductImageProps) => {
  const { imageLoading, imageError, handleImageLoad, handleImageError } = useImageLoader();

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={imageUrl}
        alt={name}
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className={`object-cover transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div>Cargando imagen...</div>
        </div>
      )}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-600">
          <div>
            <p className="font-bold mb-2">{name}</p>
            <p>{type}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductImage; 
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ImageWithFallbackProps } from '@/models';

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = '/images/products/fondo-inversion.jpg',
  className,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    
    if (src) {
      setImgSrc(src as string);
    } else {
      setImgSrc(fallbackSrc);
    }
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    } else {
      setError(true);
    }
  };

  if (!imgSrc || error) {
    return (
      <div 
        className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 text-sm"
        data-testid="image-placeholder"
      >
        <div className="p-4 text-center">
          {alt || 'Imagen no disponible'}
        </div>
      </div>
    );
  }

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default ImageWithFallback; 
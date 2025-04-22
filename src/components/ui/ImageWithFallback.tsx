'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface ImageWithFallbackProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

const PlaceholderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9e9e9e;
  font-size: 0.875rem;
`;

const PlaceholderText = styled.div`
  padding: 1rem;
  text-align: center;
`;


export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = '/images/products/placeholder.jpg',
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
      <PlaceholderContainer data-testid="image-placeholder">
        <PlaceholderText>{alt || 'Imagen no disponible'}</PlaceholderText>
      </PlaceholderContainer>
    );
  }

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
};

export default ImageWithFallback; 
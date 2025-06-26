import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

interface OptimizedImageProps extends Omit<BoxProps, 'children'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  fillContainer?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  unoptimized?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fillContainer = false,
  objectFit = 'cover',
  objectPosition = 'center',
  loading = 'lazy',
  unoptimized = false,
  ...boxProps
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || typeof window === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Generate low-quality placeholder
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, w, h);
    }
    return canvas.toDataURL();
  };

  const shouldRender = priority || isInView;

  return (
    <Box
      ref={imgRef}
      position="relative"
      overflow="hidden"
      bg={!isLoaded ? 'gray.100' : 'transparent'}
      transition="background-color 0.3s ease"
      {...boxProps}
      width={fillContainer ? '100%' : width}
      height={fillContainer ? '100%' : height}
    >
      {shouldRender && !hasError && (
        <>
          {/* Loading skeleton */}
          {!isLoaded && (
            <Box
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)"
              backgroundSize="200% 100%"
              animation="loading 1.5s infinite"
              zIndex={1}
            />
          )}
          
          {/* Actual image */}
          <Image
            src={src}
            alt={alt}
            width={!fillContainer ? width : undefined}
            height={!fillContainer ? height : undefined}
            fill={fillContainer}
            priority={priority}
            quality={quality}
            placeholder={placeholder}
            blurDataURL={
              blurDataURL || 
              (placeholder === 'blur' && width && height 
                ? generateBlurDataURL(width, height) 
                : undefined)
            }
            sizes={sizes}
            style={{
              objectFit: fillContainer ? objectFit : undefined,
              objectPosition: fillContainer ? objectPosition : undefined,
              transition: 'opacity 0.3s ease',
              opacity: isLoaded ? 1 : 0,
            }}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : loading}
            unoptimized={unoptimized}
          />
        </>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          bg="gray.100"
          color="gray.500"
          fontSize="sm"
        >
          Failed to load image
        </Box>
      )}
      
      {/* CSS for loading animation */}
      <style jsx>{`
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </Box>
  );
};

export default OptimizedImage; 
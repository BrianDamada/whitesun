import React, { useState, useEffect, useRef } from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-1 p-0 lg:gap-3">
      {images.map((image, index) => (
        <ImageItem key={index} src={image} alt={`imagem-${index}`} />
      ))}
    </div>
  );
};

const ImageItem = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Aciona quando 10% da imagem estiver visível
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup quando o componente for desmontado
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={` hover:scale-[110%] cursor-pointer w-full h-auto object-cover transition-all duration-1000 ${
          isVisible ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      />
    </div>
  );
};

export default ImageGrid;

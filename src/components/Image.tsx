import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const Image: React.FC<ImageProps> = ({ alt, src, onClick }) => {
  return (
    <div className="cursor-pointer rounded hover:opacity-90" onClick={onClick}>
      <img src={src} alt={alt} className="rounded w-full h-auto" />
    </div>
  );
};

export default Image;

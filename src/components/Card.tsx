import React, { useCallback, useEffect, useState } from "react";
import Image from "./Image";

interface CardProps {
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ title, image }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const closePreview = useCallback(() => setPreviewImage(null), []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
    };

    window.addEventListener("keyup", handleKeyDown, false);
    return () => window.removeEventListener("keyup", handleKeyDown);
  }, [closePreview]);

  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-md">
        <Image
          alt={title}
          src={import.meta.env.BASE_URL + image}
          onClick={() => setPreviewImage(image)}
        />
        <h2 className="text-lg font-semibold text-black">{title}</h2>
      </div>

      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl bg-red-500 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={closePreview}
          >
            &times;
          </button>
          <img
            src={previewImage}
            alt="preview image"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </>
  );
};

export default Card;

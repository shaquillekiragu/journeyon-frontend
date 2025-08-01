import React from "react";
import type { ImageQuoteBannerProps } from "../interfaces";

const ImageQuoteBanner: React.FC<ImageQuoteBannerProps> = ({
  imageSrc,
  quote,
}) => {
  // Debug logging
  console.log("ImageQuoteBanner - imageSrc:", imageSrc);

  return (
    <div className="relative w-full h-full flex justify-center *:!h-1/2">
      <img
        src={imageSrc}
        alt="Motivational background"
        onLoad={() => console.log("Image loaded successfully!")}
        onError={(e) => console.error("Image failed to load:", e)}
      />
      {/* Cool blue tint overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(70, 130, 180, 0.5)" }}
      ></div>
      {/* Quote overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight drop-shadow-lg">
            {quote}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageQuoteBanner;

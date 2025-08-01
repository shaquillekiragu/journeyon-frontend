import React, { useState, useEffect, useMemo } from "react";

interface ImageQuoteBannerProps {
  imageSrc: string;
}

const ImageQuoteBanner: React.FC<ImageQuoteBannerProps> = ({
  imageSrc,
}) => {
  const motivationalMessages = useMemo(() => [
    "Confidence doesn’t come from knowing everything – it comes from knowing you can learn anything.",
  "Every setback is a setup for a comeback; keep going and you’ll achieve more than you thought possible.",
  "Success isn’t about perfection, it’s about effort – the more you try, the tougher you become.",
  "Your potential is boundless; embrace challenges and watch yourself flourish.",
  "Learning is a journey, not a destination—celebrate every step forward.",
  "Mistakes are proof that you’re trying; each one brings you closer to mastery.",
  "Believe in your ability to improve; every bit of practice counts.",
  "Curiosity is your greatest guide—ask questions and let discovery inspire you.",
  "Hard work today plants the seeds for tomorrow’s success; keep sowing effort daily.",
  "You have all you need to grow; trust the process and respect your progress."
  ], []);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const currentMessage = motivationalMessages[currentMessageIndex];
    
    if (currentCharIndex < currentMessage.length) {
      // Typing effect - add one character at a time
      const typingTimer = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 50); // 50ms delay between characters for smooth typing

      return () => clearTimeout(typingTimer);
    } else {
      // Message complete, wait 3 seconds then move to next message
      const waitTimer = setTimeout(() => {
        setCurrentCharIndex(0);
        setDisplayedText("");
        setCurrentMessageIndex((prevIndex) => 
          (prevIndex + 1) % motivationalMessages.length
        );
      }, 3000); // 3 second pause

      return () => clearTimeout(waitTimer);
    }
  }, [currentCharIndex, currentMessageIndex, motivationalMessages]);

  // Debug logging
  console.log("ImageQuoteBanner - imageSrc:", imageSrc);

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 10rem)" }}>
      <img
        src={imageSrc}
        alt="Motivational background"
        className="w-full h-full object-cover"
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
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-normal leading-tight drop-shadow-lg min-h-[200px] flex items-center justify-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageQuoteBanner;

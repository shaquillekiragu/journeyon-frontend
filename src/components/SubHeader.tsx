import { useState, useEffect } from "react";

interface SubHeaderProps {
  text: string;
  name: string
}

const SubHeader = ({ text, name }: SubHeaderProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const fullMessage = `Welcome back, ${name}! ${text}`;

  useEffect(() => {
    if (currentCharIndex < fullMessage.length) {
      // Typing effect - add one character at a time
      const typingTimer = setTimeout(() => {
        setDisplayedText(fullMessage.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, 60); // 80ms delay between characters for readable speed

      return () => clearTimeout(typingTimer);
    }
  }, [currentCharIndex, fullMessage]);

  // Reset animation when props change (page refresh or navigation)
  useEffect(() => {
    setCurrentCharIndex(0);
    setDisplayedText("");
  }, [name, text]);

  return (
    <section className="w-full flex justify-center py-6">
      <div
        className="text-black text-3xl font-light rounded-lg px-15 py-2 text-center"
        style={{ backgroundColor: "#b6a79a" }}
      >
        {displayedText}
        {currentCharIndex < fullMessage.length && (
          <span className="animate-pulse ml-1">|</span>
        )}
      </div>
    </section>
  );
};

export default SubHeader;

<<<<<<< HEAD
import { useProgress } from "../hooks/useProgress";
import { getProgressPercentage } from "../utils/motivationalMessages";
import type { SubHeaderProps } from "../interfaces";

const SubHeader = ({ text, showProgress = false, totalItems = 10 }: SubHeaderProps) => {
  const { completedItems } = useProgress();
  const completedCount = completedItems.size;
  const progressPercentage = getProgressPercentage(completedCount, totalItems);

  return (
    <section className="w-full flex justify-center py-6">
      <div
        className="text-black text-2xl font-light rounded-lg px-15 py-2"
        style={{ backgroundColor: "#b6a79a" }}
      >
        <div className="text-center">
          Welcome back, Nabiha! {text}
          {showProgress && (
            <div className="mt-3">
              <div className="text-sm mb-2 opacity-80">
                Progress: {completedCount}/{totalItems} ({progressPercentage}% Complete)
              </div>
            </div>
          )}
        </div>
=======
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
>>>>>>> 77051037a3a475bd7e0f932602dfc391f6c27f10
      </div>
    </section>
  );
};

export default SubHeader;

export const getMotivationalMessage = (completedCount: number, totalItems: number): string => {
  const percentage = totalItems > 0 ? (completedCount / totalItems) * 100 : 0;
  
  if (percentage === 0) {
    return "Every journey begins with a single step! 🚀";
  } else if (percentage <= 10) {
    return "Great start! You're building momentum! 💪";
  } else if (percentage <= 20) {
    return "You're getting into the rhythm! Keep going! ⚡";
  } else if (percentage <= 30) {
    return "Fantastic progress! You're on fire! 🔥";
  } else if (percentage <= 40) {
    return "Look at you go! Consistency is key! 🌟";
  } else if (percentage <= 50) {
    return "Halfway there! You're unstoppable! 💯";
  } else if (percentage <= 60) {
    return "More than halfway! The momentum is strong! 🙌";
  } else if (percentage <= 70) {
    return "You're in the zone! Excellence in action! ⭐";
  } else if (percentage <= 80) {
    return "Almost there! Your dedication shows! 🏆";
  } else if (percentage <= 90) {
    return "So close! The finish line awaits! 🏁";
  } else if (percentage < 100) {
    return "Final stretch! You've got this champion! 👑";
  } else {
    return "You've completed your journey! Congratulations! 🎉";
  }
};

export const getProgressPercentage = (completedCount: number, totalItems: number): number => {
  return totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
};

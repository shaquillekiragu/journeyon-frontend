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
      </div>
    </section>
  );
};

export default SubHeader;

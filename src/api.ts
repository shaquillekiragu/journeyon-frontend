const quotes: string[] = [
  "Mastery isn't about having all the answers—it's about having the courage to keep asking questions.",
  "You don't need to be fearless to move forward—just willing to face the unknown with curiosity.",
  "Growth begins the moment you stop fearing what you don't know and start embracing what you can become.",
  "Confidence doesn't come from knowing everything - it comes from knowing you can learn anything",
  "The strongest minds aren't the ones that know the most, but the ones most open to learning.",
  "Progress isn't perfection—it's persistence in the face of not knowing.",
  "You don't have to be ready—you just have to be willing.",
];

const randGen: (min: number, max: number) => number = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
export const getQuote: () => string = () => quotes[randGen(0, quotes.length)];

interface SubHeaderProps {
  text: string;
}

const SubHeader = ({ text }: SubHeaderProps) => {
  return (
    <section className="w-full flex justify-center py-6">
      <div
        className="text-black text-3xl font-light rounded-lg px-15 py-2"
        style={{ backgroundColor: "#b6a79a" }}
      >
        Welcome back, Nabiha! {text}
      </div>
    </section>
  );
};

export default SubHeader;

interface SubHeaderProps {
  text: string;
  name: string
}

const SubHeader = ({ text, name }: SubHeaderProps) => {
  return (
    <section className="w-full flex justify-center py-6">
      <div
        className="text-black text-3xl font-light rounded-lg px-15 py-2 text-center"
        style={{ backgroundColor: "#b6a79a" }}
      >
        Welcome back, {name}! {text}
      </div>
    </section>
  );
};

export default SubHeader;

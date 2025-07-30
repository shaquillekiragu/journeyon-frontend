interface SubHeaderProps {
  text: string;
}

const SubHeader = ({ text }: SubHeaderProps) => {
  return (
    <section className="w-full px-9 py-6 text-center" style={{ backgroundColor: '#fdfbf1' }}>
      <p className="text-xl font-medium" style={{ color: '#5c7fa3' }}>
        Welcome back, Nabiha! {text}
      </p>
    </section>
  );
};

export default SubHeader;

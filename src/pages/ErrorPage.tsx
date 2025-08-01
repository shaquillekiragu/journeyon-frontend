import Header from "../components/Header";

export default function ErrorPage(): React.ReactElement {
  return (
    <>
      <Header />
      <main className="w-screen h-screen flex justify-center mt-[20%]">
        <h3 className="font-semibold">
          You do not have access to this page. Please sign in.
        </h3>
      </main>
    </>
  );
}

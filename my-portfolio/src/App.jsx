import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <h1 className="text-3xl font-bold underline">Hello world! </h1>
        <Button className="mt-10" href="#"></Button>
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;

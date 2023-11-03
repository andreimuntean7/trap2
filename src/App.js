import InputForm from "./components/InputForm.js";
import Header from "./components/Header.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="flex flex-col w-full">
        <h1 className="text-center">
          <Header />
        </h1>
        <div className="text-center justify-center pt-10 px-5">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App;

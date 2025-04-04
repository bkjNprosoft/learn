import { useGlobalNavOpenState } from "@/stores/store";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Main,
});

function Main() {
  const isOpen = useGlobalNavOpenState((state) => state.isOpen);

  useEffect(() => {
    document.title = "React";
  }, []);

  return (
    <main
      className={`${isOpen ? "pl-[200px]" : "pl-[50px]"} flex justify-center items-center w-screen h-screen transition-all duration-700`}
    >
      <p className="text-[9vw] font-bold">HELLO WORLD</p>
    </main>
  );
}

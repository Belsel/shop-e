import { useState, type JSX } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css"; // Aún necesario para @tailwind base/components/utilities

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <main className="min-h-screen min-w-[320px] m-0 flex flex-col items-center justify-center text-[#ffffffde] bg-[#ffffff] font-sans leading-[1.5] font-normal antialiased text-center">
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
        >
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#646cff] hover:text-[#535bf2] no-underline"
        >
          <img
            src={reactLogo}
            alt="React logo"
            className="h-24 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa]"
          />
        </a>
      </div>

      <h1 className="text-[3.2em] leading-[1.1] font-bold text-[#444444] mb-4">
        Vite + React
      </h1>

      <div className="p-8 border rounded shadow mb-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-[1.2em] py-[0.6em] text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-[#646cff] focus:outline focus:outline-4 focus:outline-blue-300"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-400">
          Edit{" "}
          <code className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      <p className="text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;

import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

// Explained useMemo() hook here:

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);

  // console.log("Rendering.....");
  return (
    <div
      className={
        isDarkTheme
          ? "mt-6 p-1 w-[250px] border border-black h-[250px] bg-black text-white"
          : "mt-6 p-1 w-[250px] border border-black h-[250px]"
      }
    >
      <div className="flex justify-center mb-2">
        {isDarkTheme ? (
          <button
            className="bg-green-200 px-2 text-black"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Light
          </button>
        ) : (
          <button
            className="bg-green-200 px-2"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Dark
          </button>
        )}
      </div>

      <h1>Demo</h1>
      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black p-2"
        />
      </div>
      <div>
        <h1 className="font-bold mt-4">nth Prime : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;

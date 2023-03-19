import React, { useRef, useState } from "react";

//Exlained useRef() hook here:

const Demo2 = () => {
  const [y, setY] = useState(0);
  const ref = useRef(0);
  //   console.log(ref);

  let x = 0;

  return (
    <div className="mt-6 p-1 w-[250px] border border-black h-[250px]">
      <div>
        <button
          className="bg-green-200 px-2 mr-2"
          onClick={() => {
            x = x + 1;
            console.log("x= ", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Let = {x}</span>
      </div>

      <div>
        <button
          className="bg-green-200 px-2 mr-2"
          onClick={() => {
            setY(y + 1);
            console.log("y= ", y);
          }}
        >
          Increase Y
        </button>
        <span className="font-bold text-xl">Const = {y}</span>
      </div>

      <div>
        <button
          className="bg-green-200 px-2 mr-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref= ", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;

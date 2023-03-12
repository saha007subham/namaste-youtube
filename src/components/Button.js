import React from "react";

const Button = ({ name }) => {
  //   console.log(props.name);
  return (
    <div>
      <button className="px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;

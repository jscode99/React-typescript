import React from "react";

type ButtonProps = {
  // * React type - Mouse event - Specifying it as button element
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  // *Whether the function is coming as a prop or it invoked it in the same place, types remain the same.
  // const handleInputChange = (event: React.MouseEvent<HTMLInputElement>) => {
  //   console.log(event);
  // };
  return (
    <div>
      <button onClick={(e) => props.handleClick(e, 1)}>Click Me</button>
    </div>
  );
}

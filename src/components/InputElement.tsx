import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputElement(props: InputProps) {
  return (
    <div>
      <input
        aria-label="typescript-input-element"
        value={props.value}
        onChange={(e) => props.handleChange(e)}
      />
    </div>
  );
}

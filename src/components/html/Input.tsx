import React from "react";

type CustomInputProps = React.ComponentProps<"input">;

export default function CustomInput(props: CustomInputProps) {
  return (
    <div>
      <input {...props} />
    </div>
  );
}

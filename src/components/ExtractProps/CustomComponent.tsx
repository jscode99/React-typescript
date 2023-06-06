import React from "react";
import Greet from "../Greet";

export default function CustomComponent(
  props: React.ComponentProps<typeof Greet>,
) {
  return <div>{props.name}</div>;
}

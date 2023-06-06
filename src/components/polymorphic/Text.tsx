import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export default function Text<E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) {
  const Elemet = as || "div";
  return (
    <Elemet className={`class-style-${size}-${color}`}> {children}</Elemet>
  );
}

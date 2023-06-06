/**
 * * 1. Component props for various elements or helps to wrap html elements React -
 * *    (ComponentProps<"element">)
 * * 2. Omit - Used to omit or remove some types which is automatically assigned by react/ts.
 * *    In case of children react assigned a 'ReactNode' type, were we want it only as string
 */

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export default function CustomButton({
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
}

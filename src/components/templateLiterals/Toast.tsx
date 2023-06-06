/**
 * * Positions can be either 'top-left','center-left', 'bottom-left' , 'top-right',     'center-right', 'bottom-right', top-center, center , bottom-center
 */

type VerticalPosition = "top" | "center" | "bottom";
type HorizontalPosition = "left" | "center" | "right";

type ToastProps = {
  // Template literals & Exclude keyword
  position:
    | Exclude<`${VerticalPosition}-${HorizontalPosition}`, "center-center">
    | "center";
};

export default function Toast({ position }: ToastProps) {
  return <div>Toast is {position}</div>;
}

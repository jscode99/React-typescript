import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          backgroundColor: theme.primary.bg,
          color: theme.primary.color,
        }}
      >
        Box 1
      </div>
      <br />
      <div
        style={{
          backgroundColor: theme.secondary.bg,
          color: theme.secondary.color,
        }}
      >
        Box 2
      </div>
    </>
  );
}

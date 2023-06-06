import { useRef, useEffect } from "react";

export default function DomRef() {
  /**
   * * We can add non null assertion to useRef initial value, if we are sure about
   * * the value which is not going to be null (null!)
   */
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input aria-label="auto-focus" type="text" ref={inputRef} />
    </div>
  );
}

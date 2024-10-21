import clsx from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

const Toggle = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, forwardedRef) => {
  return (
    <label
      htmlFor={props.id}
      className={clsx(
        "relative inline-block h-6 w-10 cursor-pointer rounded-full bg-gray-500 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-600",
        className,
      )}
    >
      <input
        type="checkbox"
        ref={forwardedRef}
        className="peer sr-only"
        {...props}
      />

      <span className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-100 transition-all peer-checked:start-6"></span>
    </label>
  );
});

Toggle.displayName = "Toggle";

export default Toggle;

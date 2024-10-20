import React, { forwardRef, SelectHTMLAttributes } from "react";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, forwardedRef) => (
  <select
    ref={forwardedRef}
    className={`rounded border border-gray-300 px-3 py-2 text-sm dark:bg-gray-800 ${className}`}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";

export default Select;

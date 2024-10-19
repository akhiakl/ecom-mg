import React, { forwardRef, SelectHTMLAttributes } from "react";

const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(({ className, children, ...props }, forwardedRef) => (
  <select
    ref={forwardedRef}
    className={`py-2 px-3 rounded border dark:bg-gray-800 border-gray-300 text-sm ${className}`}
    {...props}
  >
    {children}
  </select>
));

Select.displayName = "Select";

export default Select;

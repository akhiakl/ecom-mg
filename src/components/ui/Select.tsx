import React, { forwardRef, SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, label, ...props }, forwardedRef) => (
    <div className={className}>
      <label
        htmlFor={props.id}
        className="block text-xs font-medium text-gray-700"
      >
        {label}
      </label>

      <select
        ref={forwardedRef}
        className="mt-1 rounded border border-gray-300 px-3 py-2 text-sm capitalize dark:bg-gray-800"
        {...props}
      >
        {children}
      </select>
    </div>
  ),
);

Select.displayName = "Select";

export default Select;

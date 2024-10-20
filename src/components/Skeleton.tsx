import clsx from "clsx";
import React, { CSSProperties } from "react";
import { forwardRef } from "react";

type Props = Pick<CSSProperties, "height" | "width"> & {
  className?: string;
};

const Skeleton = forwardRef<HTMLDivElement, Props>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        style={props}
        className={clsx(
          "animate-pulse rounded-full bg-gray-200 dark:bg-gray-700",
          className,
        )}
      ></div>
    );
  },
);

Skeleton.displayName = "Skeleton";

export default Skeleton;

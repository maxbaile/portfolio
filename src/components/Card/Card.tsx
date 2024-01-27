import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={classNames(
          "relative w-full text-left ring-1 rounded-portal-default p-6",
          "bg-portal-background ring-portal-ring shadow-portal-card",
          // dark
          "dark:bg-dark-portal-background dark:ring-dark-portal-ring dark:shadow-dark-portal-card",
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

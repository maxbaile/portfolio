"use client";
import { Color, Size, Sizes, colorPalette } from "@/lib";
import classNames from "classnames";
import { FC, HTMLAttributes, forwardRef } from "react";
import { badgeProportions } from "./styles";
import { getColorClassNames } from "@/lib/utils";

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Size;
  color?: Color;
  dot?: boolean;
}

const Tag = forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    dot = false,
    size = Sizes.SM,
    color,
    className,
    children,
    ...rest
  } = props;

  return (
    <span
      ref={ref}
      className={classNames(
        "w-max shrink-0 inline-flex justify-center items-center cursor-default rounded-md",
        color
          ? classNames(
              getColorClassNames(color, colorPalette.background).bgColor,
              getColorClassNames(color, colorPalette.text).textColor,
              "bg-opacity-20 dark:bg-opacity-25"
            )
          : classNames(
              "bg-portal-brand-muted text-portal-brand-emphasis",
              "bg-dark-portal-brand-muted text-dark-portal-brand-emphasis"
            ),
        badgeProportions[size].paddingX,
        badgeProportions[size].paddingY,
        badgeProportions[size].fontSize,
        className
      )}
      {...rest}
    >
      {dot ? (
        <svg
          className={classNames(
            "h-1.5 w-1.5 shrink-0 mr-1.5",
            color
              ? classNames(
                  getColorClassNames(color, colorPalette.background).fillColor
                )
              : classNames(
                  "fill-portal-brand-emphasis",
                  "fill-dark-portal-brand-emphasis"
                )
          )}
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
      ) : null}
      <p className="text-sm whitespace-nowrap">{children}</p>
    </span>
  );
});

Tag.displayName = "Tag";

export default Tag;

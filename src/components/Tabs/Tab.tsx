"use client";

import { Tab as HeadlessTab } from "@headlessui/react";
import { Color, colorPalette } from "@/lib";
import { TabVariant, TabVariantContext } from "./TabList";
import classNames from "classnames";
import { getColorClassNames } from "@/lib/utils";
import { forwardRef, useContext } from "react";
import { BaseColorContext } from "@/contexts";

function getVariantStyles(tabVariant: TabVariant, color?: Color) {
  switch (tabVariant) {
    case "line":
      return classNames(
        // common
        "ui-selected:border-b-2 hover:border-b-2 border-transparent transition duration-100 -mb-px px-2 py-2",
        // light
        "hover:border-portal-content hover:text-portal-content-emphasis text-portal-content",
        // dark
        "dark:hover:border-dark-portal-content-emphasis dark:hover:text-dark-portal-content-emphasis dark:text-dark-portal-content",
        // brand
        color
          ? getColorClassNames(color, colorPalette.border).selectBorderColor
          : "ui-selected:border-portal-brand dark:ui-selected:border-dark-portal-brand"
      );
    case "solid":
      return classNames(
        // common
        "border-transparent border rounded-portal-small px-2.5 py-1",
        // light
        "ui-selected:border-portal-border ui-selected:bg-portal-background ui-selected:shadow-portal-input hover:text-portal-content-emphasis ui-selected:text-portal-brand",
        // dark
        "dark:ui-selected:border-dark-portal-border dark:ui-selected:bg-dark-portal-background dark:ui-selected:shadow-dark-portal-input dark:hover:text-dark-portal-content-emphasis dark:ui-selected:text-dark-portal-brand",
        // brand
        color
          ? getColorClassNames(color, colorPalette.text).selectTextColor
          : "text-portal-content dark:text-dark-portal-content"
      );
  }
}

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
}

const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { icon, className, children, ...other } = props;

  const variant = useContext(TabVariantContext);
  const color = useContext(BaseColorContext);
  const Icon = icon;
  return (
    <HeadlessTab
      ref={ref}
      className={classNames(
        // common
        "flex whitespace-nowrap truncate max-w-xs outline-none focus:ring-0 text-portal-default transition duration-100",
        // brand
        color
          ? getColorClassNames(color, colorPalette.text).selectTextColor
          : variant === "solid"
          ? "ui-selected:text-portal-content-emphasis dark:ui-selected:text-dark-portal-content-emphasis"
          : "ui-selected:text-portal-brand dark:ui-selected:text-dark-portal-brand",
        getVariantStyles(variant, color),
        className
      )}
      {...other}
    >
      {Icon ? (
        <Icon
          className={classNames("flex-none h-5 w-5", children ? "mr-2" : "")}
        />
      ) : null}
      {children ? <span>{children}</span> : null}
    </HeadlessTab>
  );
});

Tab.displayName = "Tab";

export default Tab;

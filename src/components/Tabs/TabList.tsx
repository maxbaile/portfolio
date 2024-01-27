"use client";
import { BaseColorContext } from "@/contexts";
import { Color } from "@/lib";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { PropsWithChildren, createContext, forwardRef } from "react";

export type TabVariant = "line" | "solid";

export const TabVariantContext = createContext<TabVariant>("line");

const variantStyles: { [key in TabVariant]: string } = {
  line: classNames(
    // common
    "flex border-b space-x-4",
    // light
    "border-portal-border",
    // dark
    "dark:border-dark-portal-border"
  ),
  solid: classNames(
    // common
    "inline-flex p-0.5 rounded-portal-default space-x-1.5",
    // light
    "bg-portal-background-subtle",
    // dark
    "dark:bg-dark-portal-background-subtle"
  ),
};

export interface TabListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  color?: Color;
  variant?: TabVariant;
}

const TabList = forwardRef<HTMLDivElement, TabListProps>((props, ref) => {
  const { color, variant = "line", children, className, ...other } = props;

  return (
    <Tab.List
      ref={ref}
      className={classNames(
        "justify-start overflow-x-clip",
        variantStyles[variant],
        className
      )}
      {...other}
    >
      <TabVariantContext.Provider value={variant}>
        <BaseColorContext.Provider value={color}>
          {children}
        </BaseColorContext.Provider>
      </TabVariantContext.Provider>
    </Tab.List>
  );
});

TabList.displayName = "TabList";

export default TabList;

"use client";

import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

export interface TabGroupProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  defaultIndex?: number;
  index?: number;
  onIndexChange?: (index: number) => void;
}

const TabGroup = forwardRef<HTMLDivElement, TabGroupProps>((props, ref) => {
  const {
    children,
    className,
    defaultIndex = 0,
    index,
    onIndexChange,
    ...rest
  } = props;

  return (
    <Tab.Group
      as="div"
      ref={ref}
      defaultIndex={defaultIndex}
      selectedIndex={index}
      onChange={onIndexChange as any}
      className={classNames("w-full", className)}
      {...rest}
    >
      {children}
    </Tab.Group>
  );
});

TabGroup.displayName = "TabGroup";

export default TabGroup;

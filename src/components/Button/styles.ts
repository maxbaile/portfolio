import { ButtonVariant, Color, colorPalette } from "@/lib";
import { getColorClassNames } from "@/lib/utils";
import classNames from "classnames";

export const iconSizes: {
  [size: string]: {
    height: string;
    width: string;
  };
} = {
  xs: {
    height: "h-4",
    width: "w-4",
  },
  sm: {
    height: "h-5",
    width: "w-5",
  },
  md: {
    height: "h-5",
    width: "w-5",
  },
  lg: {
    height: "h-6",
    width: "w-6",
  },
  xl: {
    height: "h-6",
    width: "w-6",
  },
};

export const getButtonProportions = (variant: ButtonVariant) => {
  if (!(variant === "light")) {
    return {
      xs: {
        paddingX: "px-2.5",
        paddingY: "py-1.5",
        fontSize: "text-xs",
      },
      sm: {
        paddingX: "px-4",
        paddingY: "py-2",
        fontSize: "text-sm",
      },
      md: {
        paddingX: "px-4",
        paddingY: "py-2",
        fontSize: "text-md",
      },
      lg: {
        paddingX: "px-4",
        paddingY: "py-2.5",
        fontSize: "text-lg",
      },
      xl: {
        paddingX: "px-4",
        paddingY: "py-3",
        fontSize: "text-xl",
      },
    };
  }
  return {
    xs: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-xs",
    },
    sm: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-sm",
    },
    md: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-md",
    },
    lg: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-lg",
    },
    xl: {
      paddingX: "",
      paddingY: "",
      fontSize: "text-xl",
    },
  };
};

export const getButtonColors = (variant: ButtonVariant, color?: Color) => {
  switch (variant) {
    case "primary":
      return {
        textColor: color
          ? getColorClassNames("white").textColor
          : "text-portal-brand-inverted dark:text-dark-portal-brand-inverted",
        hoverTextColor: color
          ? getColorClassNames("white").textColor
          : "text-portal-brand-inverted dark:text-dark-portal-brand-inverted",
        bgColor: color
          ? getColorClassNames(color, colorPalette.background).bgColor
          : "bg-portal-brand dark:bg-dark-portal-brand",
        hoverBgColor: color
          ? getColorClassNames(color, colorPalette.darkBackground).hoverBgColor
          : "hover:bg-portal-brand-emphasis dark:hover:bg-dark-portal-brand-emphasis",
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : "border-portal-brand dark:border-dark-portal-brand",
        hoverBorderColor: color
          ? getColorClassNames(color, colorPalette.darkBorder).hoverBorderColor
          : "hover:border-portal-brand-emphasis dark:hover:border-dark-portal-brand-emphasis",
      };
    case "secondary":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-portal-brand dark:text-dark-portal-brand",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "hover:text-portal-brand-emphasis dark:hover:text-dark-portal-brand-emphasis",
        bgColor: getColorClassNames("transparent").bgColor,
        hoverBgColor: color
          ? classNames(
              getColorClassNames(color, colorPalette.background).hoverBgColor,
              "hover:bg-opacity-20 dark:hover:bg-opacity-20"
            )
          : "hover:bg-portal-brand-faint dark:hover:bg-dark-portal-brand-faint",
        borderColor: color
          ? getColorClassNames(color, colorPalette.border).borderColor
          : "border-portal-brand dark:border-dark-portal-brand",
      };
    case "light":
      return {
        textColor: color
          ? getColorClassNames(color, colorPalette.text).textColor
          : "text-portal-brand dark:text-dark-portal-brand",
        hoverTextColor: color
          ? getColorClassNames(color, colorPalette.darkText).hoverTextColor
          : "hover:text-portal-brand-emphasis dark:hover:text-dark-portal-brand-emphasis",
        bgColor: getColorClassNames("transparent").bgColor,
        borderColor: "",
        hoverBorderColor: "",
      };
  }
};

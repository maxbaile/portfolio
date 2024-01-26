"use client";
import {
  ButtonVariant,
  Color,
  HorizontalPosition,
  HorizontalPositions,
  Size,
  Sizes,
} from "@/lib";
import classNames from "classnames";
import { forwardRef, useEffect } from "react";
import { getButtonColors, getButtonProportions, iconSizes } from "./styles";
import useTransition, { TransitionStatus } from "react-transition-state";
import { LoadingSpinner } from "@/assets";

export interface ButtonIconOrSpinnerProps {
  loading: boolean;
  iconSize: string;
  iconPosition: string;
  Icon: React.ElementType | undefined;
  needMargin: boolean;
  transitionStatus: TransitionStatus;
}

export const ButtonIconOrSpinner = ({
  loading,
  iconSize,
  iconPosition,
  Icon,
  needMargin,
  transitionStatus,
}: ButtonIconOrSpinnerProps) => {
  Icon = Icon!;

  const margin = !needMargin
    ? ""
    : iconPosition === HorizontalPositions.Left
    ? classNames("-ml-1", "mr-1.5")
    : classNames("-mr-1", "ml-1.5");

  const defaultSpinnerSize = classNames("w-0 h-0");
  const spinnerSize: { [key: string]: any } = {
    default: defaultSpinnerSize,
    entering: defaultSpinnerSize,
    entered: iconSize,
    exiting: iconSize,
    exited: defaultSpinnerSize,
  };

  return loading ? (
    <LoadingSpinner
      className={classNames(
        "animate-spin shrink-0",
        margin,
        spinnerSize.default,
        spinnerSize[transitionStatus]
      )}
      style={{ transition: `width 150ms` }}
    />
  ) : (
    <Icon className={classNames("shrink-0", iconSize, margin)} />
  );
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ElementType;
  iconPosition?: HorizontalPosition;
  size?: Size;
  color?: Color;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    icon,
    iconPosition = HorizontalPositions.Left,
    size = Sizes.SM,
    color,
    variant = "primary",
    disabled,
    loading = false,
    loadingText,
    children,
    className,
    ...rest
  } = props;

  const Icon = icon;

  const isDisabled = loading || disabled,
    showButtonIconOrSpinner = Icon !== undefined || loading,
    showLoadingText = loading && loadingText,
    needIconMargin = children || showLoadingText ? true : false;

  const iconSize = classNames(iconSizes[size].height, iconSizes[size].width);
  const buttonShapeStyles =
    variant !== "light"
      ? classNames(
          // common
          "rounded-portal-default border",
          // light
          "shadow-portal-input",
          // dark
          "dark:shadow-dark-portal-input"
        )
      : "";

  const buttonColorStyles = getButtonColors(variant, color);
  const buttonProportionStyles = getButtonProportions(variant)[size];

  const [transitionState, toggleTransition] = useTransition({ timeout: 50 });

  useEffect(() => {
    toggleTransition(loading);
  }, [loading]);

  return (
    <button
      ref={ref}
      className={classNames(
        "flex-shrink-0 inline-flex justify-center items-center group font-medium outline-none",
        buttonShapeStyles,
        buttonProportionStyles.paddingX,
        buttonProportionStyles.paddingY,
        buttonProportionStyles.fontSize,
        buttonColorStyles.textColor,
        buttonColorStyles.bgColor,
        buttonColorStyles.borderColor,
        buttonColorStyles.hoverBorderColor,
        !isDisabled
          ? classNames(
              getButtonColors(variant, color).hoverTextColor,
              getButtonColors(variant, color).hoverBgColor,
              getButtonColors(variant, color).hoverBorderColor
            )
          : "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={isDisabled}
      {...rest}
    >
      {showButtonIconOrSpinner && iconPosition !== HorizontalPositions.Right ? (
        <ButtonIconOrSpinner
          loading={loading}
          iconSize={iconSize}
          iconPosition={iconPosition}
          Icon={Icon}
          transitionStatus={transitionState.status}
          needMargin={needIconMargin}
        />
      ) : null}
      {showLoadingText || children ? (
        <span className={classNames("text-portal-default whitespace-nowrap")}>
          {showLoadingText ? loadingText : children}
        </span>
      ) : null}
      {showButtonIconOrSpinner && iconPosition === HorizontalPositions.Right ? (
        <ButtonIconOrSpinner
          loading={loading}
          iconSize={iconSize}
          iconPosition={iconPosition}
          Icon={Icon}
          transitionStatus={transitionState.status}
          needMargin={needIconMargin}
        />
      ) : null}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

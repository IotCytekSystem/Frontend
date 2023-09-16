import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[11px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900_02",
    orange_50_95: "bg-orange-50_95",
    deep_purple_50_95: "bg-deep_purple-50_95",
    light_blue_50_95: "bg-light_blue-50_95",
    red_50_95: "bg-red-50_95",
    yellow_A200: "bg-yellow-A200 shadow-bs text-black-900_02",
  },
};
const sizes = { xs: "p-[13px]", sm: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "yellow_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "white_A700",
    "orange_50_95",
    "deep_purple_50_95",
    "light_blue_50_95",
    "red_50_95",
    "yellow_A200",
  ]),
};

export { Button };

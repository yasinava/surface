"use client";
import React, { MouseEvent } from "react";

interface IButton {
  children?: React.ReactNode;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  props?: any;
  styled?: any;
  classname?: string;
}
const Button: React.FC<IButton> = ({
  children,
  onClick = () => {},
  classname,
  styled,
  ...props
}) => {
  // const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
  //   onclick(event);
  // };

  return (
    <button
      onClick={() => onClick}
      {...props}
      className={classname}
      style={styled}
    >
      {children}
    </button>
  );
};

export default Button;

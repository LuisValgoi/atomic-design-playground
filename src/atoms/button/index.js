import React from "react";

export const ButtonPrimary = ({ children, className }) => {
  return <button className={`btn btn-primary ${className}`}>{children}</button>;
};

export const ButtonTransparent = ({ children, className }) => {
  return <button className={`btn btn-transparent ${className}`}>{children}</button>;
};

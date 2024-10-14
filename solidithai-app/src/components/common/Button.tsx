import { ReactNode } from "react";

type ButtonProps = {
  text: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  text,
  leftIcon,
  rightIcon,
  color = "btn-primary",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${color} ${disabled ? "btn-disabled" : ""} ${className}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {text}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}

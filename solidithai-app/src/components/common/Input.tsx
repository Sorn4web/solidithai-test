import { ChangeEvent, ReactNode } from "react";

type InputProps = {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  name?: string;
  label?: string;
};

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
  name,
  label,
}: InputProps) {
  return (
    <div className={`form-control w-full ${className}`}>
      {label && <label className="label">{label}</label>}
      <div className="relative">
        {leftIcon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          name={name}
          className={`input input-bordered w-full ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""}`}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
}

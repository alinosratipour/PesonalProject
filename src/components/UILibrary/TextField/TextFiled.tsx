import React, { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import "./TextField.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string; // Make label optional
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  errorMessagePosition?: "default" | "above";
  inputSize?: "small" | "medium" | "large"; // Rename the size prop
  inputBackgroundColor?: "blue" | "green" | "yellow" | "orange"; // Define the color options
  icon?: React.ReactNode; // Add the icon prop
  placeholderIcon?: React.ReactNode; // Add the placeholderIcon prop
  type?: "text" | "password" | "email"; // Add the type prop
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    placeholder,
    label,
    onChange,
    error,
    errorMessagePosition = "default",
    inputSize,
    inputBackgroundColor,
    icon,
    placeholderIcon, // Destructure the placeholderIcon prop
    type, // Destructure the type prop
    ...otherProps
  },
  ref
) => {
  const id = `text-${Math.random().toString(36).substring(7)}`;
  const errorMessageClassName = classNames({
    "error-message-default": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
  });

  const inputClassName = classNames("input", {
    "input-border-error": error,
    [`input-${inputSize}`]: inputSize,
    [`input-color-${inputBackgroundColor}`]: inputBackgroundColor,
  });

  return (
    <div className="text-field">
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {error && errorMessagePosition === "above" && (
            <span className={errorMessageClassName}>{error}</span>
          )}
        </label>
      )}
      <div className="input-container">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          {...otherProps}
          type={type || "text"} // Use the passed type or default to "text"
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          className={inputClassName}
          autoComplete="on"
        />
        {placeholderIcon && (
          <span className="placeholder-icon">{placeholderIcon}</span>
        )}
      </div>
      {error && errorMessagePosition === "default" && (
        <span className={errorMessageClassName}>{error}</span>
      )}
    </div>
  );
};

const TextField = forwardRef(Input);

export default TextField;

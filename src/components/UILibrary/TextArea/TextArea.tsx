import React, {
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import classNames from "classnames";
import "./TextArea.scss";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  errorMessagePosition?: "default" | "above";
  inputSize?: "small" | "medium" | "large";
  inputBackgroundColor?: "blue" | "green" | "yellow" | "orange";
  icon?: React.ReactNode;
  rows?: number;
  placeholderIcon?: React.ReactNode;
}

const TextArea: ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
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
    rows,
    placeholderIcon,
    ...otherProps
  },
  ref
) => {
  const id = `textarea-${Math.random().toString(36).substring(7)}`;
  const errorMessageClassName = classNames({
    "error-message-default": errorMessagePosition === "default" && error,
    "error-message-above": errorMessagePosition === "above" && error,
  });

  const textareaClassName = classNames("textarea", {
    "textarea-border-error": error,
    [`textarea-${inputSize}`]: inputSize,
    [`textarea-color-${inputBackgroundColor}`]: inputBackgroundColor,
  });

  return (
    <div className="text-area">
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {error && errorMessagePosition === "above" && (
            <span className={errorMessageClassName}>{error}</span>
          )}
        </label>
      )}
      <div className="textarea-container">
        {icon && <span className="textarea-icon">{icon}</span>}
        <textarea
          {...otherProps}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          rows={rows}
          className={textareaClassName}
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

const TextAreaField = forwardRef(TextArea);

export default TextAreaField;

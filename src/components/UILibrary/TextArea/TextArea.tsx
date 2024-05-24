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
  const inputPlaceholder = error ? error : placeholder;
  const textareaClassName = classNames("textarea", {
    "textarea-border-error": error,
    [`textarea-${inputSize}`]: inputSize,
    [`textarea-color-${inputBackgroundColor}`]: inputBackgroundColor,
     "text-error":error
  });

  return (
    <div className="text-area">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className="textarea-container">
        {icon && <span className="textarea-icon">{icon}</span>}
        <textarea
          {...otherProps}
          id={id}
          name={name}
          placeholder={inputPlaceholder}
          ref={ref}
          onChange={onChange}
          rows={rows}
          className={textareaClassName}
        />
        {placeholderIcon && (
          <span className="placeholder-icon">{placeholderIcon}</span>
        )}
      </div>
    </div>
  );
};

const TextAreaField = forwardRef(TextArea);

export default TextAreaField;

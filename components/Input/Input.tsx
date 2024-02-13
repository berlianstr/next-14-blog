import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type TInputProps = {
  type?: string;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  value?: string;
  required?: boolean;
  name?: string;
  // [key: string]: any;
};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      type = "text",
      placeholder = "",
      className = "",
      label = "",
      error = false,
      icon,
      disabled = false,
      required = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1 flex-grow">
        {!!label ? (
          <label className="text-[#667085] md:text-base text-sm font-semibold">
            {label}
          </label>
        ) : null}
        <div
          className={twMerge(
            `h-[44px] w-full border-[2px] flex items-center rounded-lg gap-2 font-open-sans ${
              error ? "border-red-500" : ""
            } ${disabled ? "bg-[#D0D3D9]" : "bg-white"}`,
            className
          )}
        >
          {!!icon ? icon : null}
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            {...props}
            disabled={disabled}
            required={required}
            className={`h-full flex-1 md:text-base text-sm  outline-none text-[#514E4E] bg-transparent font-semibold w-full border focus:outline-none rounded-md focus:border-primary-500 focus:ring-primary-500 px-2`}
          />
        </div>
      </div>
    );
  }
);

export default Input;

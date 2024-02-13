import { Loader2Icon } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

type TButtonProps = {
  label?: string;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};
const Button: React.FC<TButtonProps> = ({
  label = "",
  type = "button",
  className = "",
  loading = false,
  disabled = false,
  icon,
  onClick,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader2Icon color="black" className="animate-spin" size={30} />
      ) : (
        <button
          className={twMerge(
            `bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded flex justify-center md:text-base text-sm items-center`,
            className
          )}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {icon ? icon : null}
          {label}
        </button>
      )}
    </div>
  );
};

export default Button;

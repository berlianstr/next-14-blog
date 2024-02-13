import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import { SearchIcon } from "lucide-react";

type TInputSearchProps = {
  className?: string;
};

const InputSearch = forwardRef<HTMLInputElement, TInputSearchProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <div
        className={twMerge(
          `h-[40px] w-fit border-[2px] px-[14px] flex items-center bg-white rounded-lg gap-2 font-open-sans`,
          className
        )}
      >
        <SearchIcon color="#514E4E" size={18} />
        <input
          ref={ref}
          type="search"
          placeholder="Search..."
          autoComplete="off"
          className="h-full flex-1 outline-none text-[#514E4E] bg-transparent font-semibold"
          {...props}
        />
      </div>
    );
  }
);

export default InputSearch;

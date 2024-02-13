import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

type TDataProps = {
  value: string;
  name: string;
  disable?: boolean;
};

type TSelectProps = {
  data: TDataProps[];
  firstOption?: string;
  value?: string;
  className?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = forwardRef<HTMLSelectElement, TSelectProps>(
  (
    {
      data = [],
      firstOption = "",
      className = "",
      label = "",
      error = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {!!label ? (
          <label className="text-[#667085] md:text-base text-sm font-semibold">
            {label}
          </label>
        ) : null}
        <div
          className={twMerge(
            `h-[44px] w-full border-[2px] px-[14px] flex items-center ${
              error ? "border-red-500" : "border-[#D0D3D9]"
            } ${
              disabled ? "bg-[#D0D3D9]" : "bg-white"
            } rounded-lg gap-2 font-open-sans ${
              error ? "border-red-500" : "border-[#D0D3D9]"
            }`,
            className
          )}
        >
          <select
            ref={ref}
            className="w-full h-full md:text-base text-sm outline-none bg-transparent"
            disabled={disabled}
            {...props}
          >
            {firstOption && (
              <option value={""} className="text-gray-400">
                {firstOption}
              </option>
            )}
            {!!data?.length ? (
              data?.map((item) => (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={!!item.disable}
                >
                  {item.name}
                </option>
              ))
            ) : (
              <option value={""}>No data</option>
            )}
          </select>
        </div>
      </div>
    );
  }
);

export default Select;

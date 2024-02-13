"use client";
// import InputSearch from "@/components/Input/InputSearch";
import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";
// import { UseFormRegister } from "react-hook-form";

export default function SearchUser() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div
      className={`h-[40px] w-fit border-[2px] px-[14px] flex items-center bg-white rounded-lg gap-2 font-open-sans`}
    >
      <SearchIcon color="#514E4E" size={18} />
      <input
        type="text"
        placeholder="Search..."
        className="h-full flex-1 outline-none text-[#514E4E] bg-transparent font-semibold"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
}

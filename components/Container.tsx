import React from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(`container flex  flex-col gap-8 mx-auto `, className)}
    >
      {children}
    </div>
  );
}

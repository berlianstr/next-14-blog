// "use client";
import { redirect, usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return pathname === "/" ? redirect("/blog?page=1") : "";
}

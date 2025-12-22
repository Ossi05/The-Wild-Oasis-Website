"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CabinFilterButton from "./CabinFilterButton";

const buttons = [
  { label: "All cabins", value: "all" },
  { label: "1—3 guests", value: "small" },
  { label: "4—7 guests", value: "medium" },
  { label: "+8 guests", value: "large" },
];

export default function CabinFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const currentFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = filter => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex">
      {buttons.map(({ label, value }) => (
        <CabinFilterButton
          key={value}
          value={value}
          currentFilter={currentFilter}
          handleFilter={handleFilter}
        >
          {label}
        </CabinFilterButton>
      ))}
    </div>
  );
}

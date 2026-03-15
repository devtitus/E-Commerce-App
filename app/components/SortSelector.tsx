"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { NativeSelect, NativeSelectOption } from "@/components/ui/index";

const SortSelector = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleChange = (value: string) => {

    const search = new URLSearchParams(params);

    if (!value) {
      search.delete("sortBy");
      search.delete("order");
    } else {
      const [sortBy, order] = value.split("-");
      search.set("sortBy", sortBy);
      search.set("order", order);
    }

    search.set("page", "1"); // reset pagination

    router.push(`/products?${search.toString()}`);
  };
  return (
    <NativeSelect className="h-auto py-2.5 cursor-pointer" defaultValue="" onChange={(e) => handleChange(e.target.value)}>
      <NativeSelectOption value="">Sorting</NativeSelectOption>
      <NativeSelectOption value="title-asc">Title A-Z</NativeSelectOption>
      <NativeSelectOption value="title-desc">Title Z-A</NativeSelectOption>
      <NativeSelectOption value="price-asc">Price Low-High</NativeSelectOption>
      <NativeSelectOption value="price-desc">Price High-Low</NativeSelectOption>
    </NativeSelect>
  )
}

export default SortSelector

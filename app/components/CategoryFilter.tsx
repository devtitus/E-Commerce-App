"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/index";

const frameworks = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
] as const

const CategoryFilter = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSelect = (value: string | null) => {
    const search = new URLSearchParams(params);

    if (value) search.set("category", value);
    else search.delete("category");
    search.set("page", "1");
    router.push(`/products?${search.toString()}`);
  };

  return (
    <Combobox items={categories} onValueChange={handleSelect}>
      <ComboboxInput placeholder="Select a category" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default CategoryFilter;
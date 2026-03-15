"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/index";
import { useNavigation } from "@/app/components/NavigationContext";

const CategoryFilter = ({ categories }: { categories: string[] }) => {
  const router = useRouter();
  const params = useSearchParams();
  const { startTransition } = useNavigation();

  const handleSelect = (value: string | null) => {
    const search = new URLSearchParams(params);

    if (value) search.set("category", value);
    else search.delete("category");
    search.set("page", "1");
    startTransition(() => {
      router.push(`/products?${search.toString()}`);
    });
  };

  return (
    <Combobox items={categories} onValueChange={handleSelect}>
      <ComboboxInput placeholder="Select a category" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem className={'cursor-pointer'} key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default CategoryFilter;

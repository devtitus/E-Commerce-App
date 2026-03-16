"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/index";
import { useNavigation } from "@/app/components/NavigationContext";

const sortOptions = [
  "Title (A-Z)",
  "Title (Z-A)", 
  "Price (Low-High)",
  "Price (High-Low)",
];

const sortValueMap: Record<string, string> = {
  "Title (A-Z)": "title-asc",
  "Title (Z-A)": "title-desc",
  "Price (Low-High)": "price-asc",
  "Price (High-Low)": "price-desc",
};

const SortSelector = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { startTransition } = useNavigation();

  const currentSort = params.get("sortBy");
  const currentOrder = params.get("order");
  
  // Get the display label for current selection
  const getCurrentLabel = () => {
    if (!currentSort || !currentOrder) return null;
    const key = `${currentSort}-${currentOrder}`;
    return Object.entries(sortValueMap).find(([, v]) => v === key)?.[0] || null;
  };

  const handleSelect = (value: string | null) => {
    const search = new URLSearchParams(params);

    if (!value || !sortValueMap[value]) {
      search.delete("sortBy");
      search.delete("order");
    } else {
      const sortValue = sortValueMap[value];
      const [sortBy, order] = sortValue.split("-");
      search.set("sortBy", sortBy);
      search.set("order", order);
    }

    search.set("page", "1");

    startTransition(() => {
      router.push(`/products?${search.toString()}`);
    });
  };

  return (
    <Combobox 
      items={sortOptions} 
      onValueChange={handleSelect}
      value={getCurrentLabel()}
    >
      <ComboboxInput placeholder="Sorting" showClear />
      <ComboboxContent>
        <ComboboxEmpty>No options found.</ComboboxEmpty>
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

export default SortSelector;

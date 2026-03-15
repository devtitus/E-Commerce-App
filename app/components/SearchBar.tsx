"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Input, Field, FieldLabel, ButtonGroup } from "@/components/ui/index";

const SearchBar = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');

  const handleSearch = () => {
    const search = new URLSearchParams(params);
    if (query) {
      search.set('q', query);
    } else {
      search.delete('q');
    }

    router.push(`/products?${search.toString()}`);
  };
  return (
    <Field className="w-full">
      <form onSubmit={(e) => {e.preventDefault(); handleSearch();}} className="w-full">
        <ButtonGroup className="w-full">
          <Input id="input-button-group" value={query} onChange={(e) => setQuery(e.target.value)} className='h-auto px-4 py-2.5' placeholder="Type to search..." />
          <Button variant="outline" className='h-auto px-4 py-2.5' type="submit">Search</Button>
        </ButtonGroup>
      </form>
    </Field>
  )
}

export default SearchBar;

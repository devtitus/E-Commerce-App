import { Button, Input, Field, FieldLabel, ButtonGroup } from "@/components/ui/index";

const SearchBar = () => {
  return (
    <Field className="w-full">
      <ButtonGroup>
        <Input id="input-button-group" className='h-auto px-4 py-2.5' placeholder="Type to search..." />
        <Button variant="outline" className='h-auto px-4 py-2.5'>Search</Button>
      </ButtonGroup>
    </Field>
  )
}

export default SearchBar;

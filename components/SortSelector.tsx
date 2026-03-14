import { NativeSelect, NativeSelectOption } from "@/components/ui/index";

const SortSelector = () => {
  return (
    <NativeSelect className="h-auto py-2.5">
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
      <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
    </NativeSelect>
  )
}

export default SortSelector

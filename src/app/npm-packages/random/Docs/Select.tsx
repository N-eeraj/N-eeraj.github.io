import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RANDOM_DOCS } from "@constants/npmPackages/random"
import { DocsProps } from "@customTypes/npm/packages/random"

function DocSelect({ tab }: DocsProps) {
  const { label: currentTab } = RANDOM_DOCS[tab]

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={currentTab} />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(RANDOM_DOCS).map(([key, { label }]) => (
          <SelectItem
            key={key}
            value={key}
            className="cursor-pointer">
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default DocSelect

"use client"

import {
  useRouter,
  usePathname,
  useSearchParams,
} from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select"
import clsx from "clsx"
import { RANDOM_DOCS } from "@constants/npmPackages/random"
import {
  RandomDocLabel,
  DocsSelectProps,
} from "@customTypes/npm/packages/random"

function DocSelect({ currentTab, className }: DocsSelectProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (tab: RandomDocLabel) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", tab)
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className={clsx(
        "w-[180px]",
        className,
      )}>
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

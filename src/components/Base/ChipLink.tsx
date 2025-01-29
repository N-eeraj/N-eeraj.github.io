import Link from "next/link"
import { Icon } from "@iconify/react"
import type ChipLinkProps from "@customTypes/ui/chipLink"

function ChipLink({ icon, iconSize = 28, children, ...linkProps }: ChipLinkProps) {
  return (
    <Link
      {...linkProps}
      target="_blank"
      className="flex items-center gap-x-1.5 px-2 py-1 hover:bg-foreground/10 rounded duration-300">
      {icon && (
        <Icon
          icon={icon}
          fontSize={iconSize} />
      )}
      <strong className="text-nowrap">
        {children}
      </strong>
    </Link>
  )
}

export default ChipLink

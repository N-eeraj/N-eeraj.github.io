import Link from "next/link"
import { Icon } from "@iconify/react"
import ChipLinkProps from "@customTypes/ui/chipLink"

function ChipLink({ icon, children, ...linkProps }: ChipLinkProps) {
  return (
    <Link
      {...linkProps}
      target="_blank"
      className="flex items-center gap-x-1.5 px-2 py-1 hover:bg-foreground/10 rounded duration-300">
      {icon && <Icon icon={icon} />}
      <strong>
        {children}
      </strong>
    </Link>
  )
}

export default ChipLink

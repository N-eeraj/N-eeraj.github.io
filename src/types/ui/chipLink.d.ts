import type {
  AnchorHTMLAttributes,
  PropsWithChildren,
} from "react"

export default interface ChipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, PropsWithChildren {
  href: string
  icon?: string
}

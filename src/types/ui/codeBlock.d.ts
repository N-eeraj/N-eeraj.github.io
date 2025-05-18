import {
  RefObject,
  HTMLAttributes,
  PropsWithChildren,
} from "react"

export interface CodeBlockProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {
  ref?: RefObject<HTMLElement | null>
}

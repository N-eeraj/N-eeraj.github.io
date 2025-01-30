import {
  RefObject,
  HTMLAttributes,
  PropsWithChildren,
} from "react"

interface CodeBlockProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {
  ref?: RefObject<HTMLElement | null>
}

function CodeBlock({ children, ...props }: CodeBlockProps) {
  return (
    <code {...props}>
      {children}
    </code>
  )
}

export default CodeBlock

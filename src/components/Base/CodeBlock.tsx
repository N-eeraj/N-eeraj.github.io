import { HTMLAttributes, PropsWithChildren } from "react"

interface CodeBlockProps extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

function CodeBlock({ children, ...props }: CodeBlockProps) {
  return (
    <code {...props}>
      {children}
    </code>
  )
}

export default CodeBlock

import type { CodeBlockProps } from "@customTypes/ui/codeBlock"

function CodeBlock({ children, ...props }: CodeBlockProps) {
  return (
    <code {...props}>
      {children}
    </code>
  )
}

export default CodeBlock

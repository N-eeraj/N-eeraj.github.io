import MarkDownText from "@components/Base/MarkDownText"
import clsx from "clsx"
import type { TextBlockProps } from "@customTypes/blog"

function TextBlock({ content, className, containerClassName }: TextBlockProps) {
  // single paragraph
  if (typeof content === "string") {
    return (
      <MarkDownText
        content={content}
        className={className} />
    )
  }

  // multi paragraph arrays
  if (Array.isArray(content)) {
    return (
      <div
        className={clsx(
          "space-y-1",
          containerClassName,
        )}>
        {content.map((paragraph, index) => (
          <MarkDownText
            key={index}
            content={paragraph}
            className={className} />
        ))}
      </div>
    )
  }
}

export default TextBlock

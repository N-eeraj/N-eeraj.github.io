import { parseMdLinks } from "@utils/mdParser"
import clsx from "clsx"
import type { TextBlockProps } from "@customTypes/blog"

function TextBlock({ content, className, containerClassName }: TextBlockProps) {
  // single paragraph
  if (typeof content === "string") {
    return (
      <p
        dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
        className={clsx(
          "blog-section-content",
          className,
        )} />
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
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: parseMdLinks(paragraph) }}
            className={clsx(
              "blog-section-content",
              className,
            )} />
        ))}
      </div>
    )
  }
}

export default TextBlock

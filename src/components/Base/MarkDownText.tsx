import { parseMdLinks } from "@utils/mdParser"
import type { MarkDownTextProps } from "@customTypes/ui/markDownText"

function MarkDownText({ content, className }: MarkDownTextProps) {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: parseMdLinks(content) }}
      className={className} />
  )
}

export default MarkDownText

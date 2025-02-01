import clsx from "clsx"
import { DocsProps } from "@customTypes/npm/packages/random"
import DocSelect from "./Select"
import { RANDOM_DOCS } from "@constants/npmPackages/random"

async function Docs({ tab, className }: DocsProps) {
  return (
    <section className={clsx(
      "flex flex-col gap-y-2",
      className,
    )}>
      <DocSelect tab={tab} />
    </section>
  )
}

export default Docs

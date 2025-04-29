import Readme from "@components/Readme"
import DocSelect from "./Select"

import clsx from "clsx"
import { DocsProps } from "@customTypes/npmPackage/random"
import { RANDOM_DOCS } from "@constants/npmPackages/random"
import GithubRepo from "@utils/github"

async function Docs({ repo, tab, className }: DocsProps) {   
  const {
    label: currentTab,
    docPath,
  } = RANDOM_DOCS[tab] ?? RANDOM_DOCS.booleanUuid

  const readme = await GithubRepo.getFile(repo, docPath)

  return (
      <section className={clsx(
        "flex flex-col gap-y-2",
        className,
      )}>
      <DocSelect
        currentTab={currentTab}
        className="ml-auto" />

      <Readme
        file={readme}
        className="w-full" />
    </section>
  )
}

export default Docs

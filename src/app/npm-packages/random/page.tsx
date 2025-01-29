import { Metadata } from "next"

import Readme from "@components/Readme"
import GithubFeats from "@components/Github/Feats"
import Languages from "@components/Github/Languages"
import ChipLink from "@components/Base/ChipLink"
import Keywords from "@components/Npm/Keywords"
import NpmDetails from "@components/Npm/Details"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"


const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

export const metadata: Metadata = {
  title: "Random | npm package",
}

async function RandomPackagePage() {
  const {
    keywords,
    description,
    ...packageData
  } = await npmPackage.getDetails()
  const githubRepoDetails = await githubRepo.getDetails()

  const readme = await githubRepo.readme()

  return (
    <>
      <h2 className="mt-3 md:mt-6 px-3 md:px-5 text-3xl font-semibold">
        Random
      </h2>
      <section className="grid md:grid-cols-[60%_35%] justify-between gap-x-4 gap-y-3 mt-2 px-3 md:px-5">
        <article>
          {description}
        </article>
        <section className="md:order-1">
          <ul className="flex">
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
          <Readme file={readme} />
        </section>

        <aside className="sticky top-0 md:row-span-2 h-fit p-1 md:p-2 space-y-4">
          <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-2">
            <ChipLink
              href={npmPackage.url}
              icon="logos:npm"
              iconSize={20}>
              {npmPackage.name}
            </ChipLink>

            <ChipLink
              href={githubRepo.url}
              icon="mdi:github">
              {githubRepoDetails.full_name}
            </ChipLink>
          </div>
          <hr />
          <GithubFeats {...githubRepoDetails} />
          <hr />
          <Languages github={githubRepo} />
          <hr />
          <Keywords keywords={keywords} />
          <hr />
          <NpmDetails
            package={npmPackage}
            {...packageData} />
        </aside>
      </section>
    </>
  )
}

export default RandomPackagePage

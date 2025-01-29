import Readme from "@components/Readme"
import GithubFeats from "@components/Github/Feats"
import Languages from "@components/Github/Languages"
import ChipLink from "@components/Base/ChipLink"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"

import NpmDetails from "@components/Npm/Details"

const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

export const metadata = {
  title: "Random | npm package"
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
      <section className="grid md:grid-cols-[60%_35%] justify-between gap-x-4 gap-y-2 mt-2 px-3 md:px-5">
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

        <aside className="md:row-span-2 p-1 md:p-2 space-y-4">
          <div className="flex flex-col md:flex-row gap-x-4 gap-y-2">
            <ChipLink
              href={npmPackage.url}
              icon="logos:npm">
              {npmPackage.name}
            </ChipLink>

            <ChipLink
              href={githubRepo.url}
              icon="mdi:github">
              {githubRepoDetails.full_name}
            </ChipLink>
          </div>

          <GithubFeats {...githubRepoDetails} />

          <Languages github={githubRepo} />

          <div className="mt-1 px-3 py-2 bg-foreground/10 space-y-1 rounded">
            <strong>
              Keywords
            </strong>
            <ul className="flex flex-wrap gap-x-3">
              {(keywords as string[]).map((keyword, index) => (
                <li
                  key={index}
                  className="opacity-85">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>

          <NpmDetails
            package={npmPackage}
            {...packageData} />
        </aside>
      </section>
    </>
  )
}

export default RandomPackagePage

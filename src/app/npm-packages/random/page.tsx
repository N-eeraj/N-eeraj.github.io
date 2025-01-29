import { Metadata } from "next"

import Readme from "@components/Readme"
import CodeDetails from "@components/Npm/CodeDetails"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"


const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

export const metadata: Metadata = {
  title: "Random | npm package",
}

async function RandomPackagePage() {
  const packageData = await npmPackage.getDetails()

  const readme = await githubRepo.readme()

  const codeDetails = {
    npmPackage,
    packageData,
    githubRepo,
  }

  return (
    <>
      <h2 className="mt-3 md:mt-6 px-3 md:px-5 text-3xl font-semibold">
        Random
      </h2>
      <section className="grid md:grid-cols-[60%_35%] justify-between gap-x-4 gap-y-3 mt-2 px-3 md:px-5">
        <article>
          {packageData.description}
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

        <CodeDetails {...codeDetails} />
      </section>
    </>
  )
}

export default RandomPackagePage

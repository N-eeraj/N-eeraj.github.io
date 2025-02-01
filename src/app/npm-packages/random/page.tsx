import { Metadata } from "next"

import CodeDetails from "@components/Npm/CodeDetails"
import Docs from "./Docs"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"
import PageProps from "@customTypes/npm/packages/random"


const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

export const metadata: Metadata = {
  title: "Random | npm package",
}

async function RandomPackagePage({ searchParams }: PageProps) {
  const packageData = await npmPackage.getDetails()
  const { tab } = await searchParams

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
      <section className="grid md:grid-cols-[2fr_minmax(420px,1fr)] md:grid-rows-[auto_1fr] justify-between md:gap-x-6 lg:gap-x-12 gap-y-3 md:gap-y-6 mt-2 px-3 md:px-5">
        <article>
          {packageData.description}
        </article>
        {tab && (
          <Docs
            tab={tab}
            className="md:order-1" />
        )}

        <CodeDetails {...codeDetails} />
      </section>
    </>
  )
}

export default RandomPackagePage

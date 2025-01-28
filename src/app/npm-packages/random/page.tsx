import Link from "next/link"

import Readme from "@components/Readme"
import GithubFeats from "@components/Github/Feats"
import Languages from "@components/Github/Languages"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"

import { Icon } from "@iconify/react"

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
  const weeklyDownloads = await npmPackage.getWeeklyDownloads()
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
            <Link
              href={npmPackage.url}
              target="_blank"
              className="flex items-center gap-x-1.5 p-1 hover:bg-foreground/10 rounded duration-300">
              <Icon icon="logos:npm" />
              <strong>
                {npmPackage.name}
              </strong>
            </Link>

            <Link
              href={githubRepo.url}
              target="_blank"
              className="flex items-center gap-x-1.5 p-1 hover:bg-foreground/10 rounded duration-300">
              <Icon
                icon="mdi:github"
                fontSize={24} />
              <strong>
                {githubRepoDetails.full_name}
              </strong>
            </Link>
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

          <ul className="space-y-1.5">
            <li className="space-x-1.5">
              <strong>
                Version:
              </strong>
              <span>
                {packageData["dist-tags"].latest}
              </span>
            </li>

            <li className="space-x-1.5">
              <strong>
                Last Publish:
              </strong>
              <span>
                {packageData.time.modified}
              </span>
            </li>

            <li className="space-x-1.5">
              <strong>
                Weekly Downloads:
              </strong>
              <span>
                {weeklyDownloads}
              </span>
            </li>
          </ul>
        </aside>
      </section>
    </>
  )
}

export default RandomPackagePage

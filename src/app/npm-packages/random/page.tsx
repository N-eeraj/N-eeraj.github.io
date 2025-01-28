import Link from "next/link"

import Readme from "@components/Readme"
import Languages from "@components/Github/Languages"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"

import { Icon } from "@iconify/react"
import { Star } from "lucide-react"

const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

export const metadata = {
  title: "Random | npm package"
}

async function RandomPackagePage() {
  const {
    time,
    keywords,
    description,
    ...packageData
  } = await npmPackage.getDetails()
  const weeklyDownloads = await npmPackage.getWeeklyDownloads()
  const {
    forks,
    language,
    stargazers_count,
    open_issues_count,
  } = await githubRepo.getDetails()

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
                {githubRepo.repoName}
              </strong>
            </Link>
          </div>

          <div className="flex items-center gap-x-3">
            <Star size={18} />
            <div className="flex items-center space-x-1">
              <span>
                Star
              </span>
              <div className="grid place-content-center size-6 bg-foreground/10 text-sm rounded-full">
                {stargazers_count}
              </div>
            </div>
          </div>

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

          <div className="space-x-1.5">
            <strong>
              Version:
            </strong>
            <span>
              {packageData["dist-tags"].latest}
            </span>
          </div>

          <div className="space-x-1.5">
            <strong>
              Last Publish:
            </strong>
            <span>
              {time.modified}
            </span>
          </div>

          <div className="space-x-1.5">
            <strong>
              Weekly Downloads:
            </strong>
            <span>
              {weeklyDownloads}
            </span>
          </div>
        </aside>
        {/*
        <div>
          <strong>
            forks:
          </strong>
          {forks}
        </div>
        <div>
          <strong>
            open_issues_count:
          </strong>
          {open_issues_count}
        </div>
        <div>
          <strong>
            language:
          </strong>
          {language}
        </div> */}
      </section>
    </>
  )
}

export default RandomPackagePage

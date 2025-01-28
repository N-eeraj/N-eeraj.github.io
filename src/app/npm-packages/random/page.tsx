import Link from "next/link"

import Readme from "@components/Readme"
import Languages from "@components/Github/Languages"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"

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
      <section className="grid md:grid-cols-[60%_40%] gap-x-4 gap-y-2 mt-2 px-3 md:px-5">
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

        <aside className="md:row-span-2 p-1 md:p-2 space-y-1">
          <div>
            <Link
              href={npmPackage.url}
              target="_blank">
              <strong>
                {npmPackage.name}
              </strong>
            </Link>
          </div>
          <div className="space-x-1">
            <strong>
              GitHub:
            </strong>
            <span>
              {githubRepo.url}
            </span>
          </div>
          <div className="mt-1 p-2 bg-foreground/10 gap-y-1 rounded">
            <strong>
              Keywords
            </strong>
            <ul>
              {(keywords as string[]).map((keyword, index) => (
                <li key={index}>
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* <Readme file={readme} />
        <div>
          
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
          Last Updated:
          <span>
            {time.modified}
          </span>
        </div>
        <div>
          Version:
          {packageData["dist-tags"].latest}
        </div>
        <div>
          <strong>
            Description
          </strong>
          
        </div>
        <div>
          <strong>
            Weekly Downloads
          </strong>
          {weeklyDownloads}
        </div>
        <div>
          <Languages github={githubRepo} />
        </div>
        <div>
          <strong>
            stargazers_count:
          </strong>
          {stargazers_count}
        </div>
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

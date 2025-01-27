import Readme from "@components/Readme"
import Languages from "@components/Github/Languages"

import NpmPackage from "../npm"
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
      <div className="flex flex-col gap-y-1">
        <Readme file={readme} />
        <div>
          {npmPackage.name}
        </div>
        <div>
          {npmPackage.url}
        </div>
        <div>
          {githubRepo.url}
        </div>
        <div>
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
          {description}
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
        </div>
      </div>
    </>
  )
}

export default RandomPackagePage

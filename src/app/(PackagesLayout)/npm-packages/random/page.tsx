import Readme from "@components/Readme"

import NpmPackage from "@utils/npm"
import GithubRepo from "@utils/github"

const npmPackage = new NpmPackage("@n-eeraj/random")
const githubRepo = new GithubRepo("random")

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
  const languages = await githubRepo.getLanguages()

  const readme = await githubRepo.readme()

  return (
    <>
      <div>
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
          <strong>
            languages:
          </strong>
          <ul className="flex w-32 h-2 rounded-full overflow-hidden">
            {languages.map(({ language, hexCode, percentage }) => (
              <li
                key={language}
                className="h-full"
                style={{
                  backgroundColor: hexCode,
                  width: `${percentage}%`,
                }} />
            ))}
          </ul>
          <ul>
            {languages.map(({ language, hexCode, percentage }) => (
              <li
                key={language}
                className="flex items-center gap-x-2">
                <div
                  className="size-2 rounded-full"
                  style={{ backgroundColor: hexCode }} />
                <span>
                  {language}
                </span>
                <span className="opacity-60">
                  {percentage}%
                </span>
              </li>
            ))}
          </ul>
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

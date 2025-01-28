import {
  Star,
  GitFork,
  CircleDot,
} from "lucide-react"
import { GithubRepoDetails } from "@customTypes/github"

function GithubFeats({ stargazers_count, forks, open_issues }: GithubRepoDetails) {
  const githubFeats = [
    {
      Icon: Star,
      value: stargazers_count,
      label: "Stars",
    },
    {
      Icon: GitFork,
      value: forks,
      label: "Forks",
    },
    {
      Icon: CircleDot,
      value: open_issues,
      label: "Open Issues",
    },
  ]

  return (
    <ul className="space-y-1.5">
      {githubFeats.map(({ Icon, label, value }) => (
        <li
          key={label}
          className="flex items-center gap-x-2">
          <Icon size={18} />
          <span>
            {value} {label}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default GithubFeats

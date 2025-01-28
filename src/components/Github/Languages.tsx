import { Github } from "@utils/github"

async function Languages({ github }: { github: Github }) {
  const languages = await github.getLanguages()

  return (
    <div className="flex flex-col gap-y-2">
      <strong>
        Languages
      </strong>
      <ul className="flex w-full max-w-64 h-2 rounded-full overflow-hidden">
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
      <ul className="flex flex-wrap gap-x-4 gap-y-2">
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
  )
}

export default Languages

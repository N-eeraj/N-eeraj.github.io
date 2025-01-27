import { Github } from "@utils/github"

async function Languages({ github }: { github: Github }) {
  const languages = await github.getLanguages()

  return (
    <div className="flex flex-col gap-y-2">
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
  )
}

export default Languages

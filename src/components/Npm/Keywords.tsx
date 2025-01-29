function Keywords({ keywords = [] }: { keywords: string[] }) {
  return (
    <div className="mt-1 px-3 py-2 bg-foreground/10 space-y-1 rounded">
      <strong>
        Keywords
      </strong>
      <ul className="flex flex-wrap gap-x-3">
        {keywords.map((keyword, index) => (
          <li
            key={index}
            className="opacity-85">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Keywords

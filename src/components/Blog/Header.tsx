import Image from "next/image"
import { formatShortDate } from "@utils/dateFormat"
import { BlogHeaderProps } from "@customTypes/blog"

function BlogHeader({ title, subTitle, coverImage, date, readingTimeInMinutes }: BlogHeaderProps) {
  return (
    <header className="space-y-2 sm:space-y-4 mb-5 sm:mb-7">
      <h1 className="text-primary text-2xl sm:text-4xl font-bold leading-7 sm:leading-10 text-balance">
        {title}
      </h1>
      {subTitle && (
        <h2 className="text-lg sm:text-xl">
          {subTitle}
        </h2>
      )}

      {/* read time & publish date */}
      <div className="flex items-center gap-x-2">
        <span>
          {readingTimeInMinutes} mins read
        </span>
        <span className="block size-0.5 bg-foreground" />
        <span>
          {formatShortDate(date)}
        </span>
      </div>

      {/* cover image */}
      {coverImage && (
        <figure className="space-y-2 sm:space-y-3 mt-4 mb-2 sm:mt-8 sm:mb-4">
          <Image
            src={coverImage.src}
            alt={coverImage.alt || `${title} blog cover image`}
            width={640}
            height={0}
            className="w-full" />
          {coverImage.credit && (
            <figcaption className="text-sm text-center">
              {coverImage.credit}
            </figcaption>
          )}
        </figure>
      )}
    </header>
  )
}

export default BlogHeader

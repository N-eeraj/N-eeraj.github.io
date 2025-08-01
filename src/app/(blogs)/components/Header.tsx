import Image from "next/image"
import { formatShortDate } from "@utils/dateFormat"
import { BlogHeaderProps } from "@blogs/types"

function BlogHeader({ title, subTitle, coverImage, date, updateDate, readingTime }: BlogHeaderProps) {
  return (
    <header className="space-y-2 sm:space-y-4 mb-5 sm:mb-7">
      <h1 className="text-primary text-3xl sm:text-4xl font-bold leading-8 sm:leading-10 text-balance">
        {title}
      </h1>
      {subTitle && (
        <h2 className="text-lg sm:text-xl text-balance">
          {subTitle}
        </h2>
      )}

      {/* read time & publish date */}
      <div className="flex items-center gap-x-2 gap-y-0.5 flex-wrap text-sm opacity-75">
        <span>
          {readingTime} mins read
        </span>
        <span className="block size-0.5 bg-foreground" />
        <span>
          Published: {formatShortDate(date)}
        </span>
        {updateDate && (
          <>
            <span className="block size-0.5 bg-foreground" />
            <span>
              Last Updated: {formatShortDate(updateDate)}
            </span>
          </>
        )}
      </div>

      {/* cover image */}
      {coverImage && (
        <figure className="space-y-2 sm:space-y-3 mt-4 mb-2 sm:mt-8 sm:mb-4">
          <Image
            src={coverImage.src}
            alt={coverImage.alt || `${title} blog cover image`}
            quality={100}
            width={640}
            height={0}
            priority
            className="w-full h-auto"
            style={{ height: "auto" }} />

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

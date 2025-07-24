"use client"

import {
  Error,
  Votes,
  Option,
  Confirmation,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"

import {
  useFetch,
  useSubmit,
} from "@hooks/blog/productEngineeringMatrix"
import clsx from "clsx"
import { OPTIONS } from "@constants/blogs/productEngineeringMatrix"

import blog from "@blogData/product-engineering-matrix.json"

function Poll() {
  const {
    isFetching,
    fetchError,
    redPercentage,
    bluePercentage,
    userVote,
  } = useFetch()

  const {
    selectedOption,
    handleSelectionChange,
    clearSelection,
    submitSelection,
    isSubmitting,
  } = useSubmit(userVote)

  if (fetchError) return <Error error={fetchError} />

  return (
    <section className="space-y-2">
      <h2 className="blog-sub-title">
        {blog.feedback.title}
      </h2>

      <div className="flex flex-col items-center gap-y-3 md:gap-y-4">
        {/* options */}
        <ul className="flex w-full h-48">
          {OPTIONS.map((option) => (
            <li
              key={option}
              className="flex-1">
              <Option
                value={option}
                userVote={userVote}
                isLoading={isFetching}
                onChange={handleSelectionChange} />
            </li>
          ))}
        </ul>

        {/* votes */}
        {(isFetching || !!(redPercentage + bluePercentage)) && (
          <ul className={clsx(
            "flex h-10 md:h-12",
            isFetching ? "w-10 md:w-12 animate-spin" : "w-full rounded-full overflow-hidden",
          )}>
            <Votes
              value={isFetching ? 50 : redPercentage}
              className={clsx(
                "rounded-l-full",
                isFetching ? "[&_*]:hidden border-l-3 border-b-2 border-l-red-500 border-b-red-500" : "bg-gradient-to-r from-red-500 to-red-600"
              )} />
            <Votes
              value={isFetching ? 50 : bluePercentage}
              className={clsx(
                "rounded-r-full",
                isFetching ? "[&_*]:hidden border-r-3 border-t-2 border-r-sky-500 border-t-sky-500" : "justify-end bg-gradient-to-l from-sky-500 to-sky-600"
              )} />
          </ul>
        )}
        {isFetching && (
          <span className="text-xs sm:text-sm">
            Loading Poll
          </span>
        )}

        <Confirmation
          selection={selectedOption}
          loading={isSubmitting}
          onCancel={clearSelection}
          onConfirm={submitSelection} />
      </div>
    </section>
  )
}

export default Poll

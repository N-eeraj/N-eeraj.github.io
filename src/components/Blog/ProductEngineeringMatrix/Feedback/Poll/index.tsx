"use client"

import {
  Loading,
  Error,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"

import {
  useFetch,
} from "@hooks/blog/productEngineeringMatrix"

function Poll() {
  const blogResponses = useFetch()

  if (blogResponses.isFetching) return <Loading />
  if (blogResponses.error) return <Error error={blogResponses.error} />

  return (
    <div>
      <input
        type="radio"
        name="poll" />
      <input
        type="radio"
        name="poll" />
    </div>
  )
}

export default Poll

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
  if (!blogResponses.data) return

  return (
    <div>
      <p>{JSON.stringify(blogResponses.data)}</p>
    </div>
  )
}

export default Poll

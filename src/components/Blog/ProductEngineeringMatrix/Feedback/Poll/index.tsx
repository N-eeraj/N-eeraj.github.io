"use client"

import {
  useEffect,
  useState,
} from "react"

import {
  Loading,
  Error,
} from "@components/Blog/ProductEngineeringMatrix/Feedback"
import request from "@utils/request"
import { WEBSITE } from "@constants/enVariables"

function Poll() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const { data } = await request(`${WEBSITE}/api/blog/product-engineering-matrix`)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) return <Loading />
  if (error) return <Error />
  if (!data) return

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default Poll

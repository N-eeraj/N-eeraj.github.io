import {
  useState,
  useEffect,
  type ChangeEvent,
} from "react"

import { useQuery } from "@tanstack/react-query"
import request from "@utils/request"
import { WEBSITE } from "@constants/enVariables"
import {
  QUERY_STALE_TIME,
  REVALIDATE_HOURLY,
} from "@constants/time"
import { PollData } from "@customTypes/blog/productEngineeringMatrix"

export function useFetch() {
  const {
    isFetching,
    data,
    error,
  } = useQuery({
    queryKey: ["product-engineering-matrix-poll"],
    queryFn: async () => {
      const { data } = await request(`${WEBSITE}/api/blog/product-engineering-matrix`, REVALIDATE_HOURLY)
      return data
    },
    staleTime: QUERY_STALE_TIME,
  })

  const {
    red = 0,
    blue = 0,
    userVote,
  } = data as PollData ?? {}
  const total = (red + blue) || 1
  const redPercentage =  red * 100 / total
  const bluePercentage =  blue * 100 / total

  return {
    isFetching,
    fetchError: error,
    redPercentage,
    bluePercentage,
    userVote,
  }
}

export function useSubmit() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  useEffect(() => {
    console.log(selectedOption)
  }, [selectedOption])

  return {
    selectedOption,
    handleChange,
  }
}

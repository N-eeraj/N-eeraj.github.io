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
  const redPercentage =  red * 100 / (red + blue)
  const bluePercentage =  blue * 100 / (red + blue)

  return {
    isFetching,
    fetchError: error,
    redPercentage,
    bluePercentage,
    userVote,
  }
}

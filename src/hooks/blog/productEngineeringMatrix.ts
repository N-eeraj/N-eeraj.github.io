import { useQuery } from "@tanstack/react-query"
import request from "@utils/request"
import { WEBSITE } from "@constants/enVariables"
import {
  QUERY_STALE_TIME,
  REVALIDATE_HOURLY,
} from "@constants/time"

export function useFetch() {
  return useQuery({
    queryKey: ["product-engineering-matrix-poll"],
    queryFn: async () => {
      const { data } = await request(`${WEBSITE}/api/blog/product-engineering-matrix`, REVALIDATE_HOURLY)
      return data
    },
    staleTime: QUERY_STALE_TIME,
  })
}

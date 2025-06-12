import { useQuery } from "@tanstack/react-query"
import request from "@utils/request"
import { WEBSITE } from "@constants/enVariables"
import { QUERY_STALE_TIME } from "@constants/time"

export function useFetch() {
  return useQuery({
    queryKey: ["product-engineering-matrix-poll"],
    queryFn: async () => {
      const { data } = await request(`${WEBSITE}/api/blog/product-engineering-matrix`)
      return data
    },
    staleTime: QUERY_STALE_TIME,
  })
}

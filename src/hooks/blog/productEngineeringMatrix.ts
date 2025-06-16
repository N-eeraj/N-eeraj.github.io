import {
  useState,
  type ChangeEvent,
} from "react"

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { toast } from "sonner"

import request from "@utils/request"
import { POLL_QUERY_KEY } from "@constants/blogs/productEngineeringMatrix"
import { WEBSITE } from "@constants/enVariables"
import type {
  Option,
  PollData,
} from "@customTypes/blog/productEngineeringMatrix"
import type { MutationError } from "@customTypes/network"

export function useFetch() {
  const {
    isFetching,
    data,
    error,
  } = useQuery({
    queryKey: [POLL_QUERY_KEY],
    queryFn: async () => {
      const { data } = await request(`${WEBSITE}/api/blog/product-engineering-matrix`)
      return data
    },
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
  const queryClient = useQueryClient()

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as Option | null)
  }

  const clearSelection = () => setSelectedOption(null)

  const {
    mutate,
    isPending,
  } = useMutation({
    mutationFn: async () => {
      await request(`${WEBSITE}/api/blog/product-engineering-matrix`, {
        method: "post",
        body: { option: selectedOption }
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POLL_QUERY_KEY],
      })
      clearSelection()
    },
    onError: ({ message, errors }: MutationError) => {
      const errorMessage = Array.isArray(errors?.option) ? errors.option[0] : message ?? "Something went wrong"
      toast.error("Oops! Failed to submit your selection", {
        description: errorMessage,
        richColors: true,
      })
    },
  })

  return {
    selectedOption,
    handleSelectionChange,
    clearSelection,
    submitSelection: mutate,
    isSubmitting: isPending,
  }
}

import {
  use,
  useState,
  type ChangeEvent,
} from "react"
import {
  useRouter,
  usePathname,
} from "next/navigation"

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query"
import { toast } from "sonner"

import { AuthContext } from "@context/Auth"
import request from "@utils/request"
import {
  BLOG_SLUG,
  BLOG_QUERY_KEY,
} from "@constants/blogs"
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
    queryKey: [
      BLOG_QUERY_KEY,
      POLL_QUERY_KEY,
    ],
    queryFn: async () => {
      const { data } = await request(`${WEBSITE}/api/blog/${BLOG_SLUG.PRODUCT_ENGINEERING_MATRIX}`)
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

export function useSubmit(userVote?: Option) {
  const queryClient = useQueryClient()
  const router = useRouter()
  const pathName = usePathname()
  const { isLoggedIn } = use(AuthContext)

  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (isLoggedIn) {
      setSelectedOption(event.target.value as Option | null)
    } else {
      router.push(`/login?redirect-to=${pathName}`)
    }
  }

  const clearSelection = () => setSelectedOption(null)

  const {
    mutate,
    isPending,
  } = useMutation({
    mutationFn: async () => {
      await request(`${WEBSITE}/api/blog/${BLOG_SLUG.PRODUCT_ENGINEERING_MATRIX}`, {
        method: userVote ? "PATCH" : "POST",
        body: { option: selectedOption }
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          BLOG_QUERY_KEY,
          POLL_QUERY_KEY,
        ],
      })
      clearSelection()
    },
    onError: ({ message, errors }: MutationError) => {
      const errorMessage = Array.isArray(errors?.option) ? errors.option[0] : message ?? "Something went wrong"
      toast.error(`Oops! Failed to ${userVote ? "update" : "submit"} your response`, {
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

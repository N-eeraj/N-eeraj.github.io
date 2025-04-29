import { PropsWithClassName } from "@customTypes/ui"
import { RANDOM_DOCS } from "@constants/npmPackages/random"

export type RandomDocKeys = keyof typeof RANDOM_DOCS
export type RandomDocLabel = typeof RANDOM_DOCS[RandomDocKeys]["label"]

export default interface PageProps {
  searchParams: Promise<{
    tab?: RandomDocKeys
  }>
}

export interface DocsProps extends PropsWithClassName {
  repo: string
  tab: RandomDocKeys
}

export interface DocsSelectProps extends PropsWithClassName {
  currentTab: RandomDocLabel
}

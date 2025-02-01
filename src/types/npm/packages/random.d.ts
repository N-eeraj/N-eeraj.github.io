import { PropsWithClassName } from "@customTypes/ui"
import { RANDOM_DOCS } from "@constants/npmPackages/random"

export default interface PageProps {
  searchParams: Promise<{
    tab?: keyof typeof RANDOM_DOCS
  }>
}

export interface DocsProps extends PropsWithClassName {
  tab: keyof typeof RANDOM_DOCS
}

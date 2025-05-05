import githubRepoDetailsSchema from "@schema/github/repoDetails"
import type { z } from "zod"
import type {
  GithubRepoDetails,
  GithubLanguageResponse,
} from "@customTypes/github"

export default interface Github {
  name: string
  url: string
  getDetails: () => Promise<GithubRepoDetails>
  getLanguages: () => Promise<GithubLanguageResponse>
  readme: () => Promise<string>
}

export interface GithubLanguage {
  language: string
  hexCode: string
  percentage: number
}

export type GithubLanguageResponse = Array<GithubLanguage>

export type GithubRepoDetails = z.infer<typeof githubRepoDetailsSchema>

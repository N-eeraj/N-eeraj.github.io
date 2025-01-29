import { z } from "zod"
import githubRepoDetailsSchema from "@schema/github/repoDetails"

export interface GithubLanguage {
  language: string;
  hexCode: string;
  percentage: number;
}

export type GithubLanguageResponse = Array<GithubLanguage>

export type GithubRepoDetails = z.infer<typeof githubRepoDetailsSchema>

import languageColorSchema, {
  type Language,
} from "@schema/github/languages"
import githubRepoDetailsSchema from "@schema/github/repoDetails"

import {
  GITHUB_BASE_URL,
  GITHUB_USER_CONTENT_BASE_URL,
} from "@constants/code"
import { GITHUB_USERNAME } from "@constants/enVariables"
import { GITHUB_API_BASE_URL } from "@constants/urls"

import languageColors from "@data/github/colors.json"
import type {
  GithubRepoDetails,
  GithubLanguageResponse,
} from "@customTypes/github"

export interface Github {
  name: string
  url: string
  getDetails: () => Promise<GithubRepoDetails>
  getLanguages: () => Promise<GithubLanguageResponse>
  readme: () => Promise<string>
}


export default class GithubRepo {
  name: string
  url: string

  constructor(repoName: string) {
    this.name = repoName
    this.url = `${GITHUB_BASE_URL}/${GITHUB_USERNAME}/${repoName}`
  }

  async getDetails() {
    const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${this.name}`)
    const data = await response.json()
    const safeData = githubRepoDetailsSchema.parse(data)
    return safeData
  }

  async getLanguages() {
    const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${this.name}/languages`)
    const data = await response.json()
    const safeData = languageColorSchema.parse(data)

    const total = Object.values(safeData).reduce((sum: number, value: number) => sum += value, 0)

    const languages = Object.entries(safeData)
      .map(([language, value]) => ({
        language,
        hexCode: languageColors[language as Language],
        percentage: Number((value * 100 / total).toFixed(1)),
      }))
      .sort((a, b) => b.percentage - a.percentage)
    return languages
  }

  static async getFile(repoName: string, path: string) {
    const response = await fetch(`${GITHUB_USER_CONTENT_BASE_URL}/${GITHUB_USERNAME}/${repoName}/refs/heads/main/${path}`)
    const data = await response.text()
    return data
  }

  async readme() {
    const data = await GithubRepo.getFile(this.name, "README.md")
    const replaceRelativeUrl = data.replaceAll("](./", `](${GITHUB_BASE_URL}/${GITHUB_USERNAME}/${this.name}/blob/main/`)
    return replaceRelativeUrl
  }
}

import {
  GITHUB_BASE_URL,
  GITHUB_USER_CONTENT_BASE_URL,
} from "@constants/code"
import {
  GITHUB_USERNAME,
  GITHUB_API_BASE_URL,
} from "@constants/enVariables"

import languageColors from "@data/github/colors.json"

import languageColorSchema, {
  type Language,
} from "@schema/github/languages"
import { GithubLanguageResponse } from "@customTypes/github"

export interface Github {
  name: string
  url: string
  getDetails: () => Promise<any>
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

  
  public get repoName() : string {
    return `${GITHUB_USERNAME}/${this.name}`
  }
  

  async getDetails() {
    const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${this.name}`)
    const data = await response.json()
    return data
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
        percentage: Math.round(value * 100 / total),
      }))
      .sort((a, b) => b.percentage - a.percentage)
    return languages
  }

  async readme() {
    const response = await fetch(`${GITHUB_USER_CONTENT_BASE_URL}/${GITHUB_USERNAME}/${this.name}/refs/heads/main/README.md`)
    const data = await response.text()
    const replaceRelativeUrl = data.replaceAll("](./", `](${GITHUB_BASE_URL}/${GITHUB_USERNAME}/${this.name}/blob/main/`)
    return replaceRelativeUrl
  }
}

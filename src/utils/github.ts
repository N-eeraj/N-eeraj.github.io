import { GITHUB_BASE_URL } from "@constants/code"
import {
  GITHUB_USERNAME,
  GITHUB_API_BASE_URL,
} from "@constants/enVariables"

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
    return data
  }

  async getLanguages() {
    const response = await fetch(`${GITHUB_API_BASE_URL}/repos/${GITHUB_USERNAME}/${this.name}/languages`)
    const data = await response.json()
    return data
  }
}

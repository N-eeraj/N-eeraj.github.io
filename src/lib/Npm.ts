import npmDetailsSchema from "@schema/npm"
import {
  NPM_BASE_URL,
  NPM_PACKAGE_API_URL,
  NPM_WEEKLY_DOWNLOADS_API_URL,
} from "@constants/urls/npm"
import { REVALIDATE_DAILY } from "@constants/time"

export default class NpmPackage {
  name: string
  url: string

  constructor(packageName: string) {
    this.name = packageName
    this.url = `${NPM_BASE_URL}/package/${packageName}`
  }

  async getDetails() {
    const response = await fetch(`${NPM_PACKAGE_API_URL}/${this.name}`, REVALIDATE_DAILY)
    const data = await response.json()
    const safeData = npmDetailsSchema.parse(data)
    return safeData
  }

  async getWeeklyDownloads() {
    const response = await fetch(`${NPM_WEEKLY_DOWNLOADS_API_URL}/${this.name}`, REVALIDATE_DAILY)
    const data = await response.json()
    return data.downloads
  }
}

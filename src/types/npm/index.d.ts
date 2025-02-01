import { z } from "zod"

import npmDetailsSchema from "@schema/npm"
import GithubRepo from "@utils/github"
import NpmPackage from "@utils/npm"

export type NpmPackageDetails = z.infer<typeof npmDetailsSchema>

export interface NpmDetails extends NpmPackageDetails {
  package: NpmPackage
}

export interface NpmCodeDetails {
  npmPackage: NpmPackage
  packageData: NpmPackageDetails
  githubRepo: GithubRepo
}

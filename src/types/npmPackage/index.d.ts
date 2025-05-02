import type { z } from "zod"

import npmDetailsSchema from "@schema/npm"
import GithubRepo from "@lib/Github"
import NpmPackage from "@lib/Npm"

export type NpmPackageDetails = z.infer<typeof npmDetailsSchema>

export interface NpmDetails extends NpmPackageDetails {
  package: NpmPackage
}

export interface NpmCodeDetails {
  npmPackage: NpmPackage
  packageData: NpmPackageDetails
  githubRepo: GithubRepo
}

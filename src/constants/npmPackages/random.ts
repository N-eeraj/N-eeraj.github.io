import type { Metadata } from "next"
import keywords from "@data/keywords/npm-packages/random.json"

export const METADATA: Metadata = {
  title: "Random",
  description: "Random package is a flexible utility for generating random numbers, strings, and booleans in JavaScript/TypeScript with full control via parameters.",
  keywords,
}

export const NPM_PACKAGE_NAME = "@n-eeraj/random"
export const GITHUB_REPO = "random"

export const RANDOM_DOCS = {
  booleanUuid: {
    label: "Boolean & UUID",
    docPath: "src/README.md",
  },
  randomNumber: {
    label: "RandomNumber",
    docPath: "src/RandomNumber/README.md",
  },
  randomString: {
    label: "RandomString",
    docPath: "src/RandomString/README.md",
  },
  randomList: {
    label: "RandomList",
    docPath: "src/RandomList/README.md",
  },
} as const

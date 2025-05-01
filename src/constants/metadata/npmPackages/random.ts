import type { Metadata } from "next"
import keywords from "@keywords/npm-packages/random.json"

const PACKAGE_NAME = "Random"
const DESCRIPTION = "Random package is a flexible utility for generating random numbers, strings, and booleans in JavaScript/TypeScript with full control via parameters."

const METADATA: Metadata = {
  title: PACKAGE_NAME,
  description: DESCRIPTION,
  openGraph: {
    title: `${PACKAGE_NAME} | Npm Packages`,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: `${PACKAGE_NAME} | Npm Packages`,
    description: DESCRIPTION,
  },
  keywords,
}

export default METADATA

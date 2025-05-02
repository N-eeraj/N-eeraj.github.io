import { generateNpmPackageMetadata } from "@utils/metadata"
import keywords from "@keywords/npm-packages/random.json"

const PACKAGE_NAME = "Random"
const DESCRIPTION = "Random package is a flexible utility for generating random numbers, strings, and booleans in JavaScript/TypeScript with full control via parameters."

const METADATA = generateNpmPackageMetadata(PACKAGE_NAME, DESCRIPTION, keywords)

export default METADATA

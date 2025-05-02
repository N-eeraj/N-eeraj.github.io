import type { Metadata } from "next"

import blog from "@blog/product-engineering-matrix.json"
import keywords from "@keywords/blog/product-engineering-matrix.json"
import { generateBlogMetadata } from "@utils/metadata"

const METADATA: Metadata = generateBlogMetadata(blog, keywords)

export default METADATA

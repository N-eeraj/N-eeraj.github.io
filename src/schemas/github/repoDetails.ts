import { z } from "zod"

const githubRepoDetailsSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  homepage: z.string().url(),
  language: z.string(),
  stargazers_count: z.number(),
  size: z.number(),
  forks: z.number(),
  open_issues: z.number(),
  topics: z.array(z.string())
})

export default githubRepoDetailsSchema

import type { Metadata } from "next"
import {
  NAME,
  WEBSITE,
} from "@constants/enVariables"
import keywords from "@keywords/home.json"

const TITLE = `${NAME} | Full Stack Developer | Web & Software Solutions`
const DESCRIPTION = `Explore ${NAME}'s website to explore a portfolio of development expertise, problem-solving skills, and quality-driven work, along with insightful blogs.`

const METADATA: Metadata = {
  metadataBase: new URL(WEBSITE),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [
      "/favicon.svg",
    ],
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      "/favicon.svg",
    ],
  },
  keywords,
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: NAME,
      url: WEBSITE,
    }
  ],
}

export default METADATA

import type { Metadata } from "next"
import {
  NAME,
  WEBSITE,
} from "@constants/enVariables"
import keywords from "@keywords/home.json"

const DESCRIPTION = `Explore ${NAME}'s portfolio, showcasing a range of work that highlights skills in development and problem-solving with a focus on quality and precision.`

const METADATA: Metadata = {
  metadataBase: new URL(WEBSITE),
  title: NAME,
  description: DESCRIPTION,
  openGraph: {
    title: NAME,
    description: DESCRIPTION,
    type: "website",
    images: [
      "/favicon.svg",
    ],
  },
  twitter: {
    title: NAME,
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
  alternates: {
    canonical: WEBSITE,
  },
  authors: [
    {
      name: NAME,
      url: WEBSITE,
    }
  ],
}

export default METADATA

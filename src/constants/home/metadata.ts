import type { Metadata } from "next"
import {
  NAME,
  WEBSITE,
} from "@constants/enVariables"
import keywords from "@keywords/home.json"

const METADATA: Metadata = {
  title: NAME,
  description: `Explore ${NAME}'s portfolio, showcasing a range of work that highlights skills in development and problem-solving with a focus on quality and precision.`,
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

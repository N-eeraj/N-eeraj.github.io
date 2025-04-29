import {
  EMAIL,
  GITHUB_USERNAME,
  LINKED_USERNAME,
  PHONE_NUMBER,
} from "@constants/enVariables"

const CONTACTS = [
  {
    link: `tel:${PHONE_NUMBER}`,
    label: "Phone",
  },
  {
    link: `https://github.com/${GITHUB_USERNAME}`,
    label: "Github",
  },
  {
    link: `https://www.linkedin.com/in/${LINKED_USERNAME}`,
    label: "LinkedIn",
  },
  {
    link: `mailto:${EMAIL}`,
    label: "Email",
  },
] as const

export default CONTACTS

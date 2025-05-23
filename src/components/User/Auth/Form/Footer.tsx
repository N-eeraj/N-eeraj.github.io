import Link from "next/link"
import { Button } from "@shadcn/button"
import { CardFooter } from "@shadcn/card"
import type { AuthFormFooterProps } from "@customTypes/auth/form"

function AuthFormFooter({ footerText, segue }: AuthFormFooterProps) {
  if (!(footerText || segue)) return

  return (
    <CardFooter className="justify-center gap-x-1 mt-2">
      {footerText && (
        <small>
          {footerText}
        </small>
      )}
      {segue && (
        <Link href={segue.link}>
          <Button
            variant="link"
            type="button"
            className="px-0">
            {segue.text}
          </Button>
        </Link>
      )}
    </CardFooter>
  )
}

export default AuthFormFooter

"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@shadcn/button"
import { CardFooter } from "@shadcn/card"
import type { AuthFormFooterProps } from "@auth/types/form"

function AuthFormFooter({ footerText, segue }: AuthFormFooterProps) {
  const searchParams = useSearchParams()
  if (!(footerText || segue)) return

  const queryParams = Object.fromEntries(searchParams.entries())
  const segueLink = `${(segue?.link ?? "")}?${new URLSearchParams(queryParams).toString()}`

  return (
    <CardFooter className="justify-center gap-x-1 mt-2">
      {footerText && (
        <small>
          {footerText}
        </small>
      )}

      {segue && (
        <Link
          href={segueLink}
          scroll={false}
          replace={segue.replace}>
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

import { Button } from "@components/ui/button"
import Link from "next/link"

function RootNotFound() {
  return (
    <main>
      <h1>
        Oops! Looks like you&apos;re lost
      </h1>
      <span>
        Let&apos;s get you back home
      </span>
      <Link href="/">
        <Button variant="link">
          Home
        </Button>
      </Link>
    </main>
  )
}

export default RootNotFound

import { Button } from "@shadcn/button"
import Link from "next/link"

function RootNotFound() {
  return (
    <main>
      <h1>
        Oops! Looks like you're lost
      </h1>
      <span>
        Let's get you back home
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

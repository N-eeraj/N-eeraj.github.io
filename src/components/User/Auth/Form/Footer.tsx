import Link from "next/link"
import { Button } from "@shadcn/button"
import { CardFooter } from "@shadcn/card"

function AuthFormFooter() {
  return (
    <CardFooter className="justify-center mt-2">
      <small>
        Don&apos;t have an account?&nbsp;
      </small>
      <Link href="/sign-up">
        <Button
          variant="link"
          type="button"
          className="px-0">
          Sign up
        </Button>
      </Link>
    </CardFooter>
  )
}

export default AuthFormFooter

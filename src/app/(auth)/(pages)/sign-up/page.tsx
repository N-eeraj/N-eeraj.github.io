import { Suspense } from "react"
import SignUpForm from "@auth/components/SignUp"

function SignUp() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100svh-53px)] md:h-[calc(100svh-69px)] p-4">
      <Suspense>
        <SignUpForm className="w-full max-w-md border-0 sm:border" />
      </Suspense>
    </main>
  )
}

export default SignUp

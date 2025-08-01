import { Suspense } from "react"
import LoginForm from "@auth/components/Login"

function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100svh-53px)] md:h-[calc(100svh-69px)] p-4">
      <Suspense>
        <LoginForm className="w-full max-w-md border-0 sm:border" />
      </Suspense>
    </main>
  )
}

export default Login

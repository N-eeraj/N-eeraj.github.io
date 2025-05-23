import SignUpForm from "@components/User/SignUp"

function SignUp() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100svh-53px)] md:h-[calc(100svh-69px)] p-4">
      <SignUpForm className="w-full max-w-md border-0 sm:border" />
    </main>
  )
}

export default SignUp

import LoginForm from "@components/User/Login"

function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-[calc(100svh-53px)] md:h-[calc(100svh-69px)] p-4">
      <LoginForm className="w-full max-w-md border-0 sm:border" />
    </main>
  )
}

export default Login

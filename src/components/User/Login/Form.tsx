"use client"

import useLogin from "@hooks/useLogin"

function LoginForm() {
  const {} = useLogin()

  return (
    <form>
      <input type="email" />
    </form>
  )
}

export default LoginForm

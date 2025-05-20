"use client"

import { useRouter } from "next/navigation"
import usePreventScroll from "@hooks/usePreventScroll"

function Login() {
  const router = useRouter()
  usePreventScroll()

  return (
    <div className="fixed top-0 left-0 grid place-content-center w-screen h-svh bg-black/10 backdrop-blur z-10">
      <button onClick={router.back}>
        Cancel
      </button>
      Login?
    </div>
  )
}

export default Login

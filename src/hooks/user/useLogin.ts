import { use } from "react"
import { redirect } from "next/navigation"
import { AuthContext } from "@context/Auth"

export default function useLogin() {
  const {
    isLoggedIn,
    setUser,
  } = use(AuthContext)

  if (isLoggedIn) {
    redirect("/")
  }

  return {}
}

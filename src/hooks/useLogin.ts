import { AuthContext } from "@context/Auth"
import { use } from "react"
import { redirect } from "next/navigation"

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

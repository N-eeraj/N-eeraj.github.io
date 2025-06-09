import {
  use,
  useState,
} from "react"
import Button from "@components/Base/Button"
import { AuthContext } from "@context/Auth"
import request from "@utils/request"

function UserMenu() {
  const [loggingOut, setLoggingOut] = useState(false)

  const {
    user,
    clearUser,
  } = use(AuthContext)

  const logoutUser = async () => {
    try {
      setLoggingOut(true)
      await request("/api/logout", {
        method: "POST",
      })
      clearUser()
    } catch (error: any) {
      console.error(error.message)
    } finally {
      setLoggingOut(false)
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      <span>
        {user?.name}
      </span>
      <Button
        variant="ghost"
        loading={loggingOut}
        onClick={logoutUser}>
        Logout
      </Button>
    </div>
  )
}

export default UserMenu

import {
  use,
  useState,
} from "react"
import { Skeleton } from "@shadcn/skeleton"

import Button from "@components/Base/Button"
import { UserContext } from "@contexts/User"
import request from "@utils/request"

function UserMenu() {
  const [loggingOut, setLoggingOut] = useState(false)

  const {
    user,
    isLoadingUser,
    clearUser,
  } = use(UserContext)

  const logoutUser = async () => {
    try {
      setLoggingOut(true)
      await request("/api/logout", {
        method: "POST",
      })
      clearUser()
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        console.error(error.message)
      }
    } finally {
      setLoggingOut(false)
    }
  }

  return (
    <div className="flex items-center gap-x-2">
      {isLoadingUser ?
        <>
          <Skeleton className="w-40 h-6 bg-zinc-800" />
          <Skeleton className="w-[46px] h-5 mx-4 my-2 bg-zinc-800 delay-300" />
        </> :
        <>
          <span>
            {user?.name}
          </span>
          <Button
            variant="ghost"
            loading={loggingOut}
            onClick={logoutUser}>
            Logout
          </Button>
        </>
      }
    </div>
  )
}

export default UserMenu

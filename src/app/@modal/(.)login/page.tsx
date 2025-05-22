"use client"

import { useEffect } from "react"
import {
  useRouter,
  usePathname,
} from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
} from "@shadcn/dialog"
import LoginForm from "@components/User/Login"
import usePreventScroll from "@hooks/usePreventScroll"

function Login() {
  const router = useRouter()
  const pathname = usePathname()
  const {
    disableScroll,
    enableScroll,
  } = usePreventScroll()

  const handleChange = (value: boolean) => {
    if (!value) {
      enableScroll()
      router.back()
    }
  }

  const open = pathname === "/login"

  useEffect(() => {
    if (open) {
      disableScroll()
    } else {
      enableScroll()
    }
  }, [open, disableScroll, enableScroll])

  return (
    <Dialog
      defaultOpen
      open={open}
      modal
      onOpenChange={handleChange}>
      <DialogOverlay className="backdrop-blur-sm" />
      <DialogContent
        aria-describedby={undefined}
        className="w-11/12 !max-w-md p-0 border-0 [&>button]:hidden">
        <DialogTitle className="hidden">
          Login
        </DialogTitle>
        <LoginForm className="w-full" />
      </DialogContent>
    </Dialog>
  )
}

export default Login

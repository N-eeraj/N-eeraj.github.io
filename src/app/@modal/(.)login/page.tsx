"use client"

import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogOverlay,
} from "@shadcn/dialog"
import LoginForm from "@components/User/Login/Form"
import usePreventScroll from "@hooks/usePreventScroll"

function Login() {
  const router = useRouter()
  usePreventScroll()

  const handleChange = (value: boolean) => {
    if (!value) {
      router.back()
    }
  }

  return (
    <Dialog
      defaultOpen
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

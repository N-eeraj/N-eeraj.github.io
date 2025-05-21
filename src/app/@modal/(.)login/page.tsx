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
        className="[&>button]:focus:ring-0">
        <DialogTitle className="hidden">
          Login
        </DialogTitle>
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}

export default Login

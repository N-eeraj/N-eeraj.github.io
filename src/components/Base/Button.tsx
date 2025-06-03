import { Button } from "@shadcn/button"
import { LucideLoader2 } from "lucide-react"
import type { ButtonProps } from "@customTypes/ui/button"

function BaseButton({ disabled, loading, children, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      disabled={loading || disabled}
      className="w-full bg-foreground hover:bg-foreground/80">
      { loading ?
          <LucideLoader2 className="animate-spin" /> :
          children
      }
    </Button>
  )
}

export default BaseButton

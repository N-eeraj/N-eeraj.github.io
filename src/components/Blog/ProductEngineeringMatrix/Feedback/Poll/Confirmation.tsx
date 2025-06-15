import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@shadcn/alert-dialog"
import { LucideLoader2 } from "lucide-react"

import type { Option } from "@customTypes/blog/productEngineeringMatrix"

interface ConfirmationProps {
  selection: Option | null
  loading: boolean
  onCancel: () => void
  onConfirm: () => void
}

function Confirmation({ selection, loading, onCancel, onConfirm }: ConfirmationProps) {
  return (
    <AlertDialog open={!!selection}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to choose the
            <span className={selection === "red" ? "text-red-500" : "text-sky-500"}>
              &nbsp;{selection} pill&nbsp;
            </span>
            ?
          </AlertDialogTitle>
          <AlertDialogDescription>
            {
              selection === "red" ?
                "Escape the mainstream and choose a stack built for high-performance systems, speed, and scalability.":
                "Experience the rich ecosystem with unmatched community support, and the convenience of JavaScript across the entire stack."
            }
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={loading}
            className="hover:bg-primary/10 dark:hover:bg-primary/20"
            onClick={onCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={onConfirm}>
            {
              loading ?
              <LucideLoader2 className="animate-spin" /> :
              "Continue"
            }
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Confirmation

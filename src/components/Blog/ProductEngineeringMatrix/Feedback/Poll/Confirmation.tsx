import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogOverlay,
} from "@shadcn/alert-dialog"
import { LucideLoader2 } from "lucide-react"

import { CONFIRMATION_MESSAGE_MAP } from "@constants/blogs/productEngineeringMatrix"
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
      <AlertDialogOverlay className="backdrop-blur-xs" />
      {selection && (
        <AlertDialogContent>
          <AlertDialogHeader className="text-start">
            <AlertDialogTitle>
              Are you sure you want to choose the
              <span className={CONFIRMATION_MESSAGE_MAP[selection].class}>
                &nbsp;{selection} pill&nbsp;
              </span>
              <span className="animate-pulse">
                ?
              </span>
            </AlertDialogTitle>
            <AlertDialogDescription>
              {CONFIRMATION_MESSAGE_MAP[selection].text}
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
      )}
    </AlertDialog>
  )
}

export default Confirmation

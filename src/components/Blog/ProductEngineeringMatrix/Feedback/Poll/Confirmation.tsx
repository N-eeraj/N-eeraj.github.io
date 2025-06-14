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
import type { Option } from "@customTypes/blog/productEngineeringMatrix"

interface ConfirmationProps {
  selection: Option | null
  onCancel: () => void
  onConfirm: () => void
}

function Confirmation({ selection, onCancel, onConfirm }: ConfirmationProps) {
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
          <AlertDialogCancel onClick={onCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Confirmation

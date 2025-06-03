import type {
  FieldError,
  GlobalError,
} from "react-hook-form"

function ErrorMessage({ error }: { error?: FieldError | GlobalError }) {
  if (!error) return

  return (
    <small className="text-destructive">
      {error.message}
    </small>
  )
}

export default ErrorMessage

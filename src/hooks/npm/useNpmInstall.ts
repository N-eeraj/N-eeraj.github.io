import { useRef } from "react"
import { toast } from "sonner"

const clearSelection = () => {
  const selection = window.getSelection()
  selection?.removeAllRanges()
}

export default function useNpmInstall(packageName: string) {
  const installCodeRef = useRef<HTMLElement>(null)

  const handleCopyMouseEnter = () => {
    if (!installCodeRef.current) return
    const range = document.createRange()
    range.selectNodeContents(installCodeRef.current)
    const selection = window.getSelection()
    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  const handleCopyInstallCommand = () => {
    try {
      navigator.clipboard.writeText(installCodeRef.current?.textContent ?? `npm install ${packageName}`)
      toast.success("Copied to clipboard!", {
        richColors: true,
      })
    } catch {
      toast.error("Failed to copy!", {
        richColors: true,
      })
    }
  }

  return {
    installCodeRef,
    clearSelection,
    handleCopyMouseEnter,
    handleCopyInstallCommand,
  }
}

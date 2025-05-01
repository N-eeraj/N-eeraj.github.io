import { ChevronRight } from "lucide-react"
import InstallCommand from "./Command"

function Install({ package: packageName }: { package: string }) {
  return (
    <div className="space-y-3">
      <span className="opacity-80">
        Install
      </span>
      <div className="flex items-center gap-x-2 p-2.5 border border-foreground/50 rounded-md">
        <ChevronRight size={18} />
        <InstallCommand package={packageName} />
      </div>
    </div>
  )
}

export default Install

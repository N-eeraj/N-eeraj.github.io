import CodeBlock from "@components/Base/CodeBlock"
import {
  Files,
  ChevronRight,
} from "lucide-react"

function Install({ package: packageName }: { package: string }) {
  return (
    <div className="space-y-3">
      <span className="opacity-80">
        Install
      </span>
      <div className="flex items-center gap-x-2 p-2.5 border border-foreground/50 rounded-md">
        <ChevronRight size={18} />
        <CodeBlock className="text-sm">
          npm install {packageName}
        </CodeBlock>
        <button className="ml-auto">
          <Files size={14} />
        </button>
      </div>
    </div>
  )
}

export default Install

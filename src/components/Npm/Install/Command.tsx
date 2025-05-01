"use client"

import CodeBlock from "@components/Base/CodeBlock"
import useNpmInstall from "@hooks/npm/useNpmInstall"
import { Files } from "lucide-react"

function InstallCommand({ package: packageName }: { package: string }) {
  const {
    installCodeRef,
    clearSelection,
    handleCopyMouseEnter,
    handleCopyInstallCommand,
  } = useNpmInstall(packageName)

  return (
    <>
      <CodeBlock
        ref={installCodeRef}
        className="text-sm">
        npm install {packageName}
      </CodeBlock>
      <button
        className="ml-auto"
        onMouseEnter={handleCopyMouseEnter}
        onMouseLeave={clearSelection}
        onClick={handleCopyInstallCommand}>
        <Files size={14} />
      </button>
    </>
  )
}

export default InstallCommand

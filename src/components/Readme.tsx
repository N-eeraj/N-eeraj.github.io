import { MDXRemote } from "next-mdx-remote/rsc"
import type { MDXRemoteProps } from "next-mdx-remote/rsc"
import clsx from "clsx"
import { PropsWithClassName } from "@customTypes/ui"

function Readme({ file, components, className }: {
  file: string
  components?: Readonly<MDXRemoteProps["components"]>
} & PropsWithClassName) {
  return (
    <div className={clsx(
      "prose dark:prose-invert prose-neutral prose-code:before:hidden prose-code:after:hidden",
      className,
    )}>
      <MDXRemote
        source={file}
        components={{
          a: ({ children, ...props }) => (
            <a
              {...props}
              target="_blank">
              {children}
            </a>
          ),
          pre: ({ children, className, ...props }) => (
            <pre
              {...props}
              className={clsx(
                "max-w-[calc(100vw-24px)]",
                className,
              )}>
              {children}
            </pre>
          ),
          ...components
        }} />
    </div>
  )
}

export default Readme

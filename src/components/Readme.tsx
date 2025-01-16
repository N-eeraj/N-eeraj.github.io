import { MDXRemote } from "next-mdx-remote/rsc"

function Readme({ file }: { file: string }) {
  return (
    <div className="prose dark:prose-invert prose-neutral prose-code:before:hidden prose-code:after:hidden">
      <MDXRemote
        source={file}
        components={{
          a: ({ children, ...props }) => (
            <a
              {...props}
              target="_blank">
              {children}
            </a>
          )
        }} />
    </div>
  )
}

export default Readme

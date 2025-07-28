import Header from "./Header"
import Footer from "./Footer"

import {
  Card,
  CardContent,
} from "@shadcn/card"
import { ShineBorder } from "@magicui/shine-border"

import clsx from "clsx"
import type { BaseAuthFormProps } from "@customTypes/auth/form"

function UserAuthForm({ title, description, footerText, segue, children, className }: BaseAuthFormProps) {
  return (
    <Card className={clsx(
      "relative flex flex-col gap-6 overflow-hidden",
      className,
    )}>
      <ShineBorder
        shineColor={["hsl(var(--primary))", "var(--color-indigo-700)", "hsl(var(--primary))"]}
        duration={24}
        className="hidden dark:block" />
      <Header
        title={title}
        description={description} />
      <CardContent>
        {children}
        <Footer
          footerText={footerText}
          segue={segue} />
      </CardContent>
    </Card>
  )
}

export default UserAuthForm

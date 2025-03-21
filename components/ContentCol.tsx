import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export interface ContentColProps {
  className?: string
  children?: ReactNode
}

export default function ContentCol({ className, children }: ContentColProps) {
  return (
    <div
      className={cn(
        "col-span-full md:col-span-10 md:col-start-2 xl:col-span-6 xl:col-start-4",
        className,
      )}
    >
      {children}
    </div>
  )
}

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

export interface GridProps {
  children: ReactNode
  className?: string
}

export default function Grid({ className, children }: GridProps) {
  return (
    <div className={cn("flex justify-center px-6 md:px-12", className)}>
      <div className="grid w-full max-w-[1400px] grid-cols-4 gap-4 md:grid-cols-12 md:gap-6">
        {children}
      </div>
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"
import React from "react"

export interface RotateButtonProps {
  className?: string
}

export default function RotateButton(props: RotateButtonProps) {
  const letters = "tap here".split("")

  return (
    <div
      className={cn(
        "animate-button font-fraktur flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-black font-bold duration-300",
        props.className,
      )}
    >
      {letters.map((letter, index) => (
        <div
          className={
            "absolute inset-x-auto flex h-full w-2 justify-center text-[0.7rem]"
          }
          style={{ transform: `rotate(${index * 32}deg)` }}
          key={index}
        >
          {letter}
        </div>
      ))}
    </div>
  )
}

"use client"

import bandLeipzig from "@/photos/band-leipzig.png"
import danielLeipzig from "@/photos/daniel-leipzig.png"
import modular from "@/photos/modular.png"
import portraitHebrew from "@/photos/portrait-hebrew.jpg"
import portraitRed from "@/photos/portrait-red.jpg"

import { useState } from "react"
import RotateButton from "./RotateButton"
import StackedPhoto from "./StackedPhoto"
import { cn } from "@/lib/utils"

export interface PicturePileProps {
  className?: string
}

export default function StackedPhotos({ className }: PicturePileProps) {
  const [pileImageProps] = useState([
    {
      src: bandLeipzig,
      text: "09.11.24 Nochbesser leben, Leipzig",
      id: "1",
    },
    {
      src: portraitHebrew,
      text: "March 25, Band Portrait",
      id: "4",
    },
    {
      src: danielLeipzig,
      text: "09.11.24 Nochbesser leben, Leipzig",
      id: "2",
    },
    {
      src: modular,
      text: "09.11.24 Nochbesser leben, Leipzig",
      id: "3",
    },
    {
      src: portraitRed,
      text: "March 25, Band Portrait",
      id: "5",
      forceTop: 0.5,
    },
  ])

  const [counter, setCounter] = useState(pileImageProps.length)

  function handleClick() {
    if (counter === -1 * pileImageProps.length) {
      setCounter(pileImageProps.length - 1)
      return
    }

    setCounter((x) => x - 1)
  }

  return (
    <div className={cn(className, "select-none")}>
      <div
        className="cursor-click relative h-[60lvh] w-full px-2 py-4 md:h-[80lvh] md:px-4 md:py-8"
        onClick={handleClick}
      >
        <div className={"relative size-full select-none"}>
          {pileImageProps.map((props, index) => (
            <StackedPhoto
              key={props.id}
              index={index}
              showImages={Math.abs(counter)}
              {...props}
            />
          ))}
        </div>
        <RotateButton className={"absolute right-2 bottom-2 md:hidden"} />
      </div>
    </div>
  )
}

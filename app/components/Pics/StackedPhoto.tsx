"use client"

import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export interface PileImageProps {
  src: StaticImageData
  showImages: number
  index: number
  text?: string
  textRight?: boolean
  textTop?: boolean
}

export default function StackedPhoto(props: PileImageProps) {
  const top = useState(random(0, 1))[0]
  const left = useState(random(0, 1))[0]
  const [isFirstRender, setIsFirstRender] = useState(true)

  function random(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  const isWide = props.src.width / props.src.height > 1
  const heightScreenPercentage = isWide ? 0.58 : 0.7
  const widthScreenPercentage = isWide ? 0.82 : 0.6

  const screenHeight = typeof window === "undefined" ? 1000 : window.innerHeight
  const screenWidth = typeof window === "undefined" ? 1000 : window.innerWidth

  const scaleFactor =
    screenWidth > screenHeight
      ? (screenHeight * heightScreenPercentage) / props.src.height
      : (screenWidth * widthScreenPercentage) / props.src.width

  const height = Math.floor(props.src.height * scaleFactor)
  const width = Math.floor(props.src.width * scaleFactor)

  useEffect(() => {
    if (!isFirstRender) {
      return
    }
    setIsFirstRender(false)
  }, [isFirstRender])

  if (isFirstRender) {
    return null
  }

  return (
    <div
      className={cn("absolute shadow-2xl select-none", {
        hidden: props.index + 1 > props.showImages,
        "max-md:brightness-50 md:blur-sm": props.index + 1 !== props.showImages,
      })}
      style={
        isFirstRender
          ? {}
          : {
              width: `${width}px`,
              height: `${height}px`,
              left: `calc(${left} * (100% - ${width}px))`,
              top: `calc(${top} * (100% - ${height}px))`,
            }
      }
    >
      <Image
        alt={"pile image"}
        fill={true}
        src={props.src}
        sizes={"(max-width: 500px) 400px, (max-width: 768px) 800px, 1200px"}
        loading={"eager"}
        className={cn("object-contain transition-all select-none")}
      />
      <div
        className={cn(
          `absolute bottom-0 left-0 bg-black/50 px-1 py-0.5 text-xs md:px-2 md:py-1 md:text-base`,
          {
            "right-0 left-auto": props.textRight,
            "bottom top-0 bottom-auto": props.textTop,
            "max-md:hidden": props.index + 1 !== props.showImages,
          },
        )}
      >
        <p className="font-fraktur">{props.text}</p>
      </div>
    </div>
  )
}

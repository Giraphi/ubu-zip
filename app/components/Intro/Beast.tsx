"use client"

import Grid from "@/components/Grid"
import BeastSVG from "@/svg/Beast.svg"
import { motion, useAnimation } from "motion/react"
import { useEffect } from "react"
import { useMediaQuery } from "react-responsive"

const repeatsLg = Array.from({ length: 13 }, () => [10, -10]).flat()
const repeatsSm = Array.from({ length: 10 }, () => [7, -7]).flat()

export default function Beast() {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  const controls = useAnimation()

  useEffect(() => {
    if (isDesktop) {
      controls.start({
        x: ["100%", "0%"],
        y: [0, ...repeatsLg, 0],
        transition: {
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      })
    } else {
      controls.start({
        x: ["100%", "0%"],
        y: [0, ...repeatsSm, 0],
        transition: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      })
    }
  }, [isDesktop, controls])

  return (
    <Grid>
      <div className="relative col-span-full flex justify-end overflow-hidden pt-8 md:col-span-10 md:col-start-2 md:pb-4 xl:col-span-8 xl:col-start-3">
        <div className="b-8 mr-28 w-full md:mr-36">
          <motion.div
            className="h-48"
            initial={{ x: "100%" }}
            animate={controls}
          >
            <BeastSVG className="w-28 md:w-36" />
          </motion.div>
        </div>
      </div>
    </Grid>
  )
}

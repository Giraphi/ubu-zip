"use client"

import styles from "./styles.module.css"
import { CSSProperties, ReactNode, useEffect, useState } from "react"

export interface GlitchLinkProps {
  bgColor?: string
  children?: ReactNode
  waitSec?: number
  activeSec?: number
  alwaysOn?: boolean
}

export default function GlitchText({
  bgColor,
  children,
  waitSec = 3,
  activeSec = 1.5,
  alwaysOn,
}: GlitchLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (alwaysOn) {
      return
    }

    const waitTime = waitSec * 1000
    const activeTime = activeSec * 1000

    const toggleGlitch = () => {
      setIsActive(true)
      setTimeout(() => setIsActive(false), activeTime)
    }

    const interval = setInterval(toggleGlitch, waitTime + activeTime)
    toggleGlitch()

    return () => clearInterval(interval)
  }, [waitSec, activeSec, alwaysOn])

  const cssVars = {
    "--bg": bgColor || "#0a0a0a",
  } as CSSProperties

  const renderGlitch = isActive || alwaysOn

  return (
    <span
      style={cssVars}
      className={renderGlitch ? styles.glitchLink : "flex leading-[1]"}
    >
      {renderGlitch && <span className={styles.glitchB}>{children}</span>}
      {children}
      {renderGlitch && <span className={styles.glitchA}>{children}</span>}
    </span>
  )
}

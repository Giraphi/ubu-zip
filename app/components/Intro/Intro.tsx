import Grid from "@/components/Grid"
import Links from "./Links"
import Logo from "@/svg/logo.svg"
import Beast from "./Beast"
import ContentCol from "@/components/ContentCol"

export interface IntroProps {
  className?: string
}

export default function Intro({ className }: IntroProps) {
  return (
    <div className={className}>
      <Grid>
        <ContentCol>
          <Logo className="animate-flicker-color w-full pb-8" />
          <div className="flex">
            <p>
              Ein merkwürdiges Gefühl überkommt dich, das du nicht richtig
              einordnen kannst. Endlich bist du wach, aber was ist das für ein
              Ort? Willkommen bei ubu.zip, dem Nachfolge-Projekt der Münchner
              Band Ubu Imperator.
            </p>
          </div>
        </ContentCol>
      </Grid>
      <Beast />
      <Grid>
        <ContentCol className="flex justify-center">
          <Links />
        </ContentCol>
      </Grid>
    </div>
  )
}

import ContentCol from "@/components/ContentCol"
import GlitchText from "@/components/GlitchText/GlitchText"
import Grid from "@/components/Grid"
import { cn } from "@/lib/utils"
import Glyphs from "@/svg/glyphs.svg"

export interface DemoProps {
  className?: string
}

export default function Demo({ className }: DemoProps) {
  return (
    <Grid className={className}>
      <ContentCol>
        <div className="font-fraktur flex justify-center text-7xl">
          <GlitchText activeSec={5.5} waitSec={2}>
            <h1 className="inline">Demo</h1>
          </GlitchText>
        </div>
      </ContentCol>
      <ContentCol>
        <p className="pb-8 lg:pb-16">
          Niemand weiß genau, wie sich dieses Ding den Weg in die Realität
          bahnen konnte.
          <br />
          {'"Recording", "Mixing"'} und Gestaltung all homemade by ubu.zip.
        </p>
      </ContentCol>
      <div className="col-span-full flex w-full items-center justify-center md:col-span-10 md:col-start-2 md:justify-between xl:col-span-8 xl:col-start-3">
        <Glyphs className="hidden h-[400px] md:block lg:h-[500px]" />

        <iframe
          title={"bandcamp"}
          src="https://bandcamp.com/EmbeddedPlayer/album=591127691/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
          seamless
          className="h-[530px] w-[230px] border-0 lg:h-[677px] lg:w-[400px]"
        />
        <Glyphs className="bg-red hidden h-[400px] md:block lg:h-[500px]" />
      </div>
    </Grid>
  )
}

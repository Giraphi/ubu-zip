import ContentCol from "@/components/ContentCol"
import GlitchText from "@/components/GlitchText/GlitchText"
import Grid from "@/components/Grid"
import { cn } from "@/lib/utils"
import Boticelli from "@/svg/Boticelli.svg"
import Denker from "@/svg/Denker.svg"

export interface GigsProps {
  className?: string
}

export default function Gigs({ className }: GigsProps) {
  return (
    <Grid className={className}>
      <ContentCol>
        <div className="font-fraktur flex justify-center text-7xl">
          <GlitchText activeSec={5.1} waitSec={2.2}>
            <h1 className="inline">Gigs</h1>
          </GlitchText>
        </div>
      </ContentCol>
      <div className="col-span-2 col-start-3 hidden md:col-start-1 md:block lg:col-start-3">
        <Boticelli className="w-full" />
      </div>
      <div className="col-span-full flex justify-center pb-8 md:col-span-8 md:col-start-3 md:pb-0 lg:col-span-4">
        <div className="grid grid-cols-[auto_1fr] gap-x-1.5">
          <div className="contents">
            <span>05.09. - </span>
            <span>Sunny Red, München</span>
          </div>
          <div className="contents">
            <span>13.06. - </span>
            <span>Glockenbachwerkstatt, München</span>
          </div>
          <div className="contents">
            <span>21.05. - </span>
            <span>Import Export, München</span>
          </div>

          <div className="contents">
            <span>12.05. - </span>
            <span>Favorit Bar, München</span>
          </div>

          <div className="contents">
            <span>04.05. - </span>
            <span>Bello Bar, Dublin IR</span>
          </div>
          <div className="contents">
            <span>03.05. - </span>
            <span>Fred Zeppelin's, Cork IR</span>
          </div>
          <div className="contents">
            <span>02.05. - </span>
            <span>The Kasbah, Limerick IR</span>
          </div>
          <div className="contents">
            <span>01.05. - </span>
            <span>The Deer Shead, Belfast IR</span>
          </div>
          <div className="contents">
            <span>28.03. - </span>
            <span>Walter Storms Gallerie, München</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 col-start-2 md:col-span-2 md:col-start-11 lg:col-start-9">
        <Denker className="mb-auto w-full" />
      </div>
    </Grid>
  )
}

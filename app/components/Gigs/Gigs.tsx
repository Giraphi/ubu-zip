import ContentCol from "@/components/ContentCol"
import GlitchText from "@/components/GlitchText/GlitchText"
import Grid from "@/components/Grid"
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
            <span>22.05.27 - </span>
            <span>Eastfilly Festival, Ostfildern bei Stuttgart</span>
          </div>
          <div className="contents">
            <span>06.02.27 - </span>
            <span>Altes Spital, Viechtach</span>
          </div>
          <div className="contents">
            <span>08.01.27 - </span>
            <span>Glockenbachwerkstatt, München</span>
          </div>
          <div className="contents">
            <span>21.11.26 - </span>
            <span>Treppenbar, München</span>
          </div>
          <div className="contents">
            <span>02.10.26 - </span>
            <span>Rhiz, Wien</span>
          </div>
          <div className="contents">
            <span>26.09.26 - </span>
            <span>Zeughaus, Passau. Mit Miss Mellow</span>
          </div>
          <div className="contents">
            <span>12.07.26 - </span>
            <span>El Ritual Festival, Bayerischer Wald</span>
          </div>
          <div className="contents">
            <span>16.06.26 - </span>
            <span>Glockenbachwerkstatt, München. Mit Nasty Neighbors</span>
          </div>
          <div className="contents">
            <span>04.06.26 - </span>
            <span>Milla, München. Krauthammer</span>
          </div>
          <div className="contents">
            <span>09.05.26 - </span>
            <span>Walter Storms Galerie, München</span>
          </div>
          <div className="contents">
            <span>07.03.26 - </span>
            <span>Tamtam Treppenbar, München. Mit Golden Diskoship</span>
          </div>
          <div className="contents">
            <span>06.03.26 - </span>
            <span>Noch Besser Leben, Leipzig. Mit Mygolden Diskoship</span>
          </div>

          <details className="col-span-2 mt-4">
            <summary className="cursor-pointer text-xl">2025</summary>
            <div className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-1.5">
              <div className="contents">
                <span>19.12.25 - </span>
                <span>Tamtam Treppenbar, München</span>
              </div>
              <div className="contents">
                <span>01.11.25 - </span>
                <span>Loge. Berlin</span>
              </div>
              <div className="contents">
                <span>05.09.25 - </span>
                <span>Sunny Red, München</span>
              </div>
              <div className="contents">
                <span>13.06.25 - </span>
                <span>Glockenbachwerkstatt, München</span>
              </div>
              <div className="contents">
                <span>21.05.25 - </span>
                <span>Import Export, München</span>
              </div>
              <div className="contents">
                <span>12.05.25 - </span>
                <span>Favorit Bar, München</span>
              </div>
              <div className="contents">
                <span>04.05.25 - </span>
                <span>Bello Bar, Dublin IR</span>
              </div>
              <div className="contents">
                <span>03.05.25 - </span>
                <span>Fred Zeppelin&apos;s, Cork IR</span>
              </div>
              <div className="contents">
                <span>02.05.25 - </span>
                <span>The Kasbah, Limerick IR</span>
              </div>
              <div className="contents">
                <span>01.05.25 - </span>
                <span>The Deer Shead, Belfast IR</span>
              </div>
              <div className="contents">
                <span>28.03.25 - </span>
                <span>Walter Storms Gallerie, München</span>
              </div>
            </div>
          </details>
        </div>
      </div>
      <div className="col-span-2 col-start-2 md:col-span-2 md:col-start-11 lg:col-start-9">
        <Denker className="mb-auto w-full" />
      </div>
    </Grid>
  )
}

import ContentCol from "@/components/ContentCol"
import GlitchText from "@/components/GlitchText/GlitchText"
import Grid from "@/components/Grid"
import React from "react"

type Props = {
  className?: string
}

export default function Video({ className }: Props) {
  return (
    <Grid className={className}>
      <ContentCol>
        <div className="font-fraktur flex justify-center text-7xl">
          <GlitchText activeSec={4.9} waitSec={1.8}>
            <h1 className="inline">Video</h1>
          </GlitchText>
        </div>
      </ContentCol>

      <ContentCol>
        <div className="aspect-video">
          <iframe
            className="pb-10"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dp-LS8U8Avk?si=wumondn__WhlFicC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </ContentCol>

      <ContentCol>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/BbhixaSwYa8?si=SroDrgmcgktqyvgO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </ContentCol>
    </Grid>
  )
}

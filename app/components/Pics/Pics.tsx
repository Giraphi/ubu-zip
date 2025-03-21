import ContentCol from "@/components/ContentCol"
import GlitchText from "@/components/GlitchText/GlitchText"
import Grid from "@/components/Grid"
import StackedPhotos from "./StackedPhotos"

export interface PicsProps {
  className?: string
}

export default function Pics({ className }: PicsProps) {
  return (
    <Grid className={className}>
      <ContentCol className="cursor-click">
        <div className="font-fraktur flex justify-center text-7xl">
          <GlitchText activeSec={4.9} waitSec={1.8}>
            <h1 className="inline">Pics</h1>
          </GlitchText>
        </div>
      </ContentCol>
      <StackedPhotos className="col-span-full" />
    </Grid>
  )
}

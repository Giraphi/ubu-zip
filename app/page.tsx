import Video from "@/app/components/Video/Video"
import Demo from "./components/Demo/Demo"
import Gigs from "./components/Gigs/Gigs"
import Intro from "./components/Intro/Intro"
import Pics from "./components/Pics/Pics"

export default function Home() {
  return (
    <div className="font-jac pt-12 text-xl lg:pt-[10vh]">
      <Intro className="pb-22 lg:pb-32" />
      <Gigs className="pb-22 lg:pb-32" />
      <Demo className="pb-22 lg:pb-32" />
      <Video className="pb-22 lg:pb-32" />
      <Pics className="pb-22 lg:pb-32" />
    </div>
  )
}

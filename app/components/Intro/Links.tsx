import Image from "next/image"
import Link from "next/link"

export default function Links() {
  return (
    <div className="font-fraktur mt-4 flex w-full flex-col items-center gap-8 text-3xl lg:gap-16">
      <Link
        href="mailto:ubu.zip@gmail.com"
        className="mt-3 -rotate-6 hover:text-[yellow] lg:rotate-6"
      >
        ubu.zip.band@gmail.com
      </Link>

      <div className="text-md flex w-full flex-col items-center gap-8 md:flex-row md:justify-between md:gap-4">
        <Link
          href="https://www.instagram.com/ubu.zip/"
          className="flex origin-center rotate-8 items-center gap-2 hover:text-[yellow] md:rotate-12"
        >
          <Image src="/insta-icon.png" width={28} height={28} alt={""} />
          Instagram
        </Link>
        <Link
          href="https://ubuzip.bandcamp.com/album/ubu-zip"
          className="flex origin-center -rotate-6 items-center gap-2 hover:text-[yellow] md:-rotate-8"
        >
          <Image src="/bandcamp-icon.png" width={28} height={28} alt={""} />
          Bandcamp
        </Link>
        <Link
          href="https://www.schaufelundbesen.com/"
          className="flex origin-center rotate-6 items-start gap-2 hover:text-[yellow] md:rotate-6"
        >
          <Image
            src="/schaufel-icon.png"
            width={28}
            height={28}
            alt={""}
            className="mt-1"
          />
          <span className="leading-[1em]">
            Schaufel & Besen <br /> Records
          </span>
        </Link>
      </div>
    </div>
  )
}

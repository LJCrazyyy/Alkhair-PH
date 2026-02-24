"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

type VideoItem = {
  src: string
  title?: string
  description?: string
}

type VideoCarouselProps = {
  videos: VideoItem[]
  onSlideChange?: (index: number) => void
}

export function VideoCarousel({ videos, onSlideChange }: VideoCarouselProps) {
  const [api, setApi] = React.useState<any>(null)
  const [active, setActive] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      const idx = api.selectedScrollSnap()
      setActive(idx)
      onSlideChange?.(idx)
    }

    // initial
    update()

    api.on('select', update)
    api.on('reInit', update)

    return () => {
      api.off('select', update)
      api.off('reInit', update)
    }
  }, [api, onSlideChange])

  return (
    <div className="relative">
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="flex">
          {videos.map((v, i) => (
            <CarouselItem key={i} className="w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/5 shadow-lg">
                <video
                  src={v.src}
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Mobile: simple pager */}
      <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={"w-2 h-2 rounded-full " + (active === idx ? 'bg-white' : 'bg-white/40')}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoCarousel

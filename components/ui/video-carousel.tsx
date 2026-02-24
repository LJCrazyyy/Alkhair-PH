"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

type VideoCarouselProps = {
  videos: string[]
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const [api, setApi] = React.useState<any>(null)

  return (
    <div className="relative">
      <Carousel opts={{ loop: false }} setApi={setApi}>
        <CarouselContent className="flex">
          {videos.map((src, i) => (
            <CarouselItem key={i} className="w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-white/5 shadow-lg">
                <video
                  src={src}
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>

      {/* Mobile: simple pager */}
      <div className="flex items-center justify-center gap-2 mt-4 md:hidden">
        {videos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className="w-2 h-2 rounded-full bg-white/40"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoCarousel

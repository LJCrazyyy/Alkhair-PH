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
  const videoRefs = React.useRef<Array<HTMLVideoElement | null>>([])

  React.useEffect(() => {
    if (!api) return

    const update = () => {
      const idx = api.selectedScrollSnap()
      setActive(idx)
      onSlideChange?.(idx)

      // Pause all videos and play the current one
      videoRefs.current.forEach((video, i) => {
        if (video) {
          if (i === idx) {
            video.play().catch(() => {
              // Autoplay might be blocked by browser, ignore
            })
            
            // Add ended event listener to advance to next slide
            video.addEventListener('ended', handleVideoEnded)
          } else {
            video.pause()
            video.currentTime = 0
            video.removeEventListener('ended', handleVideoEnded)
          }
        }
      })
    }

    const handleVideoEnded = () => {
      api.scrollNext()
    }

    // initial
    update()

    api.on('select', update)
    api.on('reInit', update)

    return () => {
      api.off('select', update)
      api.off('reInit', update)
      // Cleanup event listeners
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener('ended', handleVideoEnded)
        }
      })
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
                  ref={(el) => {
                    videoRefs.current[i] = el
                  }}
                  src={v.src}
                  controls
                  className="w-full h-full object-contain"
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

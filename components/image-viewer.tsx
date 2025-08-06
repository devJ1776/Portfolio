"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageViewerProps {
  images: { src: string; alt: string }[]
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageViewer({ images, open, onOpenChange }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="!p-0 !m-0 !rounded-none bg-black border-none fixed inset-0 w-screen h-screen max-w-none !translate-x-0 !translate-y-0 !top-0 !left-0"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">Image Gallery</DialogTitle>
      
        <div className="w-screen h-screen flex items-center justify-center">
       
          <div className="relative max-w-[95vw] max-h-[95vh]">
          <button
          onClick={() => onOpenChange(false)}
          className="fixed right-6 top-6 z-50 text-white/70 hover:text-white transition-colors"
        >
          <X className="h-8 w-8 right-6" />
        </button>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[150%] bg-black/50 p-3 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[150%] bg-black/50 p-3 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[200%] flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Images } from "lucide-react"
import { ImageViewer } from "@/components/image-viewer"

interface ProjectItemProps {
  title: string
  company: string
  description: string
  link?: string
  tags: string[]
  index: number
  images?: { src: string; alt: string }[]
}

export function ProjectItem({ title, company, description, link, tags, index, images }: ProjectItemProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
        <div className="text-5xl font-bold text-zinc-800 md:w-24">{index.toString().padStart(2, "0")}</div>
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h3>
            <p className="text-lg text-gray-400 mt-1">{company}</p>
          </div>
          <p className="text-xl text-gray-300">{description}</p>
          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            {link && (
              <Link
                href={link.startsWith("http") ? link : `https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg hover:text-gray-400 transition-colors"
              >
                Visit Project <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            )}
            {images && images.length > 0 && (
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex items-center text-lg hover:text-gray-400 transition-colors"
              >
                View Gallery <Images className="ml-2 h-5 w-5" />
              </button>
            )}
          </div>
          {images && <ImageViewer images={images} open={isGalleryOpen} onOpenChange={setIsGalleryOpen} />}
        </div>
        <div className="w-full md:w-1/3 aspect-[4/3] bg-zinc-900 overflow-hidden">
          {title === "KARST & VON OISTE" ? (
            <img
              src="/karst-von-oiste.jpg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "GLOOP STUDIOS" ? (
            <img
              src="/gloop-studios-logo.jpg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "PARKER'S LIST" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parkerslist-VDuMpRiBpSmzGin9Ftivid5UqV0DPd.png"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "UI FRAMEWORK LIBRARY" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K2jIGayyVddoNzZ2gS9Nvcc4QtYVEH.png"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "CUDD PORTAL" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-hOQdONgZXMXFgWnM0UsYtKAlgn6mRs.jpeg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "ISD CAMPAIGNS" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/isd00.jpg-h7E1gMIf5N3K3Nllsj0kx1QVufS1z3.jpeg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "BCBS ANTHEM WELCOME KIT" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcbs-anthem00.jpg-81oBgL20kIWnzxMGZHNiPjukbAtI8e.jpeg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "HARRIS HEALTH LMS" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/harrishealth.jpg-8RI1pB8V1KfupIr7TlJMweKfI1Nbb1.jpeg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "ULTIMATE SOLUTIONS" ? (
            <img
              src="/ultimate-solutions.jpg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "MATT SCHAUB" ? (
            <img
              src="/matt-schaub.jpg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : title === "ALAMO RED FOODS" ? (
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alamo-02.jpg-Wzv2vQvxBYM7OEm85wDhMejGCpTSf3.jpeg"
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          ) : (
            <img
              src={`/modern-ui-concept.png?height=400&width=600&query=UI project ${title}`}
              alt={title}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
          )}
        </div>
      </div>
    </div>
  )
}

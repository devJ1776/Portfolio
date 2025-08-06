import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  company: string
  description: string
  date?: string
  link?: string
  tags: string[]
}

export function ProjectCard({ title, company, description, date, link, tags }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{description}</p>
        {date && <p className="text-xs text-muted-foreground mt-2">{date}</p>}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 pt-4 border-t">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <Link
            href={link.startsWith("http") ? link : `https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            Visit Project <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}

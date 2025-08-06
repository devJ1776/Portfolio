import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceCardProps {
  company: string
  role: string
  period: string
  description: string
  client?: string
  projectType?: string
  link?: string
}

export function ExperienceCard({ company, role, period, description, client, projectType, link }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{company}</h3>
            <p className="text-muted-foreground">{role}</p>
          </div>
          <span className="text-sm text-muted-foreground">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">{description}</p>
        {(client || projectType) && (
          <div className="text-sm text-muted-foreground">
            {client && <p>Client: {client}</p>}
            {projectType && <p>Project: {projectType}</p>}
          </div>
        )}
        {link && (
          <Link
            href={link.startsWith("http") ? link : `https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline flex items-center gap-1"
          >
            Visit Website <ExternalLink className="h-3 w-3" />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

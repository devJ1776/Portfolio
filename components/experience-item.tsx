interface ExperienceItemProps {
  company: string
  role: string
  period: string
  link?: string
}

export function ExperienceItem({ company, role, period, link }: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-zinc-800 pl-6 relative">
      <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-1.5" />
      <h4 className="text-xl font-bold">{company}</h4>
      <p className="text-gray-400">{role}</p>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
      {link && (
        <a
          href={link.startsWith("http") ? link : `https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-white transition-colors mt-2 inline-block"
        >
          Visit Website →
        </a>
      )}
    </div>
  )
}

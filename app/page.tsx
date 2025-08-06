import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectItem } from "@/components/project-item"
import { ExperienceItem } from "@/components/experience-item"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header/Navigation */}
      <header className="w-full bg-black border-b border-zinc-800">
        <div className="w-full px-8 flex h-24 items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            JARRED TRAPP
          </Link>
          <nav className="hidden md:flex gap-12">
            <Link href="#work" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">
              Work
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex items-center justify-center h-[calc(100vh-6rem)] relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-image3.jpg-nAnbOTELuJcpxvjCV60O6WcM4iIZy1.jpeg"
              alt="Jarred Trapp"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="container relative z-10 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
              JARRED TRAPP
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto tracking-wide">
              Web Developer & Creative Problem Solver
            </p>
            <div className="mt-12">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg bg-transparent"
                asChild
              >
                <Link href="#work">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16">SELECTED WORK</h2>
            <div className="space-y-32">

              <ProjectItem
                  title="PARKER'S LIST"
                  company="LOCAL ENTREPRENEUR"
                  description="Connecting families with autism-friendly resources, services, and support in your community. Built a comprehensive directory platform with categorized listings and user-friendly navigation."
                  link="https://parkerslist.com/"
                  tags={["Google Maps API Integration", "Web Developer"]}
                  index={1}
                />

              <ProjectItem
                title="KARST & VON OISTE"
                company="HOUSTON LAW FIRM"
                description="Designed and developed a professional law firm website for a national mesothelioma and lung cancer law practice. Created a modern, trustworthy interface that helps patients and families find legal support and information about their rights and options."
                link="https://www.karstvonoiste.com/"
                tags={["Marketing Website", "Web Developer"]}
                index={2}
              />

              <ProjectItem
                title="GLOOP STUDIOS"
                company="GAME DEVELOPMENT STUDIO"
                description="Developed the website and branding for an independent game development studio. Created a dynamic online presence showcasing their portfolio including the 'Queen and Colony' strategy game, with modern design elements that reflect the studio's creative vision."
                link="https://gloopstudios.com/"
                tags={["Marketing Website", "Web Developer"]}
                index={3}
              />

               <ProjectItem
                   title="TIRE APPOINTMENTS"
                   company="ACTIVE DEVELOPMENT"
                   description="Built a comprehensive tire service appointment scheduler that integrates with government vehicle databases. Features include real-time vehicle lookup, service selection, and a fully functional backend appointment management system."
                   link="https://tireappointments.netlify.app/"
                   tags={[".GOV API Integration", "Web Developer"]}
                   index={4}
                />

              <ProjectItem
                title="ISD CAMPAIGNS"
                company="LANGRAND AND COMPANY"
                description="Developed and implemented for various school districts within the Greater Houston area, including Katy ISD, Aldine ISD, and Houston ISD. Built a reporting metrics tool to help establish insights and metrics for the districts' internal marketing campaigns."
                tags={["Data Reporting & Analytics", "Web Developer"]}
                images={[
                  { src: "/isd00.jpg", alt: "ISD Campaigns Internal" },
                  { src: "/isd01.jpg", alt: "ISD Campaigns Internal" },
                  { src: "/isd02.jpg", alt: "ISD Campaigns Internal" }
                ]}
                index={5}
              />

              <ProjectItem
                title="BCBS ANTHEM WELCOME KIT"
                company="LANGRAND AND COMPANY"
                description="Created a rapid prototype for the Blue Cross/Blue Shield Welcome Kit to establish a friendlier onboarding process and clarify insurance plan details. Provided much-needed sense of security and consumer confidence."
                tags={["Microsite", "Web Developer"]}
                index={5}
                images={[
                  { src: "/bcbs-anthem00.jpg", alt: "BCBS Anthem Welcome Kit - Overview" },
                  { src: "/bcbs-anthem01.jpg", alt: "BCBS Anthem Welcome Kit - Details" },
                  { src: "/bcbs-blueshop.jpg", alt: "BCBS Anthem Welcome Kit - Full View" }
                ]}
              />

              <ProjectItem
                title="UI FRAMEWORK LIBRARY"
                company="CUDD ENERGY SERVICES"
                description="Designed and built a UI framework of reusable components shared across all enterprise applications. Created a comprehensive component library for consistent user experiences."
                tags={["Enterprise Component Library", "Web Developer"]}
                index={6}
              />

              <ProjectItem
                title="CUDD PORTAL"
                company="CUDD ENERGY SERVICES"
                description="Custom dashboards and BI charting info for fleet management. Developed interactive data visualization tools for real-time monitoring and analytics."
                link="https://cuddondemand.com/auth/login"
                tags={["Enterprise Data Visualization", "Web Developer"]}
                index={7}
              />

              <ProjectItem
                title="ULTIMATE SOLUTIONS"
                company="ULTIMATE SOLUTIONS"
                description="Collaborated with a 3D Artist to oversee development and design of 3D graphics establishing a 'high tech' look and feel for an oil & gas industry company. Created website, videos, and 3D art while protecting proprietary technology."
                link="https://ultimatesolutions-inc.com"
                tags={["Oil & Gas", "Art Direction"]}
                index={8}
              />

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-zinc-900">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16">ABOUT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jarred-trapp.jpg-urJIojdAqMxOTCDGgnUtKUomyZiW7x.jpeg"
                    alt="Jarred Trapp professional headshot"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-6">
                  <p className="text-xl text-gray-300">
                    I'm a seasoned Web Developer with extensive experience in architecting and building enterprise software,
                   marketing websites, and digital experiences. My expertise spans from marketing firms, business owners and to
                    implementing enterprise web applications in big corporate.
                  </p>
                  <p className="text-xl text-gray-300">
                    With a background in both design and development, I bring a unique perspective to projects, ensuring
                    they're not only functional but also visually appealing and have a user-friendly experience.
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-16">GET IN TOUCH</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <p className="text-xl text-gray-300 mb-12">
                  Interested in working together? Feel free to reach out through email or phone.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-white" />
                    <a
                      href="mailto:jarred.trapp@gmail.com"
                      className="text-2xl font-medium hover:text-gray-400 transition-colors"
                    >
                      jarred.trapp@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-white" />
                    <a href="tel:8323348539" className="text-2xl font-medium hover:text-gray-400 transition-colors">
                      (832) 334-8539
                    </a>
                  </div>
                </div>

              </div>

             
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Jarred Trapp. All rights reserved.</p>
          <p className="text-sm text-gray-500">UI Developer & Designer</p>
        </div>
      </footer>
    </div>
  )
}

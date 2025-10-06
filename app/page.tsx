"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSectionAnimation } from "@/hooks/use-section-animation"

export default function Home() {
  // Use the custom hook for section animations
  useSectionAnimation()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold">Nguyen Le Duy</div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              scroll={false}
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" asChild>
            <Link href="#contact" scroll={false}>
              Get in touch
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Available for hire
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Front-End Developer</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Specializing in building modern, responsive web applications with React.js and Next.js
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#projects" scroll={false}>
                    View my work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contact" scroll={false}>
                    Contact me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-b from-primary/20 to-primary/0 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-background p-8">
                    <div className="flex h-[250px] w-[250px] items-center justify-center rounded-full bg-muted">
                      <span className="text-4xl font-bold">NLD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-16 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              With 4 years of experience as a Front-end Developer, I specialize in building modern web applications
              using React.js and Next.js. I'm passionate about creating clean, efficient, and user-friendly interfaces.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nguyenleduy1199@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+84 35992 8791</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>HCM, Vietnam</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-16 bg-muted/50 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My technical toolkit and expertise
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Programming Languages</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Frameworks</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">APIs</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>REST APIs</Badge>
                    <Badge>GraphQL</Badge>
                    <Badge>WebSocket</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">UI Libraries</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>CSS/SCSS</Badge>
                    <Badge>CSS Modules</Badge>
                    <Badge>CSS-in-JS</Badge>
                    <Badge>Tailwind</Badge>
                    <Badge>Material UI</Badge>
                    <Badge>Ant Design</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Testing</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Jest</Badge>
                    <Badge>Unit Testing</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Tools</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Storybook</Badge>
                    <Badge>Google Lighthouse</Badge>
                    <Badge>Git</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="container py-12 md:py-16 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Experience</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My professional journey
            </p>

            <div className="mt-8 w-full">
              <div className="relative mx-auto max-w-[58rem] border-l border-muted-foreground/20 pl-6">
                <div className="mb-10">
                  <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="flex flex-col gap-1 text-left">
                    <h3 className="text-xl font-bold">Front End Developer</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Yes4All - Advertising management</span>
                      <span className="text-muted-foreground">June 2023 - Present</span>
                    </div>
                    <p className="text-muted-foreground">Home sporting goods & furniture in the e-commerce</p>
                    <ul className="mt-2 list-disc pl-5 text-left text-muted-foreground">
                      <li>
                        Optimized service calls across Next.js codebase, enhancing readability and maintainability
                      </li>
                      <li>Reduced product listing load time by 50% through efficient data fetching techniques</li>
                      <li>Implemented real-time notifications using WebSocket API for improved user engagement</li>
                      <li>Wrote Jest unit tests, resolving 50% of production issues for robust deployments</li>
                      <li>Utilized Google Lighthouse to boost performance metrics and SEO rankings</li>
                      <li>Collaborated on scalable Next.js practices, including code splitting and lazy loading</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="flex flex-col gap-1 text-left">
                    <h3 className="text-xl font-bold">Front End Developer</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Ekino - HAVAS group</span>
                      <span className="text-muted-foreground">December 2021 - March 2023</span>
                    </div>
                    <p className="text-muted-foreground">Dailymotion.com - News portal</p>
                    <ul className="mt-2 list-disc pl-5 text-left text-muted-foreground">
                      <li>Developed reusable UI components with Storybook, improving development efficiency</li>
                      <li>Ensured responsive design across devices using Material-UI's Grid and media queries</li>
                      <li>Reduced product listing load time by 50% via optimized Next.js data fetching</li>
                      <li>Implemented WebSocket API for real-time notifications, boosting user engagement</li>
                      <li>Wrote Jest tests to resolve 50% of production issues, enhancing reliability</li>
                      <li>Optimized performance with Google Lighthouse, improving scores by 20%</li>
                      <li>Collaborated on scalable Next.js practices with TypeScript and code splitting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="container py-12 md:py-16 bg-muted/50 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Showcasing my work and technical expertise
            </p>

            <Tabs defaultValue="all" className="mt-8 w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="next">Next.js</TabsTrigger>
                <TabsTrigger value="react">React</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Dashboard"
                  description="A comprehensive dashboard for e-commerce analytics with real-time data visualization"
                  tags={["Next.js", "TypeScript", "Tailwind CSS", "WebSocket"]}
                />
                <ProjectCard
                  title="News Portal"
                  description="A responsive news portal with dynamic content loading and personalized recommendations"
                  tags={["React", "Material UI", "GraphQL"]}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A modern, responsive portfolio website built with Next.js and Tailwind CSS"
                  tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                />
              </TabsContent>
              <TabsContent value="next" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="E-commerce Dashboard"
                  description="A comprehensive dashboard for e-commerce analytics with real-time data visualization"
                  tags={["Next.js", "TypeScript", "Tailwind CSS", "WebSocket"]}
                />
                <ProjectCard
                  title="Portfolio Website"
                  description="A modern, responsive portfolio website built with Next.js and Tailwind CSS"
                  tags={["Next.js", "Tailwind CSS", "Framer Motion"]}
                />
              </TabsContent>
              <TabsContent value="react" className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="News Portal"
                  description="A responsive news portal with dynamic content loading and personalized recommendations"
                  tags={["React", "Material UI", "GraphQL"]}
                />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="education" className="container py-12 md:py-16 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Education</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My academic background and certifications
            </p>

            <div className="mt-8 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Bachelor's Degree</h3>
                  <p className="text-muted-foreground">Software Engineering</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">React Design Patterns</h3>
                  <p className="text-muted-foreground">Certificate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Meta Front-End Developer</h3>
                  <p className="text-muted-foreground">Professional Certificate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-16 bg-muted/50 transition-all duration-500 transform">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Feel free to reach out for collaborations or just a friendly chat
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="flex items-center gap-2" asChild>
                <Link href="mailto:nguyenleduy1199@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Nguyen Le Duy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted"></div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

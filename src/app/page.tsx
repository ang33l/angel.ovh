import MainContainer from "@/components/layout/main-container"
import Title from "@/components/layout/title"
import BlurFade from "@/components/magicui/blur-fade"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const COMMERCIAL_EXP = [
  {
    company: "Weblance",
    company_url: "https://weblance.pl",
    position: "Full-stack developer",
    additional_info: 'remote mandate contract',
    start_date: "02.2024",
    end_date: null,
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Wordpress",
      "PHP",
      "JavaScript",
      "TypeScript",
      "Express",
      "Passport",
      "Zod",
      "Prisma",
    ],
    about: [
      "building Wordpress websites (stores, stores with subscriptions and custom logic for products, business websites)",
      "fullstack business JavaScript applications (TS, Node, Express, Passport, Zod, Prisma, SQL, React, Next)",
      "Figma"
    ]
  },
  {
    company: "Weblance",
    company_url: "https://weblance.pl",
    position: "Full-stack developer",
    additional_info: 'remote intern',
    start_date: "05.2023",
    end_date: "07.2023",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "Wordpress",
      "PHP",
      "JavaScript",
    ],
    about: [
      "building fullstack CRM system in React and Node stack",
      "building Wordpress websites"
    ]
  },
  {
    company: "Weblance",
    company_url: "https://weblance.pl",
    position: "Full-stack developer",
    additional_info: 'remote intern',
    start_date: "12.2022",
    end_date: "01.2023",
    technologies: [
      "Wordpress",
      "PHP",
      "JavaScript",
      "React",
      "Node",
    ],
    about: [
      "learning about Wordpress and Node",
      "building Wordpress website",
      "building fullstack CRM system in React and Node stack"
    ]
  }
]

export default function Page() {
  return <BlurFade className="w-full">
    <MainContainer>
      <Title>My commercial experience</Title>
      <p className="text-slate-400 mb-4 italic text-justify">
        I decided to put commercial experience as first page, because it is the most relevant information.
        However, my experience doesn&apos;t end with that gained in various companies.
        It is also experience gained through almost 8 years of interest in the IT industry.
        You can learn about it in the <Link href="/about-me" className="underline">About me</Link> section.
      </p>
      <div className="relative flex flex-col gap-4 pl-6 before:absolute before:top-0 before:left-2 before:w-[1px] before:h-full before:bg-slate-500">
        {COMMERCIAL_EXP.map((exp) => (
          <div key={exp.start_date} className="relative border border-slate-800/50 rounded-md p-2 flex flex-col lg:flex-row before:absolute before:top-6 before:left-[-23px] before:w-3 before:h-3 before:z-10 before:rounded-[50%] before:bg-primary after:absolute after:top-[calc(1.5rem+6px)] after:left-[-22px] after:w-[22px] after:h-[1px] after:bg-slate-800/50">
            <div className="border-b lg:border-r lg:border-b-0 pb-2 lg:pb-0 border-slate-800/50 lg:pr-4">
              <Link href={exp.company_url} target="_blank" className="flex gap-1">{exp.company} <ExternalLink className="w-3 h-3" /></Link>
              <p className="text-sm text-slate-400">{exp.start_date} - {exp.end_date ?? "Present"}</p>
            </div>
            <div className="pt-2 lg:pt-0 lg:pl-4">
              <p><span className="font-semibold text-lg">{exp.position}</span> <span className="text-slate-400 text-sm">({exp.additional_info})</span></p>
              <p className="text-slate-400 mt-4 italic text-sm">About the job</p>
              <ul className="list-disc ml-5">
                {exp.about.map((about) => (
                  <li key={about}>{about}</li>
                ))}
              </ul>
              <p className="text-slate-400 mt-4 italic text-sm">Technologies used</p>
              <div className="flex gap-1 flex-wrap text-sm">
                {exp.technologies.map((tech) => (
                  <div className="bg-primary/20 px-1 py-0.5 rounded-md" key={tech}>{tech}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  </BlurFade>
}
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import MainContainer from "@/components/layout/main-container"
import Title from "@/components/layout/title"
import BlurFade from "@/components/magicui/blur-fade"
import { ExternalLink, ImageOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Suspense } from 'react'

const PROJECTS = [
    {
        name: "Online songbook",
        description: "App created for personal needs. It's a songbook with adding and managing system.",
        url: "https://github.com/ang33l/online-songbook",
        image_src: "/online-songbook.png",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "ShadCN", "Convex database"],
        category: "Next.js full-stack"
    },
    {
        name: "Digital guestbook",
        description: "App created for engineering thesis. It's complex aplication with db, file storage, auth system for 3 independent user types: guest, admin and employee. Every of them have different functionalities.",
        url: "https://github.com/ang33l/cyfrowa-ksiega-gosci",
        image_src: "/ckg.jpg",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Convex Database", "Node.js"],
        category: "Next.js full-stack"
    },
    {
        name: "PKP Online (PHP + CodeIgniter)",
        description: "App created for 'Databases' classes. Complex application about trains and tickets managment and selling tickets.",
        url: "https://github.com/ang33l/pkp",
        image_src: "/pkp.jpg",
        technologies: ["PHP", "CodeIgniter", "MySQL"],
        category: "PHP + CodeIgniter"
    },
    {
        name: "CCTV Online",
        description: "Web application made for remote managment of Raspberry Picamera as regular CCTV app. Made for needs of 'Smart buildings systems' classes. Created with CodeIgniter3 PHP framework and Python3.",
        url: "https://github.com/ang33l/CCTV_Online",
        technologies: ["PHP", "CodeIgniter", "Python", "Raspberry Pi"],
        image_src: null,
        category: "PHP + CodeIgniter"
    },
    {
        name: "mANSsanger",
        description: "Flutter app created for notification system for high school (ANS - Akademia Nauk Stosowanych w Nowym Sączu) with use of Firebase system.",
        url: "https://github.com/ang33l/mANSsanger",
        technologies: ["Flutter", "Firebase", "Dart", "RabbitMQ", "Python"],
        image_src: "/manssanger.jpg",
        category: "Flutter"
    },
    {
        name: "This porfolio website",
        description: "This website was created to showcase my skills and projects I have done. It is built with Next.js and TailwindCSS.",
        url: "/",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Framer Motion", "React"],
        image_src: "/angel.ovh.jpg",
        visit_text: "This website 😃",
        category: "Next.js full-stack"
    },
    {
        name: "Website for general construction company",
        description: "Website created in plain HTML + CSS as a basic showcase for general construction company.",
        url: "https://exegir.vercel.app/",
        technologies: ["HTML", "CSS", "JS"],
        image_src: "/exegir.jpg",
        category: "HTML + CSS"
    }
]

const CATEGORIES = ["All", ...PROJECTS.reduce((acc, project) => {
    if (!acc.includes(project.category)) {
        acc.push(project.category);
    }
    return acc;
}, [] as string[])]

export default function Component() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = searchParams.get('category') || 'All'

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams)
        if (category === 'All') {
            params.delete('category')
        } else {
            params.set('category', category)
        }
        router.push(`/projects?${params.toString()}`)
    }

    const filteredProjects = currentCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === currentCategory)

    return (
        <Suspense>
            <BlurFade className="w-full">
                <MainContainer>
                    <Title>Public projects I have implemented</Title>
                    <p className="text-slate-400 mb-4 italic text-justify">
                        After many years of enjoying programming, I have done a lot of projects.
                        My first real project was automated bot for TeamSpeak3 server.
                        It was written in PHP and it was able to manage various things on the server,
                        unfortunately I don&apos;t have access to the code anymore.
                    </p>
                    <p className="text-slate-100 mb-4 italic text-justify">Categories:</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {CATEGORIES.map((category) => (
                            <Button
                                key={category}
                                className={currentCategory === category ? "bg-primary text-zinc-950" : "bg-transparent text-white border-slate-800"}
                                variant={currentCategory === category ? "default" : "outline"}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <motion.div
                        className="flex flex-col gap-4"
                        layout
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.name}
                                    layout
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ scale: 0, opacity: 0, }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link href={project.url} target="_blank" className="group flex flex-col gap-2 p-4 border border-slate-800/50 rounded-md">
                                        <h3 className="text-lg font-semibold">{project.name}</h3>
                                        <div className="flex flex-col lg:flex-row gap-8">
                                            <div className="relative w-full h-32 lg:w-64 lg:flex-1 flex items-center justify-center">
                                                <div className="opacity-0 group-hover:opacity-100 flex gap-1 absolute rounded-xl w-full h-full inset-0 z-10 items-center justify-center bg-slate-900/80 transition-all text-slate-200 font-semibold text-center">
                                                    {project.visit_text ?? <>Visit website  <ExternalLink className="w-3 h-3" /></>}
                                                </div>
                                                {project.image_src ? (
                                                    <Image src={project.image_src} alt={project.name} fill={true} objectFit="contain" className="rounded-xl" />
                                                ) : (
                                                    <ImageOff className="w-24 h-24" />
                                                )}
                                            </div>
                                            <div className="flex-[4]">
                                                <p className="text-slate-400 text-sm italic">About the project</p>
                                                <p>{project.description}</p>
                                                <p className="text-slate-400 text-sm italic mt-4">Stack</p>
                                                <div className="flex flex-wrap gap-2 text-sm">
                                                    {project.technologies.map((tech) => (
                                                        <span key={tech} className="bg-primary/20 px-1 py-0.5 rounded-md">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </MainContainer>
            </BlurFade>
        </Suspense>
    )
}
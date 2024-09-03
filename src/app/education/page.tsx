import MainContainer from "@/components/layout/main-container"
import Title from "@/components/layout/title"
import BlurFade from "@/components/magicui/blur-fade"

const EDUCATION = [
    {
        school: "Akademia Nauk Stosowanych",
        city: "Nowy Sącz",
        country: "Poland",
        degree: "Magister (masters's degree)",
        field: "IT",
        start_date: "02.2024",
        end_date: null,
        skills: [
            'Python',
            'Mashine Learning',
            'Data analysis',
        ]
    },
    {
        school: "Akademia Nauk Stosowanych",
        city: "Nowy Sącz",
        country: "Poland",
        degree: "Inżynier (engineer's degree)",
        field: "IT",
        start_date: "10.2020",
        end_date: "01.2024",
        skills: [
            "RabbitMQ",
            "Next.js",
            "C++",
            "React",
            "PHP",
            "Firebase",
            "JIRA",
            "Flutter",
            "Node.js",
            "Git",
            "Networking"
        ]
    },
    {
        school: "Zespół Szkół Technicznych i Ogólnokształcących",
        city: "Limanowa",
        country: "Poland",
        degree: "Technik (technician)",
        field: "IT",
        start_date: "09.2016",
        end_date: "06.2020",
        skills: [
            "E.12 (IT technician)",
            "E.13 (IT technician)",
            "E.14 (IT technician)",
            "PHP",
            "CSS",
            "Cisco CCNA",
            "Windows Server",
            "Linux",
            "JavaScript",
            "Networking",
            "SQL"
        ]
    }
]

export default function Page() {
    return <BlurFade className="w-full">
        <MainContainer>
            <Title>My education</Title>
            <p className="text-slate-400 mb-4 italic text-justify">
                My interest in IT started in high school,
                where I learned from very talented teachers who were able to explain complex issues in a simple way.
                I have always been interested in how things work, so I decided to continue my education in this field.
            </p>
            <div className="relative flex flex-col gap-4 pl-6 before:absolute before:top-0 before:left-2 before:w-[1px] before:h-full before:bg-slate-500">
                {EDUCATION.map((edu) => (
                    <div key={edu.start_date} className="relative border border-slate-800/50 rounded-md p-2 flex flex-col before:absolute before:top-6 before:left-[-23px] before:w-3 before:h-3 before:z-10 before:rounded-[50%] before:bg-primary after:absolute after:top-[calc(1.5rem+6px)] after:left-[-22px] after:w-[22px] after:h-[1px] after:bg-slate-800/50">

                        <p className="flex gap-1">{edu.school} in {edu.city}</p>
                        <p className="text-sm text-slate-400">{edu.start_date} - {edu.end_date ?? "Present"}</p>

                        <p className="text-slate-400 mt-4 italic text-sm">Degree</p>
                        <p><span className="font-semibold">{edu.degree}</span> <span className="text-slate-400 text-sm">({edu.field})</span></p>
                        <p className="text-slate-400 mt-4 italic text-sm">Learnt (mostly) about</p>
                        <div className="flex gap-1 flex-wrap text-sm">
                            {edu.skills.map((tech) => (
                                <div className="bg-primary/20 px-1 py-0.5 rounded-md" key={tech}>{tech}</div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </MainContainer>
    </BlurFade>
}
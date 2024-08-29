import MainContainer from "@/components/layout/main-container";
import Title from "@/components/layout/title";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

export default function Page() {
    return <BlurFade className="w-full">
        <MainContainer>
            <Title>Few words about me</Title>
            <div className="flex gap-8 items-center justify-center">
                <div className="p-8 relative">
                    <div className="relative w-64 h-64">
                        <Image src="/me.jpg" fill={true} objectFit="cover" className="rounded-[50%] opacity-80" alt="Me" />
                    </div>
                    <div className="absolute inset-0 w-full h-full border-r-2 border-b-2 rounded-[50%] border-primary"></div>
                </div>
                <div className="text-4xl">
                    <p>Hi, I am Aleksander Marek 👋</p>
                    <p className="italic">Full-stack developer</p>
                </div>
            </div>
            <div className="mt-8">
                <p>I am Aleksander Marek, full-stack developer from Poland
                    and I have more than 1 year of commercial experience in web development.</p>
                <p>During the day I work at Weblance where I impelemnt full-stack applications in JS or Wordpress websites.</p>
                <p>I spent many years learning and working at wide range of things in IT which made my thinking and imagining &apos;in computer science&apos;.</p>
            </div>
        </MainContainer>
    </BlurFade>
}
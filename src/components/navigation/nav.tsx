"use client"
import { BriefcaseBusiness, FolderOpenDot, GraduationCap, Home, Linkedin, PhoneCall, Settings, User, User2 } from 'lucide-react';
import AnimatedBackground from '@/components/core/animated-background';
import Link from 'next/link';
import BlurFade from '../magicui/blur-fade';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Navigation() {
    const TABS = [
        {
            label: 'Commercial experience',
            icon: <BriefcaseBusiness className='h-5 w-5' />,
            href: "/"
        },
        {
            label: 'Education',
            icon: <GraduationCap className='h-5 w-5' />,
            href: "/education"
        },
        {
            label: 'Projects',
            icon: <FolderOpenDot className='h-5 w-5' />,
            href: "/projects"
        },
        {
            label: 'About me',
            icon: <User2 className='h-5 w-5' />,
            href: "/about-me"
        },
    ];
    const pathname = usePathname();
    return (
        <BlurFade>
            <div className='sticky top-4 flex flex-col gap-4'>
                <Link className='font-serif group' href="/">
                    <h3 className='text-white text-4xl group-hover:text-primary transition-colors text-nowrap'>Aleksander Marek</h3>
                    <h4 className='text-primary font-semibold group-hover:text-white text-xl text-center transition-colors  text-nowrap'>Full-stack developer</h4>
                </Link>
                <div className='flex flex-col rounded-xl p-2 custom-blur'>
                    <span className='text-center mb-4 text-sm text-slate-300 font-semibold'>Navigation</span>
                    <AnimatedBackground
                        defaultValue={TABS.find((tab) => tab.href === pathname)?.label}
                        className='rounded-[4px] bg-primary'
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.3,
                        }}
                    >
                        {TABS.map((tab) => (
                            <Link
                                href={tab.href}
                                key={tab.label}
                                data-id={tab.label}
                                type='button'
                                className='px-2 py-1 rounded-md flex items-center text-white/80 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950'
                            >
                                <div className='flex items-center gap-2'>{tab.icon} {tab.label}</div>
                            </Link>
                        ))}
                    </AnimatedBackground>
                    <div className='border-t border-b border-slate-700/50 py-4 mt-8'>
                        <p className='text-center text-sm text-slate-300 mb-4 font-semibold'>Find me</p>
                        <div className='flex items-center justify-center gap-6'>
                            <Link href="https://www.linkedin.com/in/aleksander-marek-pl/" target='_blank' className='hover:text-[#0e76a8] transition-colors'>
                                <FaLinkedin className='h-7 w-7' />
                            </Link>
                            <Link href="https://github.com/ang33l" target='_blank' className='hover:text-[#24292e] transition-colors'>
                                <FaGithub className='h-7 w-7' />
                            </Link>
                            <Link href="mailto:kontakt@angel.ovh" className='hover:text-primary transition-colors'>
                                <MdAlternateEmail className='h-7 w-7' />
                            </Link>
                        </div>
                    </div>
                    <div className='text-center mt-4 text-sm text-slate-300'>
                        Copyrights &copy;
                        <br />
                        <Link href="/" className='underline'>Aleksander Marek {new Date().getFullYear()}</Link>
                    </div>
                </div>

            </div>
        </BlurFade>
    );
}

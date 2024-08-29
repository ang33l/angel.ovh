export default function Title({ children }: Readonly<{ children: React.ReactNode; }>) {
    return <h1 className='text-2xl font-semibold w-full mb-4'>{children}</h1>
}
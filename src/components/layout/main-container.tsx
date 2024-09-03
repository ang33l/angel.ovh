export default function MainContainer({ children }: Readonly<{ children: React.ReactNode; }>) {
    return <div className="custom-blur p-4 flex-1 lg:mt-[5.2rem]">{children}</div>
}
export default function MainContainer({ children }: Readonly<{ children: React.ReactNode; }>) {
    return <div className="custom-blur p-4 flex-1 mt-[5.2rem]">{children}</div>
}
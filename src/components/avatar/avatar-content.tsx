type AvatarContentProps = {
    children: React.ReactNode
}

export function AvatrContent ({children}: AvatarContentProps) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}
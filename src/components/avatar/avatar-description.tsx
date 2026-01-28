type AvatrDescriptionProps = {
    children: React.ReactNode
}

export function AvatarDescription ({children}: AvatrDescriptionProps) {
    return (
        <div className="text-gray-300 text-body-xs">
            {children}
        </div>
    )
}
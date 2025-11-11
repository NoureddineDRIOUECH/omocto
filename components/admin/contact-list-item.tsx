"use client"

export default function ContactListItem({
                                            contact,
                                            isSelected,
                                            onSelect,
                                        }: {
    contact: any
    isSelected: boolean
    onSelect: () => void
}) {
    return (
        <button
            onClick={onSelect}
            className={`w-full text-left p-3 sm:p-4 transition-colors hover:bg-muted/50 ${
                isSelected ? "bg-muted border-l-2 border-primary" : ""
            }`}
        >
            <p className="font-medium text-foreground text-sm truncate">{contact.name}</p>
            <p className="text-xs text-muted-foreground truncate">{contact.subject}</p>
            <p className="text-xs text-muted-foreground mt-1">{contact.date}</p>
        </button>
    )
}

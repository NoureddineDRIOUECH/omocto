export default function ContactItem({ contact }: any) {
  return (
    <div className="p-4 border-b border-border hover:bg-secondary/50 transition-colors">
      <p className="font-medium text-foreground">{contact.name}</p>
      <p className="text-sm text-muted-foreground mt-1">{contact.email}</p>
      <p className="text-xs text-muted-foreground mt-2">{contact.date}</p>
    </div>
  )
}

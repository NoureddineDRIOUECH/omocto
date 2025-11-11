"use client"

import Link from "next/link"

export default function RecentContacts({ contacts }: { contacts: any[] }) {
  return (
    <div className="card-base p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground">Recent Submissions</h2>
        <Link href="/admin/contacts" className="text-primary text-sm font-medium hover:underline">
          View All
        </Link>
      </div>

      <div className="space-y-3">
        {contacts.length === 0 ? (
          <p className="text-muted-foreground text-sm">No submissions yet</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-3 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground text-sm">{contact.name}</p>
              <p className="text-xs text-muted-foreground mt-1 truncate">{contact.email}</p>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{contact.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

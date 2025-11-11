"use client"

import { useState, useEffect } from "react"
import { Contact } from "@/lib/definitions"
import { deleteContactAction } from "./actions" // Import the server action

export default function ContactsClientPage({ initialContacts }: { initialContacts: Contact[] }) {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  // Update local state when initialContacts prop changes (after revalidation)
  useEffect(() => {
    setContacts(initialContacts);
  }, [initialContacts]);


  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this contact submission?")) {
      await deleteContactAction(id); // Call the server action
      setSelectedContact(null);
      // The revalidatePath in the server action will cause the parent server component to re-render
      // and pass updated initialContacts, which will then update this component via useEffect.
    }
  }

  return (
      <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Contact Submissions</h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
            Manage all incoming contact form submissions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* List */}
          <div className="lg:col-span-2 card-base divide-y divide-border max-h-[80vh] overflow-y-auto">
            {contacts.length === 0 ? (
                <div className="p-6 sm:p-12 text-center">
                  <p className="text-sm sm:text-base text-muted-foreground">No contact submissions yet</p>
                </div>
            ) : (
                contacts.map((contact) => (
                    <button
                        key={contact.id}
                        onClick={() => setSelectedContact(contact)}
                        className={`w-full p-3 sm:p-4 text-left hover:bg-secondary/50 transition-colors ${
                            selectedContact?.id === contact.id ? "bg-secondary/50" : ""
                        }`}
                    >
                      <p className="font-medium text-sm sm:text-base text-foreground truncate">{contact.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">{contact.email}</p>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-1">{contact.message}</p>
                    </button>
                ))
            )}
          </div>

          {selectedContact && (
              <div className="card-base p-4 sm:p-6 flex flex-col">
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-4">Details</h3>

                <div className="space-y-4 flex-1">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Name</p>
                    <p className="text-sm sm:text-base text-foreground font-medium mt-1">{selectedContact.name}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                    <p className="text-sm sm:text-base text-foreground font-medium mt-1 break-all">
                      {selectedContact.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Date</p>
                    <p className="text-sm sm:text-base text-foreground font-medium mt-1">{new Date(selectedContact.created_at).toLocaleDateString()}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Message</p>
                    <p className="text-sm sm:text-base text-foreground mt-2 p-3 rounded-lg bg-secondary/50 leading-relaxed whitespace-pre-wrap">
                      {selectedContact.message}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 pt-4 border-t border-border">
                  <a
                      href={`mailto:${selectedContact.email}`}
                      className="flex-1 btn-secondary text-xs sm:text-sm text-center"
                  >
                    Reply
                  </a>
                  <button
                      onClick={() => handleDelete(selectedContact.id)}
                      className="flex-1 btn-ghost text-destructive text-xs sm:text-sm border border-destructive/30 hover:bg-destructive/10"
                  >
                    Delete
                  </button>
                </div>
              </div>
          )}
        </div>
      </div>
  )
}

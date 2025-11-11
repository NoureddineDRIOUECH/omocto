import type React from "react"
import { getSession } from "@/lib/session.server"
import { redirect } from "next/navigation"
import AdminClientLayout from "./AdminClientLayout"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session.admin) {
    redirect("/login")
  }

  return (
    <AdminClientLayout username={session.admin.username}>
      {children}
    </AdminClientLayout>
  )
}

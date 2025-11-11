"use client"

import type React from "react"
import { useState } from "react"
import Sidebar from "@/components/admin/sidebar"
import "./admin.css"

export default function AdminClientLayout({
  children,
  username,
}: {
  children: React.ReactNode
  username: string
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background admin-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        username={username}
      />
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Mobile header with menu toggle */}
        <div className="lg:hidden flex items-center justify-between bg-sidebar border-b border-sidebar-border px-4 py-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl text-sidebar-foreground hover:text-sidebar-primary transition-colors"
          >
            ☰
          </button>
          <span className="text-sm font-semibold text-sidebar-foreground">
            CMS Admin
          </span>
          <div className="w-8" />
        </div>

        {children}
      </main>
    </div>
  )
}

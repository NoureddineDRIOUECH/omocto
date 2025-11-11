"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Sidebar({
  isOpen,
  onClose,
  username,
}: {
  isOpen: boolean
  onClose: () => void
  username: string
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  const menuItems = [
    {
      label: "Dashboard",
      icon: "📊",
      href: "/admin/dashboard",
    },
    {
      label: "Blog Posts",
      icon: "📝",
      href: "/admin/blogs",
    },
    {
      label: "Contacts",
      icon: "💬",
      href: "/admin/contacts",
    },
  ]

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-40" onClick={onClose} />}

      <aside
        className={`fixed lg:relative w-64 bg-sidebar border-r border-sidebar-border h-screen flex flex-col transition-transform duration-300 z-50 lg:z-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center font-bold text-lg">
              C
            </div>
            <div>
              <p className="font-bold text-sidebar-foreground">CMS</p>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => onClose()}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-sidebar-primary/15 text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-sidebar-border space-y-4">
          <div className="px-4 py-3 rounded-lg bg-sidebar-accent/50">
            <p className="text-xs text-muted-foreground mb-1">Logged in as</p>
            <p className="text-sm font-medium text-sidebar-foreground truncate">{username}</p>
          </div>
          <button onClick={handleLogout} className="w-full btn-secondary text-sm">
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

"use client"

import { useState } from "react"
import { BlogPost, Contact } from "@/lib/definitions"
import StatsCard from "@/components/admin/stats-card"
import RecentPosts from "@/components/admin/recent-posts"
import RecentContacts from "@/components/admin/recent-contacts"

export default function DashboardClientPage({ initialBlogs, initialContacts }: { initialBlogs: BlogPost[], initialContacts: Contact[] }) {
    const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs)
    const [contacts, setContacts] = useState<Contact[]>(initialContacts)

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
            <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Dashboard</h1>
                <p className="text-sm sm:text-base text-muted-foreground">Welcome back! Here's your content overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <StatsCard title="Total Posts" value={blogs.length} icon="📝" trend="+2 this month" />
                <StatsCard title="Contacts" value={contacts.length} icon="💬" trend={`${contacts.length} unread`} />
                <StatsCard title="System Status" value="Active" icon="✅" trend="All systems operational" />
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="lg:col-span-2">
                    <RecentPosts posts={blogs.slice(0, 5)} />
                </div>
                <div>
                    <RecentContacts contacts={contacts.slice(0, 5)} />
                </div>
            </div>
        </div>
    )
}

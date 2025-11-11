"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const { supabaseAdmin } = await import("@/lib/supabase-admin")
  const parsed = formSchema.safeParse(values)

  if (!parsed.success) {
    return { error: "Invalid data." }
  }

  const { error } = await supabaseAdmin.from("contacts").insert([
    {
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
    },
  ])

  if (error) {
    console.error("Error saving contact form submission:", error)
    return { error: "Database error: Could not save message." }
  }

  return { success: true }
}

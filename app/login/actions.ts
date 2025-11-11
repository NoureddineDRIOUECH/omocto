"use server"

import { z } from "zod"
import { supabase } from "@/lib/supabase"
import * as bcrypt from "bcryptjs"
import { getSession } from "@/lib/session.server"
import { redirect } from "next/navigation"

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  password: z.string().min(1, { message: "Password is required." }),
})

export async function login(values: z.infer<typeof loginSchema>) {
  const session = await getSession()
  const parsed = loginSchema.safeParse(values)

  if (!parsed.success) {
    return { error: "Invalid data." }
  }

  const { username, password } = parsed.data

  try {
    // 1. Fetch the admin user from the database
    const { data: admin, error } = await supabase
      .from("admins")
      .select("id, username, hashed_password")
      .eq("username", username)
      .single()

    if (error || !admin) {
      return { error: "Invalid credentials." }
    }

    // 2. Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(
      password,
      admin.hashed_password
    )

    if (!isPasswordValid) {
      return { error: "Invalid credentials." }
    }

    // 3. Save user data in the session
    session.admin = {
      id: admin.id,
      username: admin.username,
    }
    await session.save()
  } catch (error) {
    console.error(error)
    return { error: "An internal server error occurred." }
  }

  redirect("/admin/dashboard")
}

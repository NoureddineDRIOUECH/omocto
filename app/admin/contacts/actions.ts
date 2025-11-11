"use server"

import { revalidatePath } from "next/cache"
import { deleteContact } from "@/lib/data.server"

export async function deleteContactAction(id: number) {
  await deleteContact(id)
  revalidatePath("/admin/contacts")
}

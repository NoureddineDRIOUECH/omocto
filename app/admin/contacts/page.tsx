import { getContacts } from "@/lib/data.server";
import ContactsClientPage from "./ContactsClientPage";

export default async function ContactsPage() {
  const initialContacts = await getContacts();

  return <ContactsClientPage initialContacts={initialContacts} />;
}

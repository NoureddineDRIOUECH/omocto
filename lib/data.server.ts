import { supabase } from './supabase';
import { supabaseAdmin } from './supabase-admin';
import type { BlogPost, Contact } from './definitions';

// --- Blogs ---
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  return data || [];
}

export async function getBlogPost(id: number): Promise<BlogPost | null> {
  const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
  return data;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase.from('blogs').select('*').eq('slug', slug).single();
  if (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
  return data;
}

export async function deleteBlog(id: number): Promise<void> {
  const { error } = await supabaseAdmin.from('blogs').delete().eq('id', id);
  if (error) {
    console.error('Error deleting blog post:', error);
  }
}

// --- Contacts ---
export async function getContacts(): Promise<Contact[]> {
  const { data, error } = await supabaseAdmin.from('contacts').select('*').order('created_at', { ascending: false });
  if (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
  return data || [];
}

export async function deleteContact(id: number): Promise<void> {
  const { error } = await supabaseAdmin.from('contacts').delete().eq('id', id);
  if (error) {
    console.error('Error deleting contact:', error);
  }
}

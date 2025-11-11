import { IronSessionData } from "iron-session";

export interface SessionData extends IronSessionData {
  admin?: {
    id: number;
    username: string;
  };
}

export interface Contact {
  id: number
  name: string
  email: string
  message: string
  created_at: string
}

export interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  author_id: number
  image_url: string | null
  created_at: string
  updated_at: string
}
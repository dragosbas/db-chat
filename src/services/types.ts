import { LucideIcon } from 'lucide-react';

export interface Platform {
  id: string;
  name: string;
  status: 'connected' | 'pending';
  lastActive?: string;
  isLocked?: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  subscription: 'paid' | 'unpaid';
  platforms: Platform[];
  avatar?: string;
  location?: string;
  joinedDate?: string;
  languages?: string[];
  contactInfo?: {
    phone?: string;
    email?: string;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface ChatPartner {
  id: string;
  name: string;
  avatar: string;
  platform: string;
  likes: {
    icon: LucideIcon;
    count: number;
  };
  shares: {
    icon: LucideIcon;
    count: number;
  };
  messages: {
    icon: LucideIcon;
    count: number;
  };
  follows: {
    icon: LucideIcon;
    count: number;
  };
  lastMessage: string;
  timestamp: string;
  isLocked: boolean;
}
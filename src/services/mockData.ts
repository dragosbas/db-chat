import { Platform, UserProfile, ChatPartner } from './types';
import { MessageSquare, Heart, UserPlus, Share2 } from 'lucide-react';

export const mockPlatforms: Platform[] = [
  { 
    id: "whatsapp",
    name: "WhatsApp",
    status: "connected",
    lastActive: "2024-02-20",
    isLocked: false
  },
  { 
    id: "facebook",
    name: "Facebook",
    status: "connected",
    lastActive: "2024-02-19",
    isLocked: false
  },
  { 
    id: "instagram",
    name: "Instagram",
    status: "pending",
    lastActive: "2024-02-18",
    isLocked: true
  },
];

export const mockUserProfile: UserProfile = {
  id: "user1",
  name: "John Doe",
  email: "john@example.com",
  subscription: "paid",
  platforms: mockPlatforms,
  avatar: "/placeholder.svg",
  location: "New York, USA",
  joinedDate: "January 2024",
  languages: ["English", "Spanish"],
  contactInfo: {
    phone: "+1 234 567 890",
    email: "contact@example.com"
  },
  socialLinks: {
    twitter: "@username",
    linkedin: "profile/username"
  }
};

export const mockChatPartners: ChatPartner[] = mockPlatforms.map(platform => ({
  id: platform.id,
  name: platform.name,
  avatar: "/placeholder.svg",
  platform: platform.name,
  likes: {
    icon: Heart,
    count: Math.floor(Math.random() * 1000)
  },
  shares: {
    icon: Share2,
    count: Math.floor(Math.random() * 500)
  },
  messages: {
    icon: MessageSquare,
    count: Math.floor(Math.random() * 100)
  },
  follows: {
    icon: UserPlus,
    count: Math.floor(Math.random() * 200)
  },
  lastMessage: "Last message from platform",
  timestamp: new Date().toISOString(),
  isLocked: platform.isLocked || false
}));
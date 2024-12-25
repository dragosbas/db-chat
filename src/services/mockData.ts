import { Platform, UserProfile } from './types';

export const mockPlatforms: Platform[] = [
  { name: "WhatsApp", status: "connected", id: "whatsapp" },
  { name: "Facebook", status: "connected", id: "facebook" },
  { name: "Instagram", status: "pending", id: "instagram" },
];

export const mockUserProfile: UserProfile = {
  name: "John Doe",
  email: "john@example.com",
  subscription: "paid",
  platforms: mockPlatforms,
};
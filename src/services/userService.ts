import { UserProfile } from './types';
import { mockUserProfile } from './mockData';

export const userService = {
  getUserProfile: async (): Promise<UserProfile> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUserProfile), 500);
    });
  },

  updateUserProfile: async (profile: Partial<UserProfile>): Promise<UserProfile> => {
    // Simulate API call
    return new Promise((resolve) => {
      const updatedProfile = { ...mockUserProfile, ...profile };
      setTimeout(() => resolve(updatedProfile), 500);
    });
  },
};
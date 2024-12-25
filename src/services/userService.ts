import { UserProfile } from './types';
import { mockUserProfile } from './mockData';

class UserService {
  private userProfile: UserProfile = mockUserProfile;

  async getUserProfile(): Promise<UserProfile> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...this.userProfile }), 500);
    });
  }

  async updateUserProfile(profile: Partial<UserProfile>): Promise<UserProfile> {
    return new Promise((resolve) => {
      this.userProfile = { ...this.userProfile, ...profile };
      setTimeout(() => resolve({ ...this.userProfile }), 500);
    });
  }

  async updateSubscription(type: 'paid' | 'unpaid'): Promise<UserProfile> {
    return new Promise((resolve) => {
      this.userProfile = { ...this.userProfile, subscription: type };
      setTimeout(() => resolve({ ...this.userProfile }), 500);
    });
  }
}

export const userService = new UserService();
import { Platform } from './types';
import { mockPlatforms } from './mockData';

export const platformService = {
  getPlatforms: async (): Promise<Platform[]> => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPlatforms), 500);
    });
  },

  connectPlatform: async (platformId: string): Promise<Platform> => {
    // Simulate API call
    return new Promise((resolve) => {
      const platform = mockPlatforms.find(p => p.id === platformId);
      if (!platform) throw new Error('Platform not found');
      
      const updatedPlatform = { ...platform, status: 'connected' as const };
      setTimeout(() => resolve(updatedPlatform), 500);
    });
  },

  disconnectPlatform: async (platformId: string): Promise<Platform> => {
    // Simulate API call
    return new Promise((resolve) => {
      const platform = mockPlatforms.find(p => p.id === platformId);
      if (!platform) throw new Error('Platform not found');
      
      const updatedPlatform = { ...platform, status: 'pending' as const };
      setTimeout(() => resolve(updatedPlatform), 500);
    });
  },
};
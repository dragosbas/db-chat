import { Platform } from './types';
import { mockPlatforms } from './mockData';

class PlatformService {
  private platforms: Platform[] = mockPlatforms;

  getPlatforms = async (): Promise<Platform[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...this.platforms]), 500);
    });
  };

  getPlatform = async (id: string): Promise<Platform | undefined> => {
    return new Promise((resolve) => {
      const platform = this.platforms.find(p => p.id === id);
      setTimeout(() => resolve(platform), 500);
    });
  };

  connectPlatform = async (platformId: string): Promise<Platform> => {
    return new Promise((resolve, reject) => {
      const platformIndex = this.platforms.findIndex(p => p.id === platformId);
      if (platformIndex === -1) {
        reject(new Error('Platform not found'));
        return;
      }
      
      const updatedPlatform = { 
        ...this.platforms[platformIndex], 
        status: 'connected' as const,
        lastActive: new Date().toISOString()
      };
      
      this.platforms[platformIndex] = updatedPlatform;
      setTimeout(() => resolve(updatedPlatform), 500);
    });
  };

  disconnectPlatform = async (platformId: string): Promise<Platform> => {
    return new Promise((resolve, reject) => {
      const platformIndex = this.platforms.findIndex(p => p.id === platformId);
      if (platformIndex === -1) {
        reject(new Error('Platform not found'));
        return;
      }
      
      const updatedPlatform = { 
        ...this.platforms[platformIndex], 
        status: 'pending' as const 
      };
      
      this.platforms[platformIndex] = updatedPlatform;
      setTimeout(() => resolve(updatedPlatform), 500);
    });
  };
}

export const platformService = new PlatformService();
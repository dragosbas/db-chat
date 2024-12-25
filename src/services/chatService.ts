import { ChatPartner } from './types';
import { mockChatPartners } from './mockData';

class ChatService {
  private chatPartners: ChatPartner[] = mockChatPartners;

  async getChatPartners(): Promise<ChatPartner[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...this.chatPartners]), 500);
    });
  }

  async getChatPartner(id: string): Promise<ChatPartner | undefined> {
    return new Promise((resolve) => {
      const partner = this.chatPartners.find(p => p.id === id);
      setTimeout(() => resolve(partner), 500);
    });
  }

  async updateChatPartner(id: string, updates: Partial<ChatPartner>): Promise<ChatPartner> {
    return new Promise((resolve, reject) => {
      const partnerIndex = this.chatPartners.findIndex(p => p.id === id);
      if (partnerIndex === -1) {
        reject(new Error('Chat partner not found'));
        return;
      }

      const updatedPartner = {
        ...this.chatPartners[partnerIndex],
        ...updates
      };

      this.chatPartners[partnerIndex] = updatedPartner;
      setTimeout(() => resolve(updatedPartner), 500);
    });
  }
}

export const chatService = new ChatService();